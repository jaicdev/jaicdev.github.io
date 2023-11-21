<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            text-align: justify;
            margin: 0;
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
            border: 2px solid #fff;
            width: 100px;
            height: 100px;
        }
        .header-content {
            flex: 2;
            text-align: left;
            padding: 10px;
        }
        h1, h2 {
            color: #333;
        }
        .introduction, .experience, .education, .projects, .poster, .publications, .videos, .contact-info {
            margin-bottom: 20px;
        }
        a {
            color: #0070cc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
        }
        ul {
            list-style: none;
        }
        ul.details li {
            margin-bottom: 10px;
        }
        ul.project-details li {
            margin-bottom: 10px;
        }
        ul.project-details h3 {
            margin-top: 10px;
        }
        iframe {
            width: 100%;
        }
        .contact-icons {
            list-style: none;
            padding: 0;
        }
        .contact-icons li {
            display: inline-block;
            margin: 0 20px;
        }
        .contact-icons img {
            width: 32px;
            height: 32px;
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
                width: 80px;
                height: 80px;
                margin-bottom: 10px;
            }
            .header-content {
                text-align: center;
            }
            h1, h2 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
            }
            ul.details li {
                margin-bottom: 8px;
            }
            ul.project-details h3 {
                font-size: 16px;
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
            <p>Welcome to my corner of the digital realm! I'm a Junior Research Fellow with a passion for exploring the fascinating world of Computer Vision. My primary focus revolves around harnessing the power of deep-learning models and cutting-edge algorithms to address real-world challenges. Proficient in a diverse range of programming languages, including Python, MATLAB, and well-versed in the leading deep-learning frameworks such as TensorFlow, PyTorch, and Keras, I'm constantly pushing the boundaries of my knowledge to remain at the forefront of this dynamic field. I'm always on the lookout for exciting collaborations and eager to connect with fellow enthusiasts who share my passion for Computer Vision.
            
            When I'm not immersed in the world of pixels and algorithms, you can find me pursuing various interests that keep life balanced and exciting. I find solace in practicing yoga, losing myself in the pages of captivating books, strumming away on my ukulele, crafting insightful articles, exploring new destinations through travel, and embarking on exhilarating hikes. In addition to my academic pursuits, I have also achieved the milestones of completing 5 km and 10 km runs, as well as conquering the challenging half marathon. </p>
        </div>

        <div class="experience">
            <h2>Experience</h2>
            <ul class="details">
                <li><strong>Junior Research Fellow</strong>, Ahmedabad University (2022 - Present)
                    <ul>
                        <li>Project: Person Retrieval in Video Surveillance</li>
                        <li>Project Funding Agency: Gujarat Council on Science and Technology</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="education">
            <h2>Education</h2>
            <ul class="details">
                <li><strong>M.Engg in Automatic Control & Robotics</strong>, The Maharaja Sayajirao University of Baroda (2022)</li>
                <li><strong>B.Tech in Electrical Engineering</strong>, Institute of Infrastructure Technology Research and Management (2019)</li>
            </ul>
        </div>

        <div class="projects">
            <h2>Projects</h2>
            <ul class="project-details">
                <li>
                    <h3>Person Retrieval in Video Surveillance (Aug 2022 - Present)</h3>
                    <p>Person retrieval in video surveillance using textual queries involves searching for specific individuals based on textual descriptions. By utilizing multi-attribute learning, this approach enables efficient and accurate identification of persons of interest, aiding in forensic investigations and enhancing overall security measures.</p>
                </li>
                <li>
                    <h3>Sleep Stage Classification using Machine Learning Algorithms (Oct 2021 - Aug 2022)</h3>
                    <p>The sleep stage classification project achieved the highest accuracy of 91% in ensemble techniques of multiple models. The features extracted were the biorthogonal wavelet filters. The major impact of this research is to reduce the biasness in the imbalanced dataset. The imbalanced dataset was handled by configuring a new adaptive loss function.</p>
                </li>
                <li>
                    <h3>Wind Speed Forecasting with Machine Learning Algorithms (Jul 2018 - May 2019)</h3>
                    <p>A model of ARIMA, Support Vector Regression (SVM), and Random Forest algorithms for wind speed forecasting. Of all the models, SVM was the best-performing model with an accuracy of 98%. This forecasting model managed to reduce the penalty of the wind farms by 40%.</p>
                </li>
            </ul>
        </div>

        <div class="poster">
            <h2>Poster</h2>
            <ul class="details">
                <li>Generalization Study on Person Attribute Recognition, INDOML 2022, IITGn <a href="http://dx.doi.org/10.13140/RG.2.2.29671.01442" target="_blank">View Poster</a></li>
            </ul>
        </div>

        <div class="publications">
            <h2>Publications</h2>
            <ul class="details">
                <li>Chaudhari, J., Dhiman, H.S., Suthar, P., Manjunath, K. (2022). Wavelet Transform Based Comparative Analysis of Wind Speed Forecasting Techniques. In: Khosla, A., Aggarwal, M. (eds) Renewable Energy Optimization, Planning and Control. Studies in Infrastructure and Control. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-16-4663-8_11" target="_blank">Read Publication</a></li>
                <li> Tripathi, H., Chaudhari, J. N., Raval, M., Galiyawala, H., & Sharma, P. (2023). Integrating Datasets with Discrete and Natural Language Annotations for Person Retrieval. In The Tenth IEEE International Workshop on Security and Privacy for Internet of Things and Cyber-Physical Systems (IoT/CPS-Security 2023) <a href = "https://www.researchgate.net/publication/375597155_Integrating_Datasets_with_Discrete_and_Natural_Language_Annotations_for_Person_Retrieval">Read Publication </a></li>. 
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
                <li>
                    <a href="https://www.linkedin.com/in/jaychaudhari21/" target="_blank">
                        <img src="linkedin-svgrepo-com.svg" alt="LinkedIn">
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/jaicdev" target="_blank">
                        <img src="github-svgrepo-com.svg" alt="GitHub">
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/jai_chaudhari03/" target="_blank">
                        <img src="icons8-twitterx.svg" alt="X">
                    </a>
                </li>
                <li>
                    <a href="https://jaichaudhari.medium.com/" target="_blank">
                    <img src="medium-icon-svgrepo-com.svg" alt="Medium"> 
                <li>
                    <a href="mailto:jay.chauhdari@ahduni.edu.in" target="_blank">
                        <img src="email-part-2-svgrepo-com.svg" alt="E-mail">
                    </a>
                </li>
            </ul>
        </div>
    </div>
