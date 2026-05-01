document.addEventListener('DOMContentLoaded', () => {
    /* PART 1: SETUP VARIABLES
    --------------------------------------------------
    */
    
    // TODO: Get the elements from the DOM and store them in variables. Include the following elements:
    const introduction = document.getElementById('introduction');
    const editIntroButton = document.getElementById('edit-intro');
    const projectList = document.getElementById('project-list');
    const skillList = document.getElementById('skill-list');
    const addSkillButton = document.getElementById('add-skill');
    const newSkillInput = document.getElementById('new-skill');
    const skillLevelInput = document.getElementById('skill-level');
    const contactForm = document.getElementById('contact-form');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    /* PART 2: IMPLEMENT DYNAMIC PROJECTS AND SKILLS
    --------------------------------------------------
    */

    const projects = [
        // TODO: Add projects here by defining objects with title, description, and link properties
        // Example: { title: 'Project 1', description: 'Description of project 1', link: '#'}
        {
            title: 'Ticket Purchasing System',
            description: 'A dynamic event registration system featuring a 10-minute timer and real-time cost calculation built with JavaScript.',
            link: 'https://cmst388-umgc-jcracolici.azurewebsites.net/event_registration.html'
        },
       {
            title: 'Form Validation',
            description: 'Developed a client-side validation system for a user registration form.', // FIXED TYPO HERE
            link: 'https://cmst388-umgc-jcracolici.azurewebsites.net/'
        }
    ];

    const skills = [
        // TODO: Add skills here by defining objects with name and level properties
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85},
        { name: 'JavaScript', level: 80},
        { name: 'Web Design', level: 95}
    ];

    function displayProjects() {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            // FIXED: Changed ' to ` and fixed ${project.description} typo
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectList.appendChild(projectCard);
        });
    }

   function displaySkills() {
        skillList.innerHTML = '';
        skills.forEach(skill => {
            // TODO: Create a new li element assigned to a new variable called skillItem. Set innerHTML to display the skill name and level
           const skillItem = document.createElement('li');
           skillItem.innerHTML = `
                <strong>${skill.name}</strong>
                <div class="skill-bar">
                    <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
                </div>
            `;
            skillList.appendChild(skillItem);
        });
    }

    /* PART 3: IMPLEMENT INTRO TEXT EDITING
    --------------------------------------------------
    */

    editIntroButton.addEventListener('click', () => {
        // TODO: Prompt the user to enter a new introduction and update the introduction element with the new text
        const newIntro = prompt("Enter a new introduction:");
        if (newIntro) {
            introduction.textContent = newIntro;
        }
    });

    /* PART 4: IMPLEMENT SKILLS DISPLAY AND CONTACT FORM FUNCTIONALITY
    --------------------------------------------------
    */

    addSkillButton.addEventListener('click', () => {
        const newSkill = newSkillInput.value.trim();
        const skillLevel = parseInt(skillLevelInput.value, 10);
        if (newSkill && skillLevel >= 0 && skillLevel <= 100) {
            // TODO: 
            //   1. Add the new skill to the skills array and display the updated list of skills. 
            skills.push({ name: newSkill, level: skillLevel });
            displaySkills();
            //   2. Clear the input fields after adding the skill
            newSkillInput.value = '';
            skillLevelInput.value = '';
        } else {
            // TODO: Display an alert if the skill name is empty or the skill level is not between 0 and 100
            alert("Please enter a valid skill name and a level between 0 and 100.");
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO: 
        //   1. Get the values from the form fields name, email, and message and store them in variables.
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        //   2. Display an alert if any of the fields are empty. Otherwise, display a success message
        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            body: JSON.stringify({ name, email, message }), 
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        .then(response => {
            if (response.ok) {
                alert("Success! Your message has been sent.");
                contactForm.reset();
            }
        })
        .catch(error => alert("There was an error sending your message."));
    });

    /* PART 5: IMPLEMENT THEME TOGGLE
    --------------------------------------------------
    */

    themeToggleButton.addEventListener('click', () => {
        // TODO: Toggle the dark-mode class on the body and save the theme preference to local storage
        body.classList.toggle('dark-mode');
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // Do not edit any code below this line
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    }

    applySavedTheme();
    displayProjects();
    displaySkills();
});
