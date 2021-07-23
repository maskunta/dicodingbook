const localStorageKey = "BOOKSHELF";
const incompleteBookShelflist = "INCOMPLETE_BOOK";
const completeBookShelflist = "COMPLETE_BOOK";
function getBooks() {
    const books = window.localStorage.getItem(localStorageKey);
    //untuk mengubah string menjadi object
    return JSON.parse(books);
}
function addBook() {

    const title = document.querySelector("#inputBookTitle").value;
    const author = document.querySelector("#inputBookAuthor").value;
    const year = document.querySelector("#inputBookYear").value;
    const isComplete = document.querySelector("#inputBookIsComplete").checked;
    const book = {
        id: "",
        title: title,
        author: author,
        year: year,
        isComplete: isComplete
    };
    //mengambil buku dari local storage
    let books = getBooks()
    //memasukkan book ke dalam books
    books.push(book)
    //mengubah books menjadi string
    const books_string = JSON.stringify(books);
    //update local storage
    window.localStorage.setItem(localStorageKey, books_string);
    // <article class="book_item">-->
    //             <!--                <h3>Book Title</h3>-->
    //             <!--                <p>Penulis: John Doe</p>-->
    //             <!--                <p>Tahun: 2002</p>-->

    //             <!--                <div class="action">-->
    //             <!--                    <button class="green">Selesai dibaca</button>-->
    //             <!--                    <button class="red">Hapus buku</button>-->
    //             <!--                </div>-->
    //             <!--            </article>-->
    //memanggil fungsi updateshelf
    updateShelf(books);
}
function updateShelf(books) {
    const incomplete = document.getElementById("incompleteBookshelfList");
    const complete = document.getElementById("completeBookshelfList");
    books.forEach(element => {
        if (element.isComplete) {
            
        }
    });
}