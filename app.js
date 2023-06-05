const addBtn = document.querySelector("#btn");
const ul = document.createElement("ul");
document.querySelector(".item-list").before(ul);

addBtn.addEventListener("click", (e) => {
  //   console.log("Btn Clicked")
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)
  //   console.log(object);
  if (!input.value) {
    alert("Please enter a comment");
  } else {
    const input = document.querySelector("#input");
    const li = document.createElement("li");
    ul.appendChild(li);
    const textLi = document.createTextNode(input.value);
    li.appendChild(textLi);

    input.value = "";
    input.focus();
    ul.id = "sil";
  }
});

//? input'un üzerinde iken bir klavye tusuna basilirsa calis
document.querySelector("#input").addEventListener("keydown", (e) => {
  //   console.log(e.code);
  //   console.log(e.keyCode);
  //? Basilan tus Enter ise
  if (e.code === "Enter") {
    addBtn.click(); //? add butonun tiklanma fonksiyonu calistir.
  }
});

//?   ****** Ödev  ********
//! ****************************
const delbutton = document.querySelector("#delete");

delbutton.addEventListener("click", (e) => {
  const li = ul.querySelectorAll("ul li");
  if (li.length === 0) {
    alert("silinecek birşey kalmadı");
  } else {
    li[li.length - 1].remove();
  }
});

document.querySelector("#input").addEventListener("keydown", (e) => {
  //? Basilan tus delete ise
  if (e.code === "Delete") {
    delbutton.click(); //? add butonun tiklanma fonksiyonu calistir.
  }
});
// ! **********************
