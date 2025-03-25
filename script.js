document.addEventListener("DOMContentLoaded", function() {
    let skills = ["HTML", "CSS", "JavaScript", "Java", "C", "Linux", "Kali Linux", "Ubuntu"];
    
    let skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    console.log("Portfolio Loaded Successfully!");
});

