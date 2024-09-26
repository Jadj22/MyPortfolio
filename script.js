let darkMode = false;

        function changeDarkMode() {
            darkMode = !darkMode;
            if (darkMode) {
                // Passer en mode sombre
                document.documentElement.style.setProperty("--text-color", "white");
                document.documentElement.style.setProperty("--background-color", "black");
                document.getElementById("dark-light-mode").innerHTML = `
                    <span class="material-symbols-outlined">light_mode</span>
                    <span id="dark-light-text">Mode clair</span>`;
            } else {
                // Passer en mode clair
                document.documentElement.style.setProperty("--text-color", "black");
                document.documentElement.style.setProperty("--background-color", "#efe7e5");
                document.getElementById("dark-light-mode").innerHTML = `
                    <span class="material-symbols-outlined">dark_mode</span>
                    <span id="dark-light-text">Mode sombre</span>`;
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            var app = document.getElementById('typewriter');

            var typewriter = new Typewriter(app, {
                loop: true
            });

            typewriter.typeString('Bonjour,<br> je suis Adjanke Joel')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Hello,<br> I am Adjanke Joel')
                .pauseFor(2500)
                .deleteAll()
                .start();
        });

        // Basculement de langue
        let lang = "fr"; // Langue par défaut est le français

        const texts = {
            fr: {
                nav: {
                    email: "jadjdev2@gmail.com",
                    darkMode: "Mode sombre",
                    langToggle: "Passer en anglais"
                },
                header: {
                    location: "Lomé, Togo",
                    typewriter1: "Bonjour,<br> je suis Adjanke Joel",
                    paragraph: "Je suis passionné par l'informatique, actuellement en deuxième année de génie logiciel. J'ai un intérêt particulier pour le développement web et mobile et je prévois de me spécialiser dans ce domaine. Mon parcours d'études m'a déjà permis de me familiariser avec le développement d'applications mobiles et web, ainsi qu'avec la conception d'interfaces utilisateur. Je continue d'approfondir mes connaissances dans ces domaines et je suis toujours en apprentissage pour améliorer mes compétences."
                },
                about: {
                    title: "À propos de moi",
                    content: `Je suis Joel Adjanke, passionné par les nouvelles technologies et actuellement en deuxième année de génie logiciel. Mon domaine de prédilection est le développement web et mobile, où j'aime résoudre des problèmes complexes grâce à des solutions créatives et bien conçues.
                        <br><br>
                        Mes projets personnels, comme le défi 100DaysOfCoding et mes contributions en tant que formateur HTML & CSS, reflètent mon engagement envers l'apprentissage continu et le partage de connaissances. Je suis toujours à la recherche de nouveaux défis pour développer mes compétences, notamment en React.js et Node.js, et je suis convaincu que le développement web est une voie pour impacter positivement le monde.
                        Je suis en apprentissage permanent pour rester à la pointe des dernières tendances technologiques.`
                },
                projects: {
                    project1: {
                        title: "100DaysOfCoding",
                        content: `Durant ce projet, j’ai développé des habitudes de codage et amélioré mes compétences en développement web, notamment en HTML et CSS. Ce défi m'a permis de renforcer ma discipline de codage quotidienne.
                            <a href="https://github.com/100daysofcoding/Jadj22-s-code">Voir plus</a>`
                    },
                    project2: {
                        title: "Formateur en HTML & CSS (GitHub)",
                        content: `J'ai eu la chance de participer en tant que formateur lors d'une formation d'initiation organisée par OOZONS, où j'ai pu partager mes connaissances en HTML et CSS avec des étudiants débutants.
                            <a href="https://github.com/Jadj22/FORMATION-HTML---CSS-REPO">Voir plus</a>`
                    },
                    project3: {
                        title: "React-js-masterclass (GitHub)",
                        content: `Ce projet est une masterclass en React.js où j'ai appliqué mes bases en JavaScript pour construire des mini applications comme une todo-list, un compteur simple, et un formulaire de saisie. Il représente mon apprentissage continu en React.
                            <a href="https://github.com/Jadj22/React-js-masterclass">Voir plus</a>`
                    },
                    project4: {
                        title: "Serveur Samba",
                        content: `Avec mon équipe, nous avons mis en place un réseau de partage de fichiers grâce à Samba, facilitant le transfert de documents entre étudiants. Ce projet a permis d'améliorer l'efficacité des échanges de cours.`
                    }
                },
                footer: {
                    text: "&copy; Joel Adjanke 2024"
                },
                buttons: {
                    darkMode: "Mode sombre",
                    lightMode: "Mode clair",
                    langToggle: "Passer en anglais"
                }
            },
            en: {
                nav: {
                    email: "jadjdev2@gmail.com",
                    darkMode: "Light Mode",
                    langToggle: "Switch to French"
                },
                header: {
                    location: "Lomé, Togo",
                    typewriter1: "Hello,<br> I am Adjanke Joel",
                    paragraph: "I am passionate about computer science, currently in my second year of software engineering. I have a special interest in web and mobile development and I plan to specialize in this area. My studies have already introduced me to mobile and web application development, as well as UI design. I continue to deepen my knowledge in these fields and I am always learning to improve my skills."
                },
                about: {
                    title: "About Me",
                    content: `I am Joel Adjanke, passionate about new technologies and currently in my second year of software engineering. My favorite area is web and mobile development, where I enjoy solving complex problems with creative and well-designed solutions.
                        <br><br>
                        My personal projects, like the 100DaysOfCoding challenge and my contributions as an HTML & CSS trainer, reflect my commitment to continuous learning and knowledge sharing. I am always looking for new challenges to develop my skills, especially in React.js and Node.js, and I believe that web development is a way to positively impact the world.
                        I am constantly learning to stay at the forefront of the latest technological trends.`
                },
                projects: {
                    project1: {
                        title: "100DaysOfCoding",
                        content: `During this project, I developed coding habits and improved my web development skills, especially in HTML and CSS. This challenge helped me strengthen my daily coding discipline.
                            <a href="https://github.com/100daysofcoding/Jadj22-s-code">See more</a>`
                    },
                    project2: {
                        title: "HTML & CSS Trainer (GitHub)",
                        content: `I had the opportunity to participate as a trainer during an introductory course organized by OOZONS, where I was able to share my knowledge in HTML and CSS with beginner students.
                            <a href="https://github.com/Jadj22/FORMATION-HTML---CSS-REPO">See more</a>`
                    },
                    project3: {
                        title: "React-js-masterclass (GitHub)",
                        content: `This project is a React.js masterclass where I applied my JavaScript skills to build mini applications such as a todo-list, a simple counter, and an input form. It represents my continuous learning in React.
                            <a href="https://github.com/Jadj22/React-js-masterclass">See more</a>`
                    },
                    project4: {
                        title: "Samba Server",
                        content: `With my team, we set up a file-sharing network using Samba, facilitating document transfer between students. This project improved the efficiency of course exchanges.`
                    }
                },
                footer: {
                    text: "&copy; Joel Adjanke 2024"
                },
                buttons: {
                    darkMode: "Dark Mode",
                    lightMode: "Light Mode",
                    langToggle: "Switch to French"
                }
            }
        };

        function toggleLanguage() {
            lang = (lang === "fr") ? "en" : "fr";
            updateTextContent();
        }

        function updateTextContent() {
            // Navigation
            document.querySelector('nav ul li a').textContent = texts[lang].nav.email;
            document.getElementById("dark-light-text").textContent = (darkMode) ? texts[lang].buttons.lightMode : texts[lang].buttons.darkMode;
            document.getElementById("lang-toggle").textContent = texts[lang].nav.langToggle;

            // Header
            document.querySelector('.header-left small').innerHTML = `
                <span class="material-symbols-outlined">home_pin</span>
                ${texts[lang].header.location}`;
            // Typewriter effect is handled separately
            document.getElementById("header-paragraph").innerHTML = texts[lang].header.paragraph;

            // About Section
            document.getElementById("about-title").textContent = texts[lang].about.title;
            document.getElementById("about-content").innerHTML = texts[lang].about.content;

            // Projects Section
            document.getElementById("project1-title").textContent = texts[lang].projects.project1.title;
            document.getElementById("project1-content").innerHTML = texts[lang].projects.project1.content;

            document.getElementById("project2-title").textContent = texts[lang].projects.project2.title;
            document.getElementById("project2-content").innerHTML = texts[lang].projects.project2.content;

            document.getElementById("project3-title").textContent = texts[lang].projects.project3.title;
            document.getElementById("project3-content").innerHTML = texts[lang].projects.project3.content;

            document.getElementById("project4-title").textContent = texts[lang].projects.project4.title;
            document.getElementById("project4-content").innerHTML = texts[lang].projects.project4.content;

            // Footer
            document.getElementById("footer-text").innerHTML = texts[lang].footer.text;
        }

        // Initialisation
        updateTextContent(); // Mettre à jour le contenu selon la langue par défaut

        // Mise à jour de l'effet typewriter lors du changement de langue
        function updateTypewriter() {
            var app = document.getElementById('typewriter');
            app.innerHTML = ''; // Réinitialiser le contenu

            var typewriter = new Typewriter(app, {
                loop: true
            });

            if (lang === "fr") {
                typewriter.typeString('Bonjour,<br> je suis Adjanke Joel')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
            } else {
                typewriter.typeString('Hello,<br> I am Adjanke Joel')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
            }
        }

        // Appel initial pour l'effet typewriter
        updateTypewriter();

        // Modification de la fonction toggleLanguage pour inclure l'effet typewriter
        function toggleLanguage() {
            lang = (lang === "fr") ? "en" : "fr";
            updateTextContent();
            updateTypewriter();
        }