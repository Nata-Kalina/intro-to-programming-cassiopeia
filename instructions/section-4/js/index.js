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
  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    messageList.removeChild(entry);
  });

  const editButton = document.createElement("button");
  editButton.innerText = `Edit`;
  editButton.setAttribute("type", "button");
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
