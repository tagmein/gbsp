import books from "./books.js";

const bookDetailsWrapper = document.getElementById("book-details");
const pageParams = new URLSearchParams(document.location.search);

const bookId = pageParams.get("id");

const currentBook = books.find((book) => book.id === parseInt(bookId));

const bookDetailsTemplate = document.createElement("div");

bookDetailsTemplate.innerHTML = `
    <div>
        <img
          src=${currentBook.image}
          alt="book-cover"
          class="h-[300px] sm:h-[400px] 2xl:h-[450px] w-full object-cover rounded"
        />
    </div>

    <div class="mt-4">
        <h3 class="text-2xl sm:text-3xl font-semibold tracking-wider">
            ${currentBook.title}
        </h3>

        <section>${currentBook.content}</section>

        
        <a
          href=${currentBook.amazonBookLink}
          target='_blank'
          class="capitalize block mt-5 text-blue-500 underline hover:no-underline transition-all"
        >
          buy on amazon
        </a>
    </div>`;

bookDetailsWrapper.appendChild(bookDetailsTemplate);





