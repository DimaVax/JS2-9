const input = document.querySelector(".sigma-input");
const button = document.querySelector(".link-button");
const list = document.querySelector(".link-list");
const links = [];



const linksFromStorage = JSON.parse(localStorage.getItem("links"));
if (linksFromStorage !== null) {
  if (linksFromStorage.length !== 0) {
    linksFromStorage.forEach((link) => {
      const item = document.createElement("li");
      list.prepend(item);
      const text = document.createElement("p");
      text.textContent = link.text;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      
      item.prepend(removeBtn);
      item.prepend(text);

      removeBtn.addEventListener("click", () => {
        item.remove();
        

        const savedLinks = localStorage.getItem('links');
        const linksArr = JSON.parse(savedLinks);
        linksArr.forEach(link => {
          const linkText = link.text;
          console.log(linkText);
          if(linkText === text.textContent){
            localStorage.setItem("links", JSON.stringify(links));
          }
        });
        
      });

      const linkObj = {
        text: link.text,
      };
      links.push(linkObj);
    });
  }
}

button.addEventListener("click", () => {
  if (input.value) {
    const item = document.createElement("li");
    list.prepend(item);

    const text = document.createElement("p");
    text.textContent = input.value;
    text.setAttribute("contenteditable", "");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    item.prepend(removeBtn);
    item.prepend(text);

    removeBtn.addEventListener("click", () => {
      item.remove();
      const savedLinks = localStorage.getItem('links');
        const linksArr = JSON.parse(savedLinks);
        linksArr.forEach(link => {
          const linkText = link.text;
          if(linkText === text.textContent){
            console.log(text.textContent)
            localStorage.setItem("links", JSON.stringify(links));
          }
        });
    });

    const linkObj = {
      text: input.value,
    };

    // text.addEventListener("click", () => {
    //   if (text.style.textDecoration === "line-through") {
    //     text.style.textDecoration = "none";
    //   } else {
    //     text.style.textDecoration = "line-through";
    //   }
    //   linkObj.isDone = !linkObj.isDone;
    //   let currentIndex;
    //   links.forEach((link, index) => {
    //     if (link.text === linkObj.text) {
    //       currentIndex = index;
    //     }
    //   });
    //   links[currentIndex] = linkObj;
    //   localStorage.setItem("links", JSON.stringify(links));
    // });

    links.push(linkObj);
    localStorage.setItem("links", JSON.stringify(links));
  }
});
