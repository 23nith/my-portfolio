class Book {
  constructor (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  createEntry(book){
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a class='delete'>X</a></td>
    `
    document.querySelector('tbody').appendChild(row);
  }

  clearFields(){
    document.querySelector('#book-title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  showAlert(message, className){
    let div = document.createElement('div');
    let h1 = document.querySelector('h1');
    // let container = document.querySelector('.container');
    let container = document.querySelector('.book');
    div.innerHTML = message;
    div.className = className;
    container.insertBefore(div, h1);
    console.log(div);
    setTimeout(function(){
      div.remove();
    }, 3000);
  }

  updateLocal(newBook){
    let localValues;
    if(localStorage.getItem('Books') === null){
      localValues = [];
    } else {
      localValues = JSON.parse(localStorage.getItem('Books'));
    }
      localValues.push(newBook);
      localStorage.setItem('Books', JSON.stringify(localValues));
    }

  createTable(localValues){
    // console.log(localValues);
    localValues.forEach(function(item){
    ui.createEntry(item);
    })
  }

  deleteRow(e){
    console.log(e.target);
    if(e.target.classList.contains('delete')){

      if(confirm('Are you sure?')){

        const theIsbn = e.target.parentElement.parentElement.children[2].textContent;
        let row = e.target.parentElement.parentElement;
        let localValues = JSON.parse(localStorage.getItem('Books'));
        localValues.forEach(function(item, index){
          
          if(item.isbn === theIsbn){
            localValues.splice(index, 1);
            localStorage.setItem('Books', JSON.stringify(localValues));
          }
        })
        row.remove();
        ui.showAlert('Book deleted', 'error');
      }
      
    }
  }


}

const submitBtn = document.querySelector('#submit');

runEventListeners();
// SUBMIT BUTTON LISTENER
function runEventListeners(){
  // LISTENER FOR SUBMIT BUTTON
  submitBtn.addEventListener('click', function(){
    const bookTitle = document.querySelector('#book-title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // INSTANTIATE BOOK
    let book = new Book(bookTitle, author, isbn);
    // INSTANTIATE UI
    let ui = new UI();
    if(bookTitle === '' || author === '' || isbn === ''){
      // SHOW ERROR ALERT
      ui.showAlert('Please fill up all fields', 'error');
      
    } else {
      // CREATE BOOK
      ui.createEntry(book);
      // CLEAR FIELDS
      ui.clearFields();
      // SHOW SUCCESS ALERT
      ui.showAlert('Book added successfully', 'success');
      // UPDATE LOCAL STORAGE
      ui.updateLocal(book);
    }

  })

  // LISTENER FOR LOAD OF SITE
  document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.getItem('Books') !== null){
      let localValues = JSON.parse(localStorage.getItem('Books'));
      console.log(localValues);
      let ui = new UI();
      ui.createTable(localValues);
    }

  });

  // DELETE BUTTON LISTENER
  document.querySelector('tbody').addEventListener('click', function(e){
    ui = new UI();
    ui.deleteRow(e);
  });
}



let ui = new UI();
console.log(ui);