document.addEventListener('DOMContentLoaded', () => {
    /* PART 1: SETUP VARIABLES
    --------------------------------------------------
    */
    
    // TODO: Get the elements from the DOM and store them in variables. Include the following elements:
    // - introduction
    // - editIntroButton
    // - projectList
    // - skillList
    // - addSkillButton
    // - newSkillInput
    // - skillLevelInput
    // - contactForm
    // - themeToggleButton
    // - body

    /* PART 2: IMPLEMENT DYNAMIC PROJECTS AND SKILLS
    --------------------------------------------------
    */

    const projects = [
        // TODO: Add projects here by defining objects with title, description, and link properties
        // Example: { title: 'Project 1', description: 'Description of project 1', link: '#'}
    ];

    const skills = [
        // TODO: Add skills here by defining objects with name and level properties
    ];

    function displayProjects() {
        projectList.innerHTML = '';
        projects.forEach(project => {
            // TODO: Create a new div element assigned to a new variable called projectCard and assign a className of 'project-card'. Set innerHTML to display the project title, description, and link
            // Example: projectCard.innerHTML = `<h3>${project.title}</h3> ...`

            projectList.appendChild(projectCard);
        });
    }

    function displaySkills() {
        skillList.innerHTML = '';
        skills.forEach(skill => {
            // TODO: Create a new li element assigned to a new variable called skillItem. Set innerHTML to display the skill name and level
            
            skillList.appendChild(skillItem);
        });
    }

    /* PART 3: IMPLEMENT INTRO TEXT EDITING
    --------------------------------------------------
    */

    editIntroButton.addEventListener('click', () => {
        // TODO: Prompt the user to enter a new introduction and update the introduction element with the new text
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
            //   2. Clear the input fields after adding the skill

        } else {
            // TODO: Display an alert if the skill name is empty or the skill level is not between 0 and 100
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO: 
        //   1. Get the values from the form fields name, email, and message and store them in variables.
        //   2. Display an alert if any of the fields are empty. Otherwise, display a success message

    });

    /* PART 5: IMPLEMENT THEME TOGGLE
    --------------------------------------------------
    */

    themeToggleButton.addEventListener('click', () => {
        // TODO: Toggle the dark-mode class on the body and save the theme preference to local storage
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
