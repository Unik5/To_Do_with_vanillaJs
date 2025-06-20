const container = document.getElementById("container");
const input_field = document.getElementById("input_box");
const button = document.getElementById("input_button");
const tasks = document.getElementById("list-container");

button.addEventListener("click", (e) => {
  if (input_field.value === "") {
    alert("Enter a Valid Task");
  } else {
    const task = input_field.value;
    const new_task = document.createElement("li");
    new_task.classList.add("pb-3"); //li ko class ma tailwind add gareko
    new_task.innerHTML = `<label class=" text-xl h-5 rounded-md">${task}</label>
    <button class="absolute right-5 text-[#555] align-middle text-xl">\u00d7</button> `;
    tasks.appendChild(new_task);
  }
  input_field.value = "";
  saveData();
});

tasks.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT" || e.target.tagName == "LABEL") {
    const li = e.target.closest("li"); // find the parent <li>
    const label = li.querySelector("label"); // get label inside that <li>
    if (label) {
      //if label exists then add line-through in class
      label.classList.toggle("line-through");
      saveData();
    }
  }
  //removing the LI when x button is clicked
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
});
//yo cahi reload garda ni data bhairakhos bhanera ho

//savedata in local storage of tasks.innerHTML
function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}
//retreive data from local Storage and save in tasks.innerHTML
function showTask() {
  tasks.innerHTML = localStorage.getItem("data");
}

//call showTasks everytime the script/ website loads
showTask();
