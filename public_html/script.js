// Trigger on Enter key only
// Run when page loads
            window.onload = function () {
                // Show welcome modal
                document.getElementById("welcomeOverlay").style.display = "flex";

                // Start clock immediately
                updateClock();
                setInterval(updateClock, 1000);
            };

            // Submit name from modal
            function submitName() {
                const name = document.getElementById("visitorName").value.trim();
                const modal = document.getElementById("welcomeOverlay");

                if (name) {
                    const greeting = document.getElementById("greeting");
                    greeting.innerHTML = `⁠ Hi ${name}, Happy to have you here!!`;
                    modal.style.display = "none";
                } else {
                    alert("Please enter your name 🌷");
                }
            }


        
  
/*-- clock js --*/ 
            function updateClock() {
              const clock = document.getElementById("clock");
              const now = new Date();
              clock.textContent = now.toLocaleTimeString();
            }
            setInterval(updateClock, 1000);
            updateClock(); // run immediately
     
            
/*-- courses js --*/ 
            let currentIndex = 0;
            let autoSlideInterval;

            const courses = [
                {
                    title: "World Literature",
                    description: `Absolutely loved this class! It involves exploring classic and modern literature helps me understand different cultures and perspectives. 
                    My favorite literary work we worked on was "The Alchemist".`
                },
                {
                    title: "Web Systems",
                    description: `I love learning how to design and develop interactive websites with HTML, CSS, and JavaScript! 
                    Although the assignments can be lengthy and time-consuming, once I start working on them, it's like playing a game.`
                },
                {
                    title: "Data Comms & Networking",
                    description: `In this course I find understanding how data flows through networks truly fascinating and essential for IT security. 
                    Learning about the individual OSI layers is so interesting to me.`
                },
                {
                    title: "Intro. to Calculus",
                    description: `Although math isn’t always easy, I’ve grown to enjoy how calculus teaches you to see the world through curves and changes.`
                }
            ];

            // Fisher-Yates Shuffle
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            function renderCourses() {
                const track = document.querySelector(".slider-track");
                track.innerHTML = ""; // Clear previous content

                shuffle(courses);

                courses.forEach(course => {
                    const courseBox = document.createElement("div");
                    courseBox.classList.add("course-box");
                    courseBox.innerHTML = `
                        <h2>${course.title}</h2>
                        <p>${course.description}</p>
                    `;
                    track.appendChild(courseBox);
                });
            }

            function updateCarousel() {
                const track = document.querySelector(".slider-track");
                const boxes = document.querySelectorAll(".course-box");
                if (boxes.length === 0) return;

                const boxWidth = boxes[0].offsetWidth;
                track.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
            }

            function nextCourse() {
                const boxes = document.querySelectorAll(".course-box");
                currentIndex = (currentIndex + 1) % boxes.length;
                updateCarousel();
            }

            function prevCourse() {
                const boxes = document.querySelectorAll(".course-box");
                currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
                updateCarousel();
            }

            function startAutoSlide() {
                autoSlideInterval = setInterval(() => {
                    nextCourse();
                }, 5000);
            }

            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }

            window.addEventListener("load", () => {
                renderCourses();
                updateCarousel();
                startAutoSlide();
                document.querySelector(".course-carousel").addEventListener("mouseenter", stopAutoSlide);
                document.querySelector(".course-carousel").addEventListener("mouseleave", startAutoSlide);
            });

        
       
/*scroll buttons js*/ 
        const sections = document.querySelectorAll("section");
        let currentSectionIndex = 0;
        
        function scrollToSection(index) {
            if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: "smooth" });
            currentSectionIndex = index;
            } else if (index < 0) {
            // Scroll to very top if above first section
            window.scrollTo({ top: 0, behavior: "smooth" });
            currentSectionIndex = 0;
            } else {
            // Scroll to bottom if beyond last section
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            currentSectionIndex = sections.length - 1;
            }

            const scrollUpBtn = document.getElementById("scrollUpBtn");

            // hides button initially
            scrollUpBtn.style.display = "none";

            // Show button only when user scrolls down a bit
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    scrollUpBtn.style.display = "block";
                } else {
                    scrollUpBtn.style.display = "none";
                }
            });

        }
        
        //document.getElementById("scrollDownBtn").addEventListener("click", () => {
           // scrollToSection(currentSectionIndex + 1);
        // });
        
        document.getElementById("scrollUpBtn").addEventListener("click", () => {
            scrollToSection(currentSectionIndex - 1);
        });

 /*-- dark mode js --*/
        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        
            const darkModeButton = document.querySelector(".dark-toggle");
            const logo = document.getElementById("logoImage");
        
            if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "🌝";
            logo.src = "kuromi.png";
            } else {
            darkModeButton.textContent = "🌚";
            logo.src = "logo.png";
            }
        }
  
/*Contact me js */
        document.getElementById("contact").addEventListener("submit", function (e) {
            e.preventDefault(); // prevent form submission for now
          
            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
          
            // Simple email regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          
            if (!name) {
              alert("Please enter your name");
              return;
            }
          
            if (!email) {
              alert("Please enter your email");
              return;
            }
          
            if (!emailPattern.test(email)) {
              alert("Please enter a valid email address !!");
              return;
            }
          
            // If all checks pass
            alert("Thank you for reaching out! 💌");
          });
          