const input = document.querySelector("input");
const button = document.querySelector(".task-button");
const list = document.querySelector(".task-list");
const tasks = [];
const tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
if (tasksFromStorage !== null) {
  if (tasksFromStorage.length !== 0) {
    tasksFromStorage.forEach((task) => {
      const item = document.createElement("li");
      list.prepend(item);
      const text = document.createElement("p");
      text.textContent = task.text;
      if(task.isDone) text.style.textDecoration = "line-through"
      item.prepend(text);

      const taskObj = {
        text: task.text,
        isDone: task.isDone,
      };
      text.addEventListener("click", () => {
        if (text.style.textDecoration === "line-through") {
          text.style.textDecoration = "none";
        } else {
          text.style.textDecoration = "line-through";
        }
        taskObj.isDone = !taskObj.isDone;
        let currentIndex;
        tasks.forEach((task, index) => {
          if (task.text === taskObj.text) {
            currentIndex = index;
          }
        });
        tasks[currentIndex] = taskObj;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });
      tasks.push(taskObj);

    });
  }
  
}

button.addEventListener("click", () => {
  if (input.value) {
    const item = document.createElement("li");
    list.prepend(item);
    const text = document.createElement("p");
    text.textContent = input.value;
    item.prepend(text);

    const taskObj = {
      text: input.value,
      isDone: false,
    };

    text.addEventListener("click", () => {
      if (text.style.textDecoration === "line-through") {
        text.style.textDecoration = "none";
      } else {
        text.style.textDecoration = "line-through";
      }
      taskObj.isDone = !taskObj.isDone;
      let currentIndex;
      tasks.forEach((task, index) => {
        if (task.text === taskObj.text) {
          currentIndex = index;
        }
      });
      tasks[currentIndex] = taskObj;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    tasks.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
