const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data 
    searchField.value = '';
    // load data 
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const books = data.docs;

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title fs-3">${book.title}</h5>
                <p class="card-text"><span class="fw-bold">Author: </span>${book.author_name} </br>
                <span class="fw-bold">Publisher: </span>${book.publisher} </br>
                <span class="fw-bold">First Published: </span>${book.first_publish_year}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}