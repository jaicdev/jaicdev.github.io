
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 20px;
            padding: 20px;
            max-width: 800px;
            margin: 20px auto;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .profile-picture {
            border-radius: 50%;
            border: 4px solid #fff;
            width: 120px;
            height: 120px;
            object-fit: cover;
        }
        .header-content {
            flex: 2;
            text-align: left;
            padding: 20px;
        }
        h1, h2 {
            color: #0070cc;
        }
        h1 {
            font-size: 28px;
            margin-bottom: 5px;
        }
        h2 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin-bottom: 8px;
        }
        a {
            color: #0070cc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        iframe {
            width: 100%;
            height: 315px;
        }
        .contact-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }
        .contact-icons a {
            margin: 0 15px;
        }
        .contact-icons img {
            width: 32px;
            height: 32px;
            transition: transform 0.3s ease-in-out;
        }
        .contact-icons img:hover {
            transform: scale(1.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                margin: 10px;
                padding: 10px;
            }
            .header {
                flex-direction: column;
                align-items: center;
            }
            .profile-picture {
                width: 100px;
                height: 100px;
                margin-bottom: 10px;
            }
            .header-content {
                text-align: center;
            }
            h1 {
                font-size: 24px;
            }
            h2 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
            }
            .contact-icons img {
                width: 24px;
                height: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img class="profile-picture" src="DSC_1776_soft.jpg" alt="Profile Picture">
            <div class="header-content">
                <h1>Jay Nareshbhai Chaudhari</h1>
                <p>Junior Research Fellow at Ahmedabad University</p>
            </div>
        </div>

        <div class="introduction">
            <h2>Introduction</h2>
            <p>Welcome to my corner of the digital realm! As a Junior Research Fellow with a passion for Computer Vision, I explore the convergence of pixels and algorithms to address real-world challenges. Proficient in Python, MATLAB, and deep-learning frameworks, I thrive on pushing the boundaries of knowledge. Beyond technology, I find balance in yoga, literature, music, and adventurous pursuits. Let's connect and share our enthusiasm for the limitless possibilities of Computer Vision!</p>
        </div>

        <div class="experience">
            <h2>Experience</h2>
            <ul>
                <li><strong>Junior Research Fellow</strong>, Ahmedabad University (2022 - Present)
                    <ul>
                        <li>Project: Person Retrieval in Video Surveillance</li>
                        <li>Funded by Gujarat Council on Science and Technology</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="education">
            <h2>Education</h2>
            <ul>
                <li><strong>M.Engg in Automatic Control & Robotics</strong>, The Maharaja Sayajirao University of Baroda (2022)</li>
                <li><strong>B.Tech in Electrical Engineering</strong>, Institute of Infrastructure Technology Research and Management (2019)</li>
            </ul>
        </div>

        <div class="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Person Retrieval in Video Surveillance</h3>
                    <p>Led the project focused on creating an end-to-end system for person retrieval in video surveillance</p>
                    <p>Successfully deployed the initial model on Nvidia Jetson Orion hardware for real-time video surveillance applications.</p>
                </li>
                <li>
                    <h3>Sleep Stage Classification Using Machine Learning Algorithms</h3>
                    <p>Developed a machine learning model for sleep stage classification, using Gradient Boosting, Decision Trees, and Bootstrap Aggregating algorithms.</p>
                    <p> Employed Wavelet decomposition of EEG Signal to extract features and incorporated time domain features. </p>
                    <p> Addressed the issue of imbalanced labels in the dataset, experimenting with both under-sampling and over-sampling techniques. </p>
                    <p> Achieved a high accuracy rate of 91% through the application of wavelet decomposition for feature extraction. </p>
                </li>
                <li>
                    <h3>Energy Management of Hybrid Wind Battery System</h3>
                    <p>Aimed to reduce financial penalties incurred by the grid operator due to inaccuracies in wind speed forecasts.</p>
                    <p>Implemented support vector regression, random forest, ARIMA, and simple exponential smoothing forecasting models.</p>
                    <p>Developed a battery charging and discharging scheduling algorithm based on state of charge and battery life.</p>
                    <p> Optimized power utilization from the battery storage system, resulting in a significant improvement of up to 40%. </p>
                </li>
            </ul>
        </div>

        <div class="poster">
            <h2>Poster</h2>
            <ul>
                <li>Generalization Study on Person Attribute Recognition, INDOML 2022, IITGn <a href="http://dx.doi.org/10.13140/RG.2.2.29671.01442" target="_blank">View Poster</a></li>
            </ul>
        </div>

        <div class="publications">
            <h2>Publications</h2>
            <ul>
                <li> J. N. Chaudhari, H. Galiyawala, M. Kuribayashi, P. Sharma and M. S. Raval, "Designing Practical End-to-End System for Soft Biometric-Based Person Retrieval from Surveillance Videos," in IEEE Access, <a href="https://dx.doi.org/10.1109/ACCESS.2023.3337108" target="_blank">Read Publication </a></li>
                <li>Tripathi, H., Chaudhari, J. N., Raval, M., Galiyawala, H., & Sharma, P. (2023). Integrating Datasets with Discrete and Natural Language Annotations for Person Retrieval. In The Tenth IEEE International Workshop on Security and Privacy for IoT and CPS (IoT/CPS-Security 2023) <a href="https://www.researchgate.net/publication/375597155_Integrating_Datasets_with_Discrete_and_Natural_Language_Annotations_for_Person_Retrieval" target="_blank">Read Publication</a></li>
                <li>Chaudhari, J., Dhiman, H.S., Suthar, P., Manjunath, K. (2022). Wavelet Transform Based Comparative Analysis of Wind Speed Forecasting Techniques. In: Khosla, A., Aggarwal, M. (eds) Renewable Energy Optimization, Planning and Control. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-16-4663-8_11" target="_blank">Read Publication</a></li>
            </ul>
        </div>
        <div class="Patent">
    <h2>Patent</h2>
    <p>Indian Patent: <strong>Method And System For Natural Air Ventilation And Temperature Control For Vehicle</strong> (Published)</p>
    <p>Inventors: Manish Kumar, Piyush Baldha, <strong>Jay Chaudhari</strong>, Sumit Upadhyay, Krunal Patel, Dr. Dipankar Deb</p>
    <p>Application Number: 201821048029</p>
    <p>Publication date: 06/09/2019</p>
    <ul><li>Developed an innovative system for natural air ventilation using copper ducts with a water flow system to control temperature in vehicles, significantly enhancing passenger comfort and energy efficiency without modifying the design of the vehicle.</li>
    </ul>
    </div>
        <div class="videos">
            <h2>Videos</h2>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xxB9zdMN52Q?si=KWHe4aUlsnDUCsn0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div class="contact-info">
            <h2>Contact Me</h2>
            <p>Feel free to connect with me on:</p>
            <ul class="contact-icons">
                <li><a href="https://www.linkedin.com/in/jaychaudhari21/" target="_blank"><img src="linkedin-svgrepo-com.svg" alt="LinkedIn"></a></li>
                <li><a href="https://www.github.com/jaicdev" target="_blank"><img src="github-svgrepo-com.svg" alt="GitHub"></a></li>
                <li><a href="https://twitter.com/jai_chaudhari03/" target="_blank"><img src="icons8-twitterx.svg" alt="Twitter"></a></li>
                <li><a href="https://jaichaudhari.medium.com/" target="_blank"><img src="medium-icon-svgrepo-com.svg" alt="Medium"></a></li>
                <li><a href="mailto:jay.chauhdari@ahduni.edu.in" target="_blank"><img src="email-part-2-svgrepo-com.svg" alt="Email"></a></li>
            </ul>
        </div>
    </div>
