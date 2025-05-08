const set1 = [
    { question: "Which of the following best describes a zero-day vulnerability?", options: ["A flaw that has a known patch", "A flaw discovered and fixed within 24 hours", "A vulnerability that is exploited before being publicly known", "A type of phishing technique"], answer: "A vulnerability that is exploited before being publicly known" },
    { question: "What does the term 'Advanced Persistent Threat (APT)' refer to?", options: ["A short-term malware attack", "A large-scale DoS attack", "A prolonged and targeted cyberattack", "An easily removable rootkit"], answer: "A prolonged and targeted cyberattack" },
    { question: "Which hashing algorithm is considered broken and unsuitable for secure applications?", options: ["SHA-256", "MD5", "Bcrypt", "SHA-3"], answer: "MD5" },
    { question: "What is the primary goal of a buffer overflow attack?", options: ["To consume server bandwidth", "To escalate privileges", "To sniff network traffic", "To encrypt data"], answer: "To escalate privileges" },
    { question: "Which of the following best defines a 'watering hole' attack?", options: ["Compromising a system through USB drives", "Infecting websites frequently visited by a target group", "Malware spread through social engineering", "Denial of service on internal networks"], answer: "Infecting websites frequently visited by a target group" },
    { question: "What port number is used by HTTPS?", options: ["80", "443", " 22", "21"], answer: "443" },
    { question: "In SSL/TLS, which component ensures data confidentiality?", options: ["Digital signature", "Symmetric encryption", "Hashing", "Public key infrastructure"], answer: "Symmetric encryption" },
    { question: "Which tool is commonly used for network packet analysis?", options: ["Nmap", "Wireshark", " Nikto", "Burp Suite"], answer: "Wireshark" },
    { question: "What is the primary function of a reverse proxy?", options: ["To balance loads between servers", "To act as a firewall", "To hide the identity of backend servers", "To prevent data exfiltration"], answer: "To hide the identity of backend servers" },
    { question: "Which of these is NOT a component of the CIA triad?", options: ["Confidentiality", "Confidentiality", "Accountability", "Availability"], answer: "Accountability" },
    { question: "Which of the following best describes the end-to-end process for solving a data science problem?", options: ["Start with model selection, followed by data collection, and then deployment.", "Define the problem, perform data cleaning, build a model, and then ignore post-deployment.", "Define the business problem, collect and explore data, engineer features, build and evaluate models, deploy, and monitor.", " Start with data visualization, choose any algorithm, and deploy without evaluation."], answer: "Define the business problem, collect and explore data, engineer features, build and evaluate models, deploy, and monitor." },
    { question: "What is the most appropriate method to handle missing values in a dataset with numerical features?", options: ["Drop all rows", "Replace with mean/median", " Replace with zero", "Leave them as is"], answer: "Replace with mean/median" },
    { question: "Which of the following is used to reduce multicollinearity among features?", options: [" One-hot encoding", "Variance Inflation Factor (VIF)", " Feature scaling", " PCA has no effect on multicollinearity"], answer: "Variance Inflation Factor (VIF)" },
    { question: "Which of the following techniques helps prevent overfitting in machine learning models?", options: [" Increasing model complexity", "Reducing dataset size", "Regularization (L1/L2)", "Ignoring cross-validation"], answer: "Regularization (L1/L2)" },
    { question: "Which metric is best for evaluating a classification model on imbalanced data?", options: ["Accuracy", "Mean Squared Error", "R-squared", "Precision-Recall or F1-score"], answer: "Precision-Recall or F1-score" },
    { question: "How many numbers between 1 and 100 are divisible by 3 and 5 both?", options: ["6", "10", "7", "8"], answer: "7" },
    { question: "A shopkeeper allows 10% discount and still gains 20%. What is the marked price of an article costing ₹450?", options: ["₹500", "₹600", "₹625", "₹540"], answer: "₹625" },
    { question: "A train takes 18 seconds to pass a platform 120 m long and 12 seconds to pass a man. Find the train’s length.?", options: ["180 m", "200 m", "240 m", "300 m"], answer: "180 m" },
    { question: "If x = 3 and y = 4, what is the value of (x² + y²)?", options: ["25", "12", "5", "20"], answer: "25" },
    { question: "Find the smallest number that leaves a remainder of 1 when divided by 2, 3, 4, 5, and 6.", options: ["59", "61", "121", "158"], answer: "61" },
    { question: "If 20% of a number is 60, what is 50% of the same number?", options: ["120", "125", "150", "180"], answer: "150" },
    { question: "A man buys a watch for ₹400 and sells it for ₹500. What is the gain percentage?", options: ["20%", "25%", "30%", "30%"], answer: "25%" },
    { question: "A person spends 80% of his income. If his income increases by 20% and expenditure by 10%, his savings increase by:", options: ["50%", "60%", "75%s", "100%"], answer: "50%" },
    { question: "A sum doubles in 6 years at simple interest. What is the rate?", options: ["16.66%", " 18%", "20%", "25%"], answer: "20%" },
    { question: "A man walks 5 km at 4 km/h and returns at 5 km/h. Find his average speed.", options: ["4.44 km/h", "4.5 km/h", "4.2 km/h", "4.6 km/h"], answer: "4.44 km/h" }

];


