const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const submitBtn = document.querySelector('#submit')

runEventListeners();

function runEventListeners(){
  submitBtn.addEventListener('click', createEntry);

}

// CREATE ENTRY FUNCTION
function createEntry(){
  let bookTitleVal = bookTitle.value;
  let authorVal = author.value;
  let isbnVal = isbn.value;
  

  if(bookTitle.value === '' || author.value === ''|| isbn.value === ''){
  
    showMessage('Please fill up all fields.', 'red');

  } else {
    // create new book entry object
    let newEntry = new AddEntry(bookTitleVal, authorVal, isbnVal); 
    // console.log(newEntry);

    // store entry in local storage
    addToLocal(newEntry);
    updateTable();
    bookTitle.value = '';
    author.value = '';
    isbn.value = '';
    showMessage('Book added successfully.', 'green');
    
  }


}

// SHOW MESSAGE

function showMessage(message, color){
  let messageAlert = document.querySelector('.message-alert');
  messageAlert.firstElementChild.textContent = message;
  messageAlert.style.background = color;
  function displayMessage(){
    messageAlert.style.display = 'block';
  }
  
  
  function hideMessage(){
    messageAlert.style.display = 'none';
  }
  
  displayMessage();
  setTimeout(hideMessage, 4000);
}

// ADD ENTRY OBJECT CONSTRUCTOR 
function AddEntry(theBookTitle, theAuthor, theIsbn){
  this.theBookTitle = theBookTitle;
  this.theAuthor = theAuthor;
  this.theIsbn = theIsbn
}



// ADD TO LOCAL STORAGE FUNCTION
let entryArr;

function addToLocal(theEntry){

  let entry = theEntry;
  
  if(localStorage.getItem('Entries') === null){
    // create array placeholder
    entryArr = [];
  } else {
    // get item from local storage and set as value of the array placeholder
    localVal = JSON.parse(localStorage.getItem('Entries'));
    entryArr = Array.from(localVal);
  }


  // add the new created object to the array placeholder
  entryArr.push(entry);
  // set the updated array placeholder as the new value of the local storage
  localStorage.setItem('Entries', JSON.stringify(entryArr));
  // view updated contents of local storage
  console.log(JSON.parse(localStorage.getItem('Entries')));

}


// view initial contents of local storage 
console.log(JSON.parse(localStorage.getItem('Entries')));


// CREATE ENTRIES FROM LOCAL STORAGE
if(localStorage.getItem('Entries') != null){
  createTable();
}


function createTable(){
  let localValue = JSON.parse(localStorage.getItem('Entries'));

  localValue.forEach(function(item, index){
    let row = document.createElement('tr');
    let tablebod = document.querySelector('tbody');
    row.innerHTML = `<td>${item.theBookTitle}</td><td>${item.theAuthor}</td><td>${item.theIsbn} <a href='#'><i class='fa fa-remove removeme ${index}' style='color:orange'></a></td>`;
    row.className = 'rows';
    tablebod.appendChild(row);

  })
  let clearBtn = document.querySelector('tbody');
  // console.log(clearBtn.classList.contains('removeme'));
  clearBtn.addEventListener('click', clearRow);
}

// UPDATE TABLE FUNCTION
function updateTable(){
  // delete existing table
  tableRemove();
  // recreate table
  createTable();
}

// CLEAR TABLE FUNCTION
function tableRemove(){
  let tableBody = document.querySelectorAll('.rows');
  tableBody.forEach(function(item){
    item.remove();
  })

}

// CLEAR ROW FUNCTION

function clearRow(e){
  if(confirm('Are you sure?')){
    let thisRow = e.target.parentElement.parentElement.parentElement;
    let thisBtn = e.target;

    // to remove row 
    thisRow.remove();

    // to remove same from local storage
    let localData = JSON.parse(localStorage.getItem('Entries'));
    localData.forEach(function(item, index){
      if(thisBtn.classList.contains(index)){
        localData.splice(index, 1);
      }
      // to update local storage
      localStorage.setItem('Entries', JSON.stringify(localData));
    })
    showMessage('Book has been deleted successfully.', 'blue');
  }
  
}

f