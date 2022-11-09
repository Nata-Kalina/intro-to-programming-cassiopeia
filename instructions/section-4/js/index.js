let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `© Natasha Kalinicheva ${thisYear}`;
footer.appendChild(copyright);

let contactList = document.createElement("ul");
contactList.setAttribute("id", "connect");
let emailContact = document.createElement("li");
let gitHubContact = document.createElement("li");
emailContact.innerHTML = `<a href="mailto: natakalinatester@gmail.com" title="Gmail"><i class="fa fa-envelope" style="font-size:24px"></i></a>`;
gitHubContact.innerHTML = `<a href="https://github.com/Nata-Kalina" target="_blank" title="GitHub"><i class="fa fa-github" style="font-size:24px"></i></a>`;
contactList.appendChild(emailContact);
contactList.appendChild(gitHubContact);
footer.appendChild(contactList);

let skills = [
  "Windows",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Xpath",
  "Jira",
  "Xray",
  "Confluence",
  "VSCode",
  "MS Office",
  "Git Hub",
  "Postman",
  "MySQL",
  "Chrome Dev Tools",
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

document.getElementById("messages").style.visibility = "hidden";

let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("messages").style.visibility = "visible";

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  console.log(`Name: ${name}; Email: ${email}; Message: ${message}`);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = `Remove`;
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id", "remove-button");
  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    messageList.removeChild(entry);
  });

  const editButton = document.createElement("button");
  editButton.innerText = `Edit`;
  editButton.setAttribute("type", "button");
  editButton.setAttribute("id", "edit-button");
  editButton.addEventListener("click", (event) => {
    newMessage.remove();
    const nameElement = document.querySelector("[name = name]");
    nameElement.value = name;
    const emailElement = document.querySelector("[name = email]");
    emailElement.value = email;
    const messageElement = document.querySelector("[name = message]");
    messageElement.value = message;
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  newMessage.appendChild(editButton);

  messageForm.reset();
});

//let repositories = [];
//const githubRequest = new XMLHttpRequest();

//githubRequest.addEventListener("load", function () {
//  repositories = JSON.parse(this.response);
//  const projectSection = document.querySelector("#projects");
//  const projectList = document.querySelector("#projects ul");
//  function createProjectList() {
//    for (let i = 0; i < repositories.length; i++) {
//      let project = document.createElement("li");
//      project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
//      projectList.appendChild(project);
//    }
//    return projectList;
//  }
//  createProjectList();
//  console.log(repositories[0].name);
//  console.log(repositories);
//});

//githubRequest.open("GET", "https://api.github.com/users/Nata-Kalina/repos");
//githubRequest.send();

const githubRequest = fetch("https://api.github.com/users/Nata-Kalina/repos", {
  method: "GET",
  mode: "cors",
})
  .then((repositories) => {
    return repositories.json();
  })
  .then((repositories) => {
    const projectSection = document.querySelector("#projects");
    const projectList = document.querySelector("#projects ul");
    function createProjectList() {
      for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement("li");
        project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
        projectList.appendChild(project);
      }
      return projectList;
    }
    createProjectList();
    console.log(repositories[0].name);
    console.log(repositories);
  })
  .catch((error) => {
    const projectSection = document.querySelector("#projects");
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("id", "error");
    errorMessage.innerText = `Sorry! Something went wrong :(`;
    projectSection.appendChild(errorMessage);
    return projectSection;
  });