const set2 = [
    { question: "Which of the following architecture is also known as systolic arrays?", options: ["MISD", "SISD", "SIMD", "None of the above"], answer: "MISD" },
    { question: "The correct ways to solve a problem of state-space search are?", options: ["Forward from the initial state", "Backward from the goal", "Both A and B", "None of the above"], answer: "Both A and B" },
    { question: "What is machine learning?", options: ["A type of computer", "A technique for teaching computers to learn from data", "A programming language", "A hardware device"], answer: "A technique for teaching computers to learn from data" },
    { question: "What is the primary goal of supervised learning?", options: ["Minimize errors in predictions", "Maximize computational efficiency", "Predict future events", "Learn from unlabeled data"], answer: "Minimize errors in predictions" },
    { question: "Which of the following is an example of an unsupervised learning algorithm?", options: ["Linear Regression", "K-Means Clustering", "Decision Trees", "Support Vector Machines"], answer: "K-Means Clustering" },
    { question: "Which method is used to access an HTML element by its ID in JavaScript?", options: ["getElementByName()", "getElementById()", "getByID()", "getId()"], answer: "getElementById()" },
    { question: "Which of the following is true about localStorage in web browsers?", options: ["It is sent with every HTTP request", "It stores data temporarily until the browser is closed", "It can store up to 5MB per origin", " It is accessible only by server-side scripts"], answer: "It can store up to 5MB per origin" },
    { question: "Which of these is a JavaScript library for building user interfaces?", options: [" Django", "React", "Laravel", "Flask"], answer: "React" },
    { question: "Which language is most commonly used with Node.js for backend development?", options: ["Java", "JavaScript", "Python", "PHP"], answer: "JavaScript" },
    { question: "What does REST stand for in RESTful APIs?", options: ["Random Extension of Server Time", "Representational State Transfer", " Remote Execution of Secure Transactions", "Real-time Server Transmission"], answer: "Representational State Transfer" },
    { question: "Which of the following is a consensus algorithm used by Bitcoin?", options: [" Proof of Stake", " Delegated Proof of Stake", "Practical Byzantine Fault Tolerance", "Proof of Work"], answer: "Proof of Work" },
    { question: "What are smart contracts?", options: ["Traditional contracts signed digitally", "Contracts written in plain English", "Self-executing code on the blockchain", "AI-generated agreements"], answer: " Self-executing code on the blockchain" },
    { question: "What is the native cryptocurrency of the Ethereum network?", options: ["Bitcoin", "Ether (ETH)", "Ripple (XRP)", "Cardano (ADA)"], answer: "Ether (ETH)" },
    { question: "What is the purpose of a cryptographic hash in blockchain?", options: ["To encrypt data for privacy", "To reduce the size of data", "To uniquely identify blocks and detect changes", "To create user passwords"], answer: "To uniquely identify blocks and detect changes" },
    { question: "Which of the following is a characteristic of a public blockchain?", options: ["Restricted access to data", "Centralized control", "Anyone can participate and validate transactions", "Requires government approval"], answer: "Anyone can participate and validate transactions" },
    { question: "What type of cloud model is shared among multiple organizations?", options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"], answer: "Community Cloud" },
    { question: " In a hybrid cloud model, the infrastructure is?", options: ["Fully hosted in a public cloud provider", " Split between on-premises and cloud environments", "Shared between multiple unrelated organizations", "Entirely virtual"], answer: " Split between on-premises and cloud environments" },
    { question: "Which of the following is not a benefit of cloud computing?", options: ["Scalability", "On-demand self-service", " High upfront capital investment", " Broad network access"], answer: "High upfront capital investment" },
    { question: " Which of the following is a security concern in cloud computing?", options: [" Vendor lock-in", "Elasticity", "Multitenancy", "Infinite scalability"], answer: "Multitenancy" },
    { question: "In cloud computing, pay-as-you-go pricing means:", options: ["You pay upfront for fixed usage", " Costs are based on future forecasts", " You pay only for the resources you use", "There is no billing"], answer: " You pay only for the resources you use" },
    { question: " Which algorithm is commonly used for training models in supervised learning?", options: [" K-means Clustering", " Genetic Algorithm", "Linear Regression", "Apriori"], answer: "Linear Regression" },
    { question: " Which of the following is an example of AI in everyday life", options: ["Antivirus software", "Automatic spell checker", "Voice assistants like Siri or Alexa", " Disk defragmenter"], answer: " Voice assistants like Siri or Alexa" },
    { question: " In unsupervised learning, the algorithm?", options: ["Is trained on labeled data", "Is used for regression only", " Learns patterns from unlabeled data", " Requires human feedback for every step"], answer: "Learns patterns from unlabeled data" },
    { question: "What is the Turing Test used to evaluate?", options: ["The memory usage of a program", "A computer’s ability to exhibit intelligent behavior indistinguishable from a human", "The accuracy of a search algorithmy", " Network performance"], answer: "A computer’s ability to exhibit intelligent behavior indistinguishable from a human" },
    { question: " Deep learning is a subset of:", options: ["Database Administratione", " Machine Learning", "  Data Mining", "Robotics)"], answer: " Machine Learning" }

];

let currentQuestionIndex = 0;
let currentRound = 1;
let score = 0;
let username = '';

function startQuiz() {
    username = document.getElementById('username').value.trim();
    if (username) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';
        showQuestion();
    } else {
        alert("Please enter your name!");
    }
}

function showQuestion() {
    const currentSet = currentRound === 1 ? set1 : set2;
    const question = currentSet[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    document.getElementById('options').innerHTML = question.options.map(option => `
        <input type="radio" name="answer" value="${option}" id="option-${option}">
        <label for="option-${option}">${option}</label>
    `).join('');
}

function submitAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    const answer = selected.value;
    const currentSet = currentRound === 1 ? set1 : set2;
    const correct = currentSet[currentQuestionIndex].answer;

    if (answer === correct) score++;

    currentQuestionIndex++;

    if (currentQuestionIndex < 25) {
        showQuestion();
    } else {
        if (currentRound === 1) {
            document.getElementById('quiz-screen').style.display = 'none';
            document.getElementById('round-summary-screen').style.display = 'block';
            document.getElementById('round-summary-text').innerText =
                `${username}, you scored ${score} out of 25 in Round 1. ${score >= 10 ? "You're eligible for Round 2!" : "Next round."}`;
        } else {
            showResult();
        }
    }
}

function startRound2() {
    if (score >= 0) {
        currentRound = 2;
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('round-summary-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('round-summary-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('result-text').innerText = `Well done, ${username}! Your final score is: ${score}`;
}
