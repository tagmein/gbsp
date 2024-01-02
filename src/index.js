import books from "./books.js";

let booksGrid = document.getElementById("books-grid");

books.map((book) => {
  const bookTemplate = document.createElement("div");
  
  bookTemplate.innerHTML = `
    <div class="h-full content-start border-[1px] border-gray-200 rounded p-2 cursor-pointer hover:scale-105 hover:border-transparent transition-transform duration-300">
        <div class="mb-2">
          <img
            src=${book.image}
            alt="book-image"
            class="h-[180px] rounded w-full object-cover"
          />
        </div>

        <h3 class="font-medium">${book.title}</h3>

        <a href="./book-details.html?id=${book.id}" class="text-sm text-blue-500 hover:underline transition-all"
          >Read book</a>
    </div>`;

  booksGrid.appendChild(bookTemplate);
});
