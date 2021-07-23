document.addEventListener("DOMContentLoaded", function () {

    // window.localStorage.setItem("contoh", "ini contoh")
    // console.log(getBooks());
    const submitForm = document.getElementById("inputBook");
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
    });
})