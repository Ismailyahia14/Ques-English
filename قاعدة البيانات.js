document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const themeToggle = document.getElementById('themeToggle');
    const startTestBtn = document.getElementById('startTest');
    const submitTestBtn = document.getElementById('submitTest');
    const restartTestBtn = document.getElementById('restartTest');
    const newTestBtn = document.getElementById('newTest');
    const showAnswersBtn = document.getElementById('showAnswers');
    const questionsContainer = document.getElementById('questionsContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const testProgress = document.getElementById('testProgress');
    const testActions = document.getElementById('testActions');
    const progressFill = document.getElementById('progressFill');
    const currentQuestionEl = document.getElementById('currentQuestion');
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const statsText = document.getElementById('statsText');
    
    // عناصر النتائج
    const finalScoreEl = document.getElementById('finalScore');
    const percentageEl = document.getElementById('percentage');
    const correctCountEl = document.getElementById('correctCount');
    const wrongCountEl = document.getElementById('wrongCount');
    const skippedCountEl = document.getElementById('skippedCount');
    const resultMessageEl = document.getElementById('resultMessage');
    
    // متغيرات التطبيق
    let currentTest = [];
    let userAnswers = {};
    let testStarted = false;
    let testCompleted = false;
    let testHistory = [];
    
    // عدد الأسئلة في كل اختبار
    const QUESTIONS_PER_TEST = 50;
    
    // تحديث الإحصائيات
    function updateStats() {
        const totalTests = testHistory.length;
        const avgScore = totalTests > 0 ? 
            Math.round(testHistory.reduce((sum, test) => sum + test.score, 0) / totalTests) : 0;
        
        statsText.textContent = totalTests > 0 ? 
            `أجريت ${totalTests} اختبارات بمعدل ${avgScore}/50` : 
            "لم تبدأ أي اختبار بعد";
    }
    
    // تبديل الوضع الليلي/النهاري
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i> الوضع الليلي';
        }
    });
    
    // بدء اختبار جديد
    startTestBtn.addEventListener('click', startNewTest);
    newTestBtn.addEventListener('click', startNewTest);
    
    function startNewTest() {
        // إعادة تعيين المتغيرات
        currentTest = [];
        userAnswers = {};
        testStarted = true;
        testCompleted = false;
        
        // إخفاء النتائج وإظهار الأسئلة
        resultsContainer.style.display = 'none';
        questionsContainer.innerHTML = '';
        questionsContainer.style.display = 'block';
        
        // إظهار عناصر التحكم
        testProgress.style.display = 'block';
        testActions.style.display = 'flex';
        
        // تعطيل زر البدء
        startTestBtn.disabled = true;
        startTestBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإعداد...';
        
        // توليد 50 سؤالاً عشوائياً
        setTimeout(() => {
            // نسخ جميع الأسئلة
            let availableQuestions = [...questionBank];
            
            // خلط الأسئلة عشوائياً
            for (let i = availableQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
            }
            
            // اختيار أول 50 سؤال
            currentTest = availableQuestions.slice(0, QUESTIONS_PER_TEST);
            
            // عرض الأسئلة
            displayQuestions();
            
            // تحديث شريط التقدم
            updateProgress();
            
            // تمكين زر البدء مرة أخرى
            startTestBtn.disabled = false;
            startTestBtn.innerHTML = '<i class="fas fa-play"></i> بدء الاختبار الجديد';
            
            // تحديث الإحصائيات
            statsText.textContent = `اختبار جاري: ${currentTest.length} سؤال`;
        }, 500);
    }
    
    // عرض الأسئلة
    function displayQuestions() {
        questionsContainer.innerHTML = '';
        
        currentTest.forEach((question, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.dataset.questionId = question.id;
            
            let optionsHTML = '';
            
            if (question.type === 'true-false') {
                optionsHTML = `
                    <div class="true-false-buttons">
                        <button type="button" class="true-btn ${userAnswers[question.id] === true ? 'selected' : ''}" 
                                onclick="selectTrueFalse(${question.id}, true)">
                            <i class="fas fa-check"></i> صح
                        </button>
                        <button type="button" class="false-btn ${userAnswers[question.id] === false ? 'selected' : ''}" 
                                onclick="selectTrueFalse(${question.id}, false)">
                            <i class="fas fa-times"></i> خطأ
                        </button>
                    </div>
                `;
            } else if (question.type === 'multiple-choice') {
                optionsHTML = '<div class="options">';
                question.options.forEach((option, optionIndex) => {
                    const isSelected = userAnswers[question.id] === optionIndex;
                    optionsHTML += `
                        <div class="option-item ${isSelected ? 'selected' : ''}" 
                             onclick="selectMultipleChoice(${question.id}, ${optionIndex})">
                            ${String.fromCharCode(65 + optionIndex)}) ${option}
                        </div>
                    `;
                });
                optionsHTML += '</div>';
            }
            
            questionCard.innerHTML = `
                <div class="question-number">${index + 1}</div>
                <div class="question-text">${question.question}</div>
                <div class="question-category">الفئة: ${question.category}</div>
                ${optionsHTML}
            `;
            
            questionsContainer.appendChild(questionCard);
        });
    }
    
    // تحديث شريط التقدم
    function updateProgress() {
        const answeredCount = Object.keys(userAnswers).length;
        const progress = (answeredCount / QUESTIONS_PER_TEST) * 100;
        
        progressFill.style.width = `${progress}%`;
        currentQuestionEl.textContent = answeredCount;
        totalQuestionsEl.textContent = QUESTIONS_PER_TEST;
    }
    
    // تحديد إجابة صح/خطأ (يجب أن تكون دالة عامة)
    window.selectTrueFalse = function(questionId, answer) {
        if (!testStarted || testCompleted) return;
        
        userAnswers[questionId] = answer;
        
        // تحديث واجهة المستخدم
        const questionCard = document.querySelector(`[data-question-id="${questionId}"]`);
        const trueBtn = questionCard.querySelector('.true-btn');
        const falseBtn = questionCard.querySelector('.false-btn');
        
        trueBtn.classList.remove('selected');
        falseBtn.classList.remove('selected');
        
        if (answer === true) {
            trueBtn.classList.add('selected');
        } else {
            falseBtn.classList.add('selected');
        }
        
        updateProgress();
    };
    
    // تحديد إجابة متعددة الخيارات (يجب أن تكون دالة عامة)
    window.selectMultipleChoice = function(questionId, optionIndex) {
        if (!testStarted || testCompleted) return;
        
        userAnswers[questionId] = optionIndex;
        
        // تحديث واجهة المستخدم
        const questionCard = document.querySelector(`[data-question-id="${questionId}"]`);
        const optionItems = questionCard.querySelectorAll('.option-item');
        
        optionItems.forEach(item => item.classList.remove('selected'));
        optionItems[optionIndex].classList.add('selected');
        
        updateProgress();
    };
    
    // تقديم الاختبار وعرض النتيجة
    submitTestBtn.addEventListener('click', submitTest);
    
    function submitTest() {
        if (!testStarted) return;
        
        testCompleted = true;
        testStarted = false;
        
        // حساب النتيجة
        let score = 0;
        let correctCount = 0;
        let wrongCount = 0;
        let skippedCount = 0;
        
        currentTest.forEach(question => {
            const userAnswer = userAnswers[question.id];
            
            if (userAnswer === undefined) {
                skippedCount++;
            } else if (question.type === 'true-false') {
                if (userAnswer === question.correctAnswer) {
                    score++;
                    correctCount++;
                } else {
                    wrongCount++;
                }
            } else if (question.type === 'multiple-choice') {
                if (userAnswer === question.correctAnswer) {
                    score++;
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        });
        
        // حفظ النتيجة في السجل
        testHistory.push({
            date: new Date().toLocaleString(),
            score: score,
            total: QUESTIONS_PER_TEST,
            correctCount: correctCount,
            wrongCount: wrongCount,
            skippedCount: skippedCount
        });
        
        // تحديث واجهة النتائج
        finalScoreEl.textContent = score;
        const percentage = Math.round((score / QUESTIONS_PER_TEST) * 100);
        percentageEl.textContent = `${percentage}%`;
        
        correctCountEl.textContent = correctCount;
        wrongCountEl.textContent = wrongCount;
        skippedCountEl.textContent = skippedCount;
        
        // عرض رسالة حسب النتيجة
        let message = '';
        if (percentage >= 90) {
            message = 'ممتاز! أداء رائع. أنت على مستوى عالٍ من المعرفة.';
        } else if (percentage >= 75) {
            message = 'جيد جداً! لديك فهم قوي للمادة.';
        } else if (percentage >= 60) {
            message = 'جيد! تحتاج إلى بعض التحسين في بعض المجالات.';
        } else if (percentage >= 50) {
            message = 'مقبول! تحتاج إلى مراجعة المادة بشكل أفضل.';
        } else {
            message = 'ضعيف! أنت بحاجة إلى دراسة أكثر وتكرار الاختبار.';
        }
        
        resultMessageEl.textContent = message;
        
        // إظهار النتائج وإخفاء الأسئلة
        questionsContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // إخفاء عناصر التحكم
        testProgress.style.display = 'none';
        testActions.style.display = 'none';
        
        // تمكين زر البدء
        startTestBtn.disabled = false;
        
        // تحديث الإحصائيات
        updateStats();
    }
    
    // إعادة الاختبار
    restartTestBtn.addEventListener('click', function() {
        if (confirm('هل تريد بالتأكيد إعادة الاختبار؟ سيتم مسح جميع إجاباتك الحالية.')) {
            userAnswers = {};
            testCompleted = false;
            testStarted = true;
            
            // إعادة تعيين واجهة المستخدم
            displayQuestions();
            updateProgress();
            
            // إخفاء النتائج
            resultsContainer.style.display = 'none';
            questionsContainer.style.display = 'block';
            
            // إظهار عناصر التحكم
            testProgress.style.display = 'block';
            testActions.style.display = 'flex';
        }
    });
    
    // عرض الإجابات
    showAnswersBtn.addEventListener('click', function() {
        questionsContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        
        // إضافة الإجابات الصحيحة إلى كل سؤال
        currentTest.forEach((question, index) => {
            const questionCard = document.querySelector(`[data-question-id="${question.id}"]`);
            const questionText = questionCard.querySelector('.question-text');
            
            let correctAnswerText = '';
            if (question.type === 'true-false') {
                correctAnswerText = question.correctAnswer ? 'صح' : 'خطأ';
            } else if (question.type === 'multiple-choice') {
                const correctOption = question.options[question.correctAnswer];
                correctAnswerText = `${String.fromCharCode(65 + question.correctAnswer)}) ${correctOption}`;
            }
            
            // التحقق من إجابة المستخدم
            const userAnswer = userAnswers[question.id];
            let userAnswerText = '';
            let answerClass = '';
            
            if (userAnswer !== undefined) {
                if (question.type === 'true-false') {
                    userAnswerText = userAnswer ? 'صح' : 'خطأ';
                } else if (question.type === 'multiple-choice') {
                    userAnswerText = `${String.fromCharCode(65 + userAnswer)}) ${question.options[userAnswer]}`;
                }
                
                // تحديد إذا كانت الإجابة صحيحة
                const isCorrect = question.type === 'true-false' ? 
                    userAnswer === question.correctAnswer : 
                    userAnswer === question.correctAnswer;
                
                answerClass = isCorrect ? 'correct-answer' : 'wrong-answer';
            } else {
                userAnswerText = 'لم تجب على هذا السؤال';
                answerClass = 'skipped-answer';
            }
            
            // إضافة قسم الإجابات
            const answerDiv = document.createElement('div');
            answerDiv.className = `answer-feedback ${answerClass}`;
            answerDiv.innerHTML = `
                <div class="answer-row">
                    <strong>إجابتك:</strong> ${userAnswerText}
                </div>
                <div class="answer-row">
                    <strong>الإجابة الصحيحة:</strong> ${correctAnswerText}
                </div>
            `;
            
            // إدراج قسم الإجابات بعد نص السؤال
            questionText.parentNode.insertBefore(answerDiv, questionText.nextSibling);
        });
        
        // إضافة زر للعودة إلى النتائج
        const backButton = document.createElement('button');
        backButton.className = 'btn btn-primary';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> العودة إلى النتائج';
        backButton.style.margin = '20px auto';
        backButton.style.display = 'block';
        backButton.onclick = function() {
            questionsContainer.style.display = 'none';
            resultsContainer.style.display = 'block';
        };
        
        questionsContainer.appendChild(backButton);
    });
    
    // التهيئة الأولية
    updateStats();
    
    // إضافة أنماط للإجابات
    const style = document.createElement('style');
    style.textContent = `
        .answer-feedback {
            padding: 15px;
            border-radius: var(--border-radius);
            margin: 15px 0;
            border-right: 4px solid;
        }
        
        .correct-answer {
            background-color: #d4edda;
            border-color: #28a745;
        }
        
        .wrong-answer {
            background-color: #f8d7da;
            border-color: #dc3545;
        }
        
        .skipped-answer {
            background-color: #fff3cd;
            border-color: #ffc107;
        }
        
        .answer-row {
            margin-bottom: 8px;
        }
        
        .answer-row:last-child {
            margin-bottom: 0;
        }
        
        .dark-mode .correct-answer {
            background-color: #14532d;
            border-color: #22c55e;
        }
        
        .dark-mode .wrong-answer {
            background-color: #7f1d1d;
            border-color: #ef4444;
        }
        
        .dark-mode .skipped-answer {
            background-color: #78350f;
            border-color: #f59e0b;
        }
    `;
    document.head.appendChild(style);
});