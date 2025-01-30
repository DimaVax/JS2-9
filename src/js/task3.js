import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

const input = document.querySelector(".sigma-input");
const button = document.querySelector(".link-button");
const list = document.querySelector(".link-list");
const links = [];
console.log(links);


const linksFromStorage = JSON.parse(localStorage.getItem("links"));
if (linksFromStorage !== null) {
  if (linksFromStorage.length !== 0) {
    linksFromStorage.forEach((link) => {
      const item = document.createElement("li");
      list.prepend(item);
      const text = document.createElement("p");
      text.setAttribute("contenteditable", "");
      text.textContent = link.text;
      text.setAttribute("id", link.id)
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";

      item.prepend(removeBtn);
      item.prepend(text);

      removeBtn.addEventListener("click", () => {
        item.remove();
        links.forEach((link) => {
          const linkText = link.text;
          if (linkText === text.textContent) {
            _.remove(links, (currentLink) => currentLink === link);
            localStorage.setItem("links", JSON.stringify(links));
          }
        });
      });

      text.addEventListener('blur', (e) =>{
        links.forEach((link, index) => {
          const linkId = link.id;
          console.log(e.target)
          if (linkId === text.id) {
            links[index].text = text.textContent
            localStorage.setItem("links", JSON.stringify(links));
          }
          console.log(links);
        });
      })

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
    text.setAttribute("id", uuidv4())

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    item.prepend(removeBtn);
    item.prepend(text);

    removeBtn.addEventListener("click", () => {
      item.remove();
      links.forEach((link) => {
        const linkText = link.text;
        if (linkText === text.textContent) {
          _.remove(links, (currentLink) => currentLink === link);
          localStorage.setItem("links", JSON.stringify(links));
        }
        console.log(links);
      });
    });
    text.addEventListener('blur', (e) =>{
      links.forEach((link, index) => {
        const linkId = link.id;
        console.log(e.target)
        if (linkId === text.id) {
          links[index].text = text.textContent
          localStorage.setItem("links", JSON.stringify(links));
        }
        console.log(links);
      });
    })

    const linkObj = {
      text: input.value,
      id: text.id
    };

    links.push(linkObj);
    localStorage.setItem("links", JSON.stringify(links));
  }
});
