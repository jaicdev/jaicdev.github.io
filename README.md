<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jay Nareshbhai Chaudhari</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="scripts.js"></script>
    <style>
        /* General Styles */
        body, h1, h2, p, ul {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            color: #333; /* Dark grey text for better readability */
        }

        body {
            background-color: #f4f4f4; /* Light grey background */
        }

        /* Container */
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header Styles */
        .header {
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #e9ecef; /* Lighter grey for the header */
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-radius: 5px;
            margin-bottom: 20px;
            animation: fadeInDown 1s ease-out;
        }

        .profile-picture {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            border-radius: 50%;
            border: 3px solid #adb5bd; /* Grey border for the profile picture */
        }

        .header-content h1, .header-content p {
            color: #495057; /* Darker grey for text */
        }

        /* Section Headers */
        section h2 {
            background-color: #6c757d; /* Desaturated blue for a grey-like appearance */
            color: white;
            padding: 10px;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            animation: fadeIn 1s ease-out;
        }

        /* Animations */
        @keyframes fadeIn {
            from {opacity: 0; transform: translateY(-20px);}
            to {opacity: 1; transform: translateY(0);}
        }

        @keyframes fadeInDown {
            from {opacity: 0; transform: translateY(-10px);}
            to {opacity: 1; transform: translateY(0);}
        }

        /* Contact Info */
        .contact-info {
            text-align: center;
            margin-top: 20px;
        }

        .contact-icons {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            margin-top: 20px; 
        }

        .contact-icons li {
            margin: 0 10px; 
        }

        .contact-icons img {
            width: 30px;
            height: 30px;
            transition: transform 0.3s ease;
        }

        .contact-icons img:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <img src="DSC_1776_soft.jpg" alt="Profile Picture" class="profile-picture">
            <div class="header-content">
                <h1>Jay Nareshbhai Chaudhari</h1>
                <p>Junior Research Fellow at Ahmedabad University</p>
            </div>
        </header>
        <main class="main-content">
            <section class="introduction section">
                <h2>Introduction</h2>
                <p>Welcome to my corner of the digital realm! As a Junior Research Fellow with a passion for Computer Vision, I explore the convergence of pixels and algorithms to address real-world challenges. Proficient in Python, MATLAB, and deep-learning frameworks, I thrive on pushing the boundaries of knowledge. Beyond technology, I find balance in yoga, literature, music, and adventurous pursuits. Let's connect and share our enthusiasm for the limitless possibilities of Computer Vision!</p>
            </section>
            <section class="experience section">
                <h2>Experience</h2>
                <ul>
                    <li><strong>Junior Research Fellow</strong>, Ahmedabad University (2022 - Present)
                        <ul>
                            <li>Project: Person Retrieval in Video Surveillance</li>
                            <li>Funded by Gujarat Council on Science and Technology</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section class="education section">
                <h2>Education</h2>
                <ul>
                    <li><strong>M.Engg in Automatic Control & Robotics</strong>, The Maharaja Sayajirao University of Baroda (2022)</li>
                    <li><strong>B.Tech in Electrical Engineering</strong>, Institute of Infrastructure Technology Research and Management (2019)</li>
                </ul>
            </section>
            <section class="projects section">
                <h2>Projects</h2>
                <ul>
                    <li>
                        <h3>Person Retrieval in Video Surveillance</h3>
                        <p>Led the project focused on creating an end-to-end system for person retrieval in video surveillance.</p>
                        <p>Successfully deployed the initial model on Nvidia Jetson Orion hardware for real-time video surveillance applications.</p>
                    </li>
                    <li>
                        <h3>Sleep Stage Classification Using Machine Learning Algorithms</h3>
                        <p>Developed a machine learning model for sleep stage classification, using Gradient Boosting, Decision Trees, and Bootstrap Aggregating algorithms.</p>
                        <p>Employed Wavelet decomposition of EEG Signal to extract features and incorporated time domain features.</p>
                        <p>Addressed the issue of imbalanced labels in the dataset, experimenting with both under-sampling and over-sampling techniques.</p>
                        <p>Achieved a high accuracy rate of 91% through the application of wavelet decomposition for feature extraction.</p>
                    </li>
                    <li>
                        <h3>Energy Management of Hybrid Wind Battery System</h3>
                        <p>Aimed to reduce financial penalties incurred by the grid operator due to inaccuracies in wind speed forecasts.</p>
                        <p>Implemented support vector regression, random forest, ARIMA, and simple exponential smoothing forecasting models.</p>
                        <p>Developed a battery charging and discharging scheduling algorithm based on state of charge and battery life.</p>
                        <p>Optimized power utilization from the battery storage system, resulting in a significant improvement of up to 40%.</p>
                    </li>
                </ul>
            </section>
            <section class="poster section">
                <h2>Poster</h2>
                <ul>
                    <li>Generalization Study on Person Attribute Recognition, INDOML 2022, IITGn <a href="" target="_blank">View Poster</a></li>
                </ul>
            </section>
            <section class="publications section">
                <h2>Publications</h2>
                <ul>
                    <li>J. N. Chaudhari, H. Galiyawala, M. Kuribayashi, P. Sharma and M. S. Raval, "Designing Practical End-to-End System for Soft Biometric-Based Person Retrieval from Surveillance Videos," in IEEE Access, <a href="https://dx.doi.org/10.1109/ACCESS.2023.3337108" target="_blank">Read Publication</a></li>
                    <li>Tripathi, H., Chaudhari, J. N., Raval, M., Galiyawala, H., & Sharma, P. (2023). Integrating Datasets with Discrete and Natural Language Annotations for Person Retrieval. In The Tenth IEEE International Workshop on Security and Privacy for IoT and CPS (IoT/CPS-Security 2023) <a href="https://www.researchgate.net/publication/375597155_Integrating_Datasets_with_Discrete_and_Natural_Language_Annotations_for_Person_Retrieval" target="_blank">Read Publication</a></li>
                    <li>Chaudhari, J., Dhiman, H.S., Suthar, P., Manjunath, K. (2022). Wavelet Transform Based Comparative Analysis of Wind Speed Forecasting Techniques. In: Khosla, A., Aggarwal, M. (eds) Renewable Energy Optimization, Planning and Control. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-16-4663-8_11" target="_blank">Read Publication</a></li>
                </ul>
            </section>
            <section class="patent section">
                <h2>Patent</h2>
                <ul>
                    <li>Indian Patent: <strong>Method And System For Natural Air Ventilation And Temperature Control For Vehicle</strong> (Published)</li>
                    <p>Inventors: Manish Kumar, Piyush Baldha, <strong>Jay Chaudhari</strong>, Sumit Upadhyay, Krunal Patel, Dr. Dipankar Deb</p>
                    <p>Application Number: 201821048029 | Publication date: 06/09/2019</p>
                    <p>Developed an innovative system for natural air ventilation using copper ducts with a water flow system to control temperature in vehicles, significantly enhancing passenger comfort and energy efficiency without modifying the design of the vehicle.</p>
                </ul>
            </section>
            <section class="videos section">
                <h2>Videos</h2>
                <iframe src="https://www.youtube-nocookie.com/embed/xxB9zdMN52Q?si=KWHe4aUlsnDUCsn0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </main>
        <footer class="contact-info">
            <h2>Connect with me</h2>
            <ul class="contact-icons">
                <li><a href="https://www.linkedin.com/in/jaychaudhari21/" target="_blank"><img src="linkedin-svgrepo-com.svg" alt="LinkedIn"></a></li>
                <li><a href="https://www.github.com/jaicdev" target="_blank"><img src="github-svgrepo-com.svg" alt="GitHub"></a></li>
                <li><a href="https://twitter.com/jai_chaudhari03/" target="_blank"><img src="icons8-twitter.svg" alt="Twitter"></a></li>
                <li><a href="https://jaichaudhari.medium.com/" target="_blank"><img src="medium-icon-svgrepo-com.svg" alt="Medium"></a></li>
                <li><a href="mailto:jay.chauhdari@ahduni.edu.in" target="_blank"><img src="email-part-2-svgrepo-com.svg" alt="Email"></a></li>
            </ul>
        </footer>
    </div>
</body>
</html>
