
// ========================================
// AngularJS App Module (defined only once)
// ========================================
var app = angular.module("researchApp", []);

// ========================================
// Publications Controller
// ========================================
app.controller("pubController", function ($scope) {

    // Dropdown filter values
    $scope.years = [2023, 2024, 2025, 2026];
    $scope.types = ["Computer Science", "Technology", "Mythology", "Ayurveda"];

    // Publications data
    $scope.publications = [

        // ---- Computer Science / Technology ----
        {
            title: "Symbiosis: Systems Thinking and Machine Intelligence for Better Outcomes in Society",
            authors: "Google Research",
            year: 2024,
            category: "Technology",
            image: "../assets/ml.png",
            link: "https://research.google/pubs/symbiosis-systems-thinking-and-machine-intelligence-for-better-outcomes-in-society-2/"
        },
        {
            title: "Towards Conversational AI for Disease Management",
            authors: "Google Research",
            year: 2024,
            category: "Computer Science",
            image: "../assets/ai.png",
            link: "https://research.google/pubs/towards-conversational-ai-for-disease-management/"
        },
        {
            title: "Transformers as Graph-to-Graph Models",
            authors: "Google Research",
            year: 2024,
            category: "Computer Science",
            image: "../assets/graph.png",
            link: "https://research.google/pubs/transformers-as-graph-to-graph-models/"
        },
        {
            title: "AI Increases Global Access to Reliable Flood Forecasts",
            authors: "Google Research",
            year: 2024,
            category: "Technology",
            image: "../assets/flood.png",
            link: "https://research.google/pubs/ai-increases-global-access-to-reliable-flood-forecasts-2/"
        },
        {
            title: "Quantum Computation of Stopping Power for Inertial Fusion Target Design",
            authors: "Google Research",
            year: 2024,
            category: "Technology",
            image: "../assets/quantum.png",
            link: "https://research.google/pubs/quantum-computation-of-stopping-power-for-inertial-fusion-target-design/"
        },
        {
            title: "Automatic Speech Recognition of Conversational Speech in Individuals with Disordered Speech",
            authors: "Google Research",
            year: 2024,
            category: "Technology",
            image: "../assets/speech.png",
            link: "https://research.google/pubs/automatic-speech-recognition-of-conversational-speech-in-individuals-with-disordered-speech/"
        },

        // ---- Mythology ----
        {
            title: "The Untragic Indian Stories",
            authors: "Unknown / Academia.edu",
            year: 2024,
            category: "Mythology",
            image: "../assets/india.png",
            link: "https://www.academia.edu/125832036/The_Untragic_Indian_Stories"
        },
        {
            title: "The Ramayana Reimagined: Ancient Tales in Contemporary Media",
            authors: "Unknown / Academia.edu",
            year: 2025,
            category: "Mythology",
            image: "../assets/ramayana.png",
            link: "https://www.academia.edu/129635570/The_Ramayana_Reimagined_Ancient_Tales_in_Contemporary_Media"
        },

        // ---- Ayurveda ----
        {
            title: "Exploring Ayurvedic Approaches (IJAM)",
            authors: "IJAM Journal",
            year: 2024,
            category: "Ayurveda",
            image: "../assets/ayurveda.png",
            link: "https://ijam.co.in/index.php/ijam/article/view/6264"
        },
        {
            title: "Ayurveda and Health Perspectives (IJAM)",
            authors: "IJAM Journal",
            year: 2025,
            category: "Ayurveda",
            image: "../assets/pcos.png",
            link: "https://ijam.co.in/index.php/ijam/article/view/6895"
        }
    ];

    // Reset filters
    $scope.resetFilters = function () {
        $scope.selectedYear = null;
        $scope.selectedCategory = null;
    };
});

