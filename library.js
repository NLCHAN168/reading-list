let myLibrary = [];

let table = document.querySelector(".data");
let button = document.querySelector(".add");
button.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  if (!validate(title, author, pages)) {
    alert("Please enter valid fields!");
    document.getElementById("book-form").reset();
  } else {
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    populateTable();
    document.getElementById("book-form").reset();
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function toString() {
  return myLibrary.forEach((element) => console.log(element.info()));
}

function validate(title, author, pages) {
  if (title === "" || author === "" || !Number.isInteger(parseInt(pages))) {
    return false;
  }
  return true;
}

function populateTable() {
  let table = document.getElementById("data");
  while (table.childNodes.length) {
    table.removeChild(table.childNodes[0]);
  }
  myLibrary.forEach((element, ind, arr) => {
    let row = document.createElement("tr");
    let titleData = document.createElement("td");
    let authorData = document.createElement("td");
    let pagesData = document.createElement("td");
    let readData = document.createElement("td");
    let toggleRead = document.createElement("button");
    toggleRead.addEventListener("click", () => {
      myLibrary[ind].read = !myLibrary[ind].read;
      populateTable();
    });
    let remove = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.innerText = "REMOVE";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(ind, 1);
      populateTable();
    });
    remove.appendChild(removeButton);
    titleData.innerText = element.title;
    authorData.innerText = element.author;
    pagesData.innerText = element.pages;
    row.appendChild(titleData);
    row.appendChild(authorData);
    row.appendChild(pagesData);
    toggleRead.innerText = element.read;
    row.appendChild(toggleRead);
    row.appendChild(remove);
    table.appendChild(row);
  });
}
