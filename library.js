let myLibrary = [];

let table = document.querySelector(".data");
let button = document.querySelector(".add");
button.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  document.getElementById("book-form").reset();
  populateTable();
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
    let remove = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.innerText = "REMOVE";
    //    removeButton.addEventListener("click", (arr[ind]) => {
    //
    //    });
    remove.appendChild(removeButton);
    titleData.innerText = element.title;
    authorData.innerText = element.author;
    pagesData.innerText = element.pages;
    readData.innerText = element.read;
    row.appendChild(titleData);
    row.appendChild(authorData);
    row.appendChild(pagesData);
    row.appendChild(readData);
    row.appendChild(remove);
    table.appendChild(row);
  });
}
