// قاعدة بيانات الأسئلة (أكثر من 150 سؤال)
const questionBank = [
    // مجموعة أسئلة الصح والخطأ (50 سؤال)
    {
        id: 1,
        type: 'true-false',
        question: "Yemen's control over the Bab al-Mandab Strait affects global trade.",
        correctAnswer: true,
        category: "Yemen"
    },
    {
        id: 2,
        type: 'true-false',
        question: "Yemen was a key center for trading items like frankincense, myrrh, and spices.",
        correctAnswer: true,
        category: "Yemen"
    },
    {
        id: 3,
        type: 'true-false',
        question: "In 1990, Yemen was divided into North and South Yemen.",
        correctAnswer: false,
        category: "Yemen"
    },
    {
        id: 4,
        type: 'true-false',
        question: "Yemen's location at the entrance to the Red Sea is important for global shipping.",
        correctAnswer: true,
        category: "Yemen"
    },
    {
        id: 5,
        type: 'true-false',
        question: "Yemen's strategic importance has decreased over time.",
        correctAnswer: false,
        category: "Yemen"
    },
    {
        id: 6,
        type: 'true-false',
        question: "AI machines can recognize faces and make decisions.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 7,
        type: 'true-false',
        question: "AI learns by receiving data such as pictures, text, or sounds.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 8,
        type: 'true-false',
        question: "Before AI, machines could learn but at a slower speed.",
        correctAnswer: false,
        category: "AI"
    },
    {
        id: 9,
        type: 'true-false',
        question: "Early computers could drive cars.",
        correctAnswer: false,
        category: "AI"
    },
    {
        id: 10,
        type: 'true-false',
        question: "AI helps machines continuously get smarter as they acquire more data.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 11,
        type: 'true-false',
        question: "Islam teaches us how to live a good and peaceful life.",
        correctAnswer: true,
        category: "Islam"
    },
    {
        id: 12,
        type: 'true-false',
        question: "Muslims believe in many gods.",
        correctAnswer: false,
        category: "Islam"
    },
    {
        id: 13,
        type: 'true-false',
        question: "Muhammad (PBUH) is the first prophet in Islam.",
        correctAnswer: false,
        category: "Islam"
    },
    {
        id: 14,
        type: 'true-false',
        question: "Muslims pray three times a day.",
        correctAnswer: false,
        category: "Islam"
    },
    {
        id: 15,
        type: 'true-false',
        question: "Sawm is the practice of fasting during Ramadan.",
        correctAnswer: true,
        category: "Islam"
    },
    {
        id: 16,
        type: 'true-false',
        question: "Islam encourages Muslims to be kind and fair.",
        correctAnswer: true,
        category: "Islam"
    },
    {
        id: 17,
        type: 'true-false',
        question: "The sun rises in the east.",
        correctAnswer: true,
        category: "General"
    },
    {
        id: 18,
        type: 'true-false',
        question: "Water boils at 100 degrees Celsius.",
        correctAnswer: true,
        category: "General"
    },
    {
        id: 19,
        type: 'true-false',
        question: "The capital of Yemen is Aden.",
        correctAnswer: false,
        category: "Geography"
    },
    {
        id: 20,
        type: 'true-false',
        question: "English is the most spoken language in the world.",
        correctAnswer: false,
        category: "Language"
    },
    // إضافة المزيد من أسئلة الصح والخطأ
    {
        id: 21,
        type: 'true-false',
        question: "Yemen has no coastline.",
        correctAnswer: false,
        category: "Geography"
    },
    {
        id: 22,
        type: 'true-false',
        question: "Sana'a is one of the oldest inhabited cities in the world.",
        correctAnswer: true,
        category: "Geography"
    },
    {
        id: 23,
        type: 'true-false',
        question: "Yemen was known as Arabia Felix in ancient times.",
        correctAnswer: true,
        category: "History"
    },
    {
        id: 24,
        type: 'true-false',
        question: "The Yemeni Riyal is the currency of Yemen.",
        correctAnswer: true,
        category: "Economics"
    },
    {
        id: 25,
        type: 'true-false',
        question: "Mocha coffee originated from Yemen.",
        correctAnswer: true,
        category: "Culture"
    },
    {
        id: 26,
        type: 'true-false',
        question: "AI stands for Artificial Intelligence.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 27,
        type: 'true-false',
        question: "Machine Learning is a subset of AI.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 28,
        type: 'true-false',
        question: "Neural networks are inspired by the human brain.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 29,
        type: 'true-false',
        question: "AI cannot be used in healthcare.",
        correctAnswer: false,
        category: "AI"
    },
    {
        id: 30,
        type: 'true-false',
        question: "ChatGPT is an example of AI.",
        correctAnswer: true,
        category: "AI"
    },
    {
        id: 31,
        type: 'true-false',
        question: "There are five pillars of Islam.",
        correctAnswer: true,
        category: "Islam"
    },
    {
        id: 32,
        type: 'true-false',
        question: "The Quran is the holy book of Islam.",
        correctAnswer: true,
        category: "Islam"
    },
    {
        id: 33,
        type: 'true-false',
        question: "Hajj is performed in the month of Ramadan.",
        correctAnswer: false,
        category: "Islam"
    },
    {
        id: 34,
        type: 'true-false',
        question: "Zakat is the Islamic practice of charity.",
        correctAnswer: true,
        category: "Islam"
    },
    {
        id: 35,
        type: 'true-false',
        question: "There are 114 chapters in the Quran.",
        correctAnswer: true,
        category: "Islam"
    },
    // أسئلة متعددة الخيارات - مفردات
    {
        id: 36,
        type: 'multiple-choice',
        question: "What is the meaning of 'hygiene'?",
        options: ["Cleanliness", "Health", "Medicine", "Exercise"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 37,
        type: 'multiple-choice',
        question: "What is the meaning of 'seek'?",
        options: ["Look for", "Find", "Hide", "Avoid"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 38,
        type: 'multiple-choice',
        question: "What is the meaning of 'germs'?",
        options: ["Pathogens", "Vitamins", "Minerals", "Proteins"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 39,
        type: 'multiple-choice',
        question: "What is the meaning of 'symptoms'?",
        options: ["Diseases", "Diagnoses", "Treatment", "Indicators"],
        correctAnswer: 3,
        category: "Vocabulary"
    },
    {
        id: 40,
        type: 'multiple-choice',
        question: "What is the meaning of 'tiring'?",
        options: ["Exhausting", "Refreshing", "Energizing", "Relaxing"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 41,
        type: 'multiple-choice',
        question: "What is the meaning of 'progress'?",
        options: ["Development and improvement", "Regression", "Stagnation", "Decline"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 42,
        type: 'multiple-choice',
        question: "What is the meaning of 'prophets'?",
        options: ["Messengers", "Kings", "Warriors", "Teachers"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 43,
        type: 'multiple-choice',
        question: "What is the meaning of 'artificial'?",
        options: ["Naturally improved", "Created by human intervention", "Created without human intervention", "Created by itself"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 44,
        type: 'multiple-choice',
        question: "What is the meaning of 'strategic'?",
        options: ["Random", "Unnecessary", "Important for planning", "Outdated"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 45,
        type: 'multiple-choice',
        question: "What is the meaning of 'trade'?",
        options: ["Playing games", "Buying and selling goods", "Publishing books", "Teaching and learning"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 46,
        type: 'multiple-choice',
        question: "What is the meaning of 'control'?",
        options: ["To ignore", "To forget", "To destroy", "To have authority over"],
        correctAnswer: 3,
        category: "Vocabulary"
    },
    {
        id: 47,
        type: 'multiple-choice',
        question: "What is the meaning of 'goods'?",
        options: ["Commodities", "Services", "Information", "Ideas"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 48,
        type: 'multiple-choice',
        question: "What is the meaning of 'wealth'?",
        options: ["Poverty", "Scarcity", "Richness", "Deficiency"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 49,
        type: 'multiple-choice',
        question: "What is the meaning of 'key'?",
        options: ["Minor", "Essential", "Unimportant", "Optional"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 50,
        type: 'multiple-choice',
        question: "What is the meaning of 'role'?",
        options: ["Function", "Food", "Object", "Location"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 51,
        type: 'multiple-choice',
        question: "What is the meaning of 'unified'?",
        options: ["Divided", "Separated", "Lost", "Combined"],
        correctAnswer: 3,
        category: "Vocabulary"
    },
    {
        id: 52,
        type: 'multiple-choice',
        question: "What is the meaning of 'heritage'?",
        options: ["New inventions", "Modern technology", "Culture and traditions", "Physical changes"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 53,
        type: 'multiple-choice',
        question: "What is the meaning of 'significant'?",
        options: ["Unimportant", "Of great importance", "Very small", "Easily forgotten"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 54,
        type: 'multiple-choice',
        question: "What is the meaning of 'advanced'?",
        options: ["Simple", "Easy", "Modern", "Ancient"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 55,
        type: 'multiple-choice',
        question: "What is the meaning of 'tasks'?",
        options: ["Duties", "Games", "Thoughts", "Rules"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 56,
        type: 'multiple-choice',
        question: "What is the meaning of 'recognize'?",
        options: ["Forget", "Identify", "Create", "Ignore"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 57,
        type: 'multiple-choice',
        question: "What is the meaning of 'speech'?",
        options: ["Talking", "Writing", "Running", "Painting"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 58,
        type: 'multiple-choice',
        question: "What is the meaning of 'program'?",
        options: ["A plan", "A computer game", "A device", "A set of instructions"],
        correctAnswer: 3,
        category: "Vocabulary"
    },
    {
        id: 59,
        type: 'multiple-choice',
        question: "What is the meaning of 'adapt'?",
        options: ["Study carefully", "Solve a problem", "Adjust to new conditions", "Perform tasks efficiently"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 60,
        type: 'multiple-choice',
        question: "What is the meaning of 'data'?",
        options: ["Numbers and information", "Pictures and tasks", "Power and pictures", "Machines and devices"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    // أسئلة القواعد
    {
        id: 61,
        type: 'multiple-choice',
        question: "The sun ........in the east.",
        options: ["Rises", "Rise", "Rising", "Rised"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 62,
        type: 'multiple-choice',
        question: "He lives .....the small village.",
        options: ["In", "On", "At", "To"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 63,
        type: 'multiple-choice',
        question: "What is the V3 of Strive?",
        options: ["Strived", "Striven", "Strove", "Strived"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 64,
        type: 'multiple-choice',
        question: "What is the comparative of simple?",
        options: ["Simpler", "Simplest", "More simple", "Most simple"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 65,
        type: 'multiple-choice',
        question: "He is ..... than his brother.",
        options: ["Slimmer", "Slimmest", "Slim", "More slim"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 66,
        type: 'multiple-choice',
        question: "This is the ...... restaurant in town.",
        options: ["Best", "Better", "Good", "Well"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 67,
        type: 'multiple-choice',
        question: "They arrived .... the airport on time.",
        options: ["In", "On", "At", "To"],
        correctAnswer: 2,
        category: "Grammar"
    },
    {
        id: 68,
        type: 'multiple-choice',
        question: "She walked ..... the park.",
        options: ["In", "On", "At", "Through"],
        correctAnswer: 3,
        category: "Grammar"
    },
    {
        id: 69,
        type: 'multiple-choice',
        question: "She ...... speak English fluently.",
        options: ["Can", "May", "Must", "Should"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 70,
        type: 'multiple-choice',
        question: "He is sitting ..... the couch.",
        options: ["In", "On", "At", "During"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 71,
        type: 'multiple-choice',
        question: "The gift is ..... the box.",
        options: ["In", "On", "At", "Through"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 72,
        type: 'multiple-choice',
        question: "A sentence ......... a verb and subject.",
        options: ["Is divided into", "Are classified into", "Includes", "Consists of"],
        correctAnswer: 3,
        category: "Grammar"
    },
    {
        id: 73,
        type: 'multiple-choice',
        question: "If you ...... ice, it ...... .",
        options: ["Heat / melts", "Heated / melted", "Will heat / will melt", "Heating / melting"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 74,
        type: 'multiple-choice',
        question: "The keys are ....... the table.",
        options: ["In", "On", "Under", "At"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 75,
        type: 'multiple-choice',
        question: "The past participle of the verb 'See' ...........",
        options: ["Saw", "Seen", "See", "Sees"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 76,
        type: 'multiple-choice',
        question: "I ...... to school every day.",
        options: ["Go", "Went", "Going", "Gone"],
        correctAnswer: 0,
        category: "Grammar"
    },
    {
        id: 77,
        type: 'multiple-choice',
        question: "She ...... a book now.",
        options: ["Reads", "Is reading", "Read", "Has read"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 78,
        type: 'multiple-choice',
        question: "They ...... football yesterday.",
        options: ["Play", "Played", "Playing", "Plays"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 79,
        type: 'multiple-choice',
        question: "My sister ..... at 7:00 AM every day.",
        options: ["Left", "Leaves", "Leaving", "Leaved"],
        correctAnswer: 1,
        category: "Grammar"
    },
    {
        id: 80,
        type: 'multiple-choice',
        question: "We ...... in a small town.",
        options: ["Live", "Living", "Lives", "Lived"],
        correctAnswer: 0,
        category: "Grammar"
    },
    // المزيد من الأسئلة
    {
        id: 81,
        type: 'multiple-choice',
        question: "What is the meaning of 'peaceful'?",
        options: ["Loud", "Busy", "Angry", "Calm"],
        correctAnswer: 3,
        category: "Vocabulary"
    },
    {
        id: 82,
        type: 'multiple-choice',
        question: "What is the meaning of 'trust' in Islam?",
        options: ["To doubt", "To believe in Allah", "To challenge", "To distrust"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 83,
        type: 'multiple-choice',
        question: "What is the meaning of 'guide'?",
        options: ["To instruct", "To mislead", "To deceive", "To confuse"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 84,
        type: 'multiple-choice',
        question: "What is the meaning of 'mankind'?",
        options: ["Muslims", "Family members", "All people", "Countries"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 85,
        type: 'multiple-choice',
        question: "What is the meaning of 'teachings'?",
        options: ["Instructions or principles", "Entertainment", "Opinions", "Gossip"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 86,
        type: 'multiple-choice',
        question: "What is the meaning of 'declaring'?",
        options: ["Whispering", "Arguing", "Announcing", "Suggesting"],
        correctAnswer: 2,
        category: "Vocabulary"
    },
    {
        id: 87,
        type: 'multiple-choice',
        question: "What is the meaning of 'fasting'?",
        options: ["Eating quickly", "Running fast", "Cooking food", "Not eating and drinking temporarily"],
        correctAnswer: 3,
        category: "Vocabulary"
    },
    {
        id: 88,
        type: 'multiple-choice',
        question: "What is the meaning of 'pilgrimage'?",
        options: ["A school field trip", "A religious journey to Mekka", "A journey for leisure", "A picnic trip"],
        correctAnswer: 1,
        category: "Vocabulary"
    },
    {
        id: 89,
        type: 'multiple-choice',
        question: "What is the meaning of 'respect'?",
        options: ["Treat others with kindness", "Shout at others", "Insult others", "Show off"],
        correctAnswer: 0,
        category: "Vocabulary"
    },
    {
        id: 90,
        type: 'multiple-choice',
        question: "What is the meaning of 'oil rig'?",
        options: ["A place for refining oil", "A process of cleaning oil", "A ship for transporting oil", "A machine for drilling and extracting oil"],
        correctAnswer: 3,
        