// ========================================
// Plagiarism / AI Check Controller
// ========================================
app.controller("plagController", function ($scope) {

    $scope.plagText = "";
    $scope.plagURL = "";
    $scope.result = "";
    $scope.eligibility = "";
    $scope.eligibilityMsg = "";

    $scope.checkPlagiarism = function () {

        // Website URL check (mock logic)
        if ($scope.plagURL) {

            if ($scope.plagURL === "https://educationaldatamining.org/edm2024/proceedings/2024.EDM-short-papers.55/index.html") {
                $scope.eligibility = "not-eligible";
                $scope.eligibilityMsg = "The website content is AI-generated. Submission is not eligible.";
            } else {
                $scope.eligibility = "eligible";
                $scope.eligibilityMsg = "The website content appears to be human-written. You are eligible to proceed.";
            }

            $scope.result = "Plagiarism check completed for website.";
            return;
        }

        // Text input check
        if ($scope.plagText) {
            $scope.result = "Plagiarism check completed for text input.";
            $scope.eligibility = "eligible";
            $scope.eligibilityMsg = "The content appears to be human-written. You are eligible to proceed.";
            return;
        }

        // No input provided
        $scope.result = "Please provide text or a website link to check.";
        $scope.eligibility = "";
        $scope.eligibilityMsg = "";
    };
});



// ========================================
// Welcome Text Controller (NO TYPEWRITER)
// ========================================
app.controller("welcomeController", function ($scope) {
    $scope.welcomeText = "Welcome to ResearchHub";
});
const slides = document.querySelectorAll(".photo-slideshow img");
let currentIndex = 0;

// Show the first image initially
slides[currentIndex].classList.add("active");

// Change every 5 minutes (300000 ms)
setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}, 300000); // 5 minutes
var app = angular.module("researchApp", []);

app.controller("mainController", function($scope) {

    // Hero Slider
    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".slide");
        let current = 0;

        function changeSlide() {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }

        setInterval(changeSlide, 3000);
    });

});
// Contact Form Success Message
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const successMessage = document.getElementById("successMsg");

            successMessage.style.display = "block";
            contactForm.reset();

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 4000);
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");
    const msg = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            msg.style.display = "block";
            form.reset();

            setTimeout(() => {
                msg.style.display = "none";
            }, 4000);
        });
    }

});
var app = angular.module("researchApp", []);

app.controller("plagController", function ($scope) {

    $scope.checkPlagiarism = function () {

        if (!$scope.plagText && !$scope.plagURL) {
            $scope.result = "Please enter text or URL to check.";
            $scope.eligibility = "not-eligible";
            $scope.eligibilityMsg = "";
            return;
        }

        // Fake plagiarism percentage (demo logic)
        let plagiarismPercent = Math.floor(Math.random() * 40); // 0–39%

        $scope.result = "Detected Similarity: " + plagiarismPercent + "%";

        if (plagiarismPercent <= 20) {
            $scope.eligibility = "eligible";
            $scope.eligibilityMsg = "✔ Eligible for submission.";
        } else {
            $scope.eligibility = "not-eligible";
            $scope.eligibilityMsg = "✖ Not eligible. Please reduce plagiarism below 20%.";
        }
    };

});
app.controller("pubController", function ($scope) {

    $scope.years = [2022, 2023, 2024, 2025];

    $scope.publications = [
        {
            title: "Artificial Intelligence in Healthcare",
            authors: "Dr. Sharma, R. Patel",
            year: 2024,
            category: "Technology",
            image: "https://via.placeholder.com/150",
            link: "#"
        },
        {
            title: "Quantum Computing Algorithms",
            authors: "A. Verma, S. Iyer",
            year: 2023,
            category: "Computer Science",
            image: "https://via.placeholder.com/150",
            link: "#"
        },
        {
            title: "Ancient Indian Mythological Systems",
            authors: "P. Rao",
            year: 2022,
            category: "Mythology",
            image: "https://via.placeholder.com/150",
            link: "#"
        },
        {
            title: "Ayurvedic Medicine and Modern Science",
            authors: "Dr. Mehta",
            year: 2025,
            category: "Ayurveda",
            image: "https://via.placeholder.com/150",
            link: "#"
        }
    ];

    $scope.resetFilters = function () {
        $scope.selectedYear = "";
        $scope.selectedCategory = "";
        $scope.searchText = "";
    };

});
