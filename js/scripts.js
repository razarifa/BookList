let myLibrary = [];
function Book(title, author, page, read) {
 this.title = title;
 this.author = author;
 this.page = page;
 this.read = read;

 this.info = function () {
  return (
   title +
   " by " +
   author +
   " is " +
   page +
   " pages. And I have " +
   read +
   " it"
  );
 };
}
function addBookToLibrary() {
 // do stuff here
}
var book = new Book("1984", "George Orwell", 234, "read");
console.log(book.info());
