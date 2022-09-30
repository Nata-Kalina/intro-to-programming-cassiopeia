let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `Natasha Kalinicheva ${thisYear}`;
footer.appendChild(copyright);
let skills = [
  "OS: Windows, Adroid",
  "Programming: HTML, CSS, JavaScript, SQL, Basic Bash Scripting, Xpath",
  "Networking: TCP/IP, HTTP",
  "Project management: Jira, Xray, Confluence",
  "Tools: Android Studio, VSCode, MS Office, Git Hub, Postman, MySQL, Chrome Dev Tools, Swagger",
];
let skillSection = document.querySelector("#skills");
let skillsList = document.querySelector("#skills ul");
//skills.forEach(createList);
function createList() {
  for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  }
  return skillsList;
}
createList();
