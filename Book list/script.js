class Book  {
   constructor(title,author,price){
  this.title=title;
  this.author=author;
  this.price=price;
  }
}

class UI{
    static displayBooks(){
        const storedBooks=[
            {
              title:'Book',
              author:'John',
              price:'34'
            },
            {
                title:'Book 2',
                author:'Paul',
                price:'25'
              }
        ]
        const books=storedBooks;
        books.forEach((book)=>UI.addBook(book));
      
    }
     static addBook(book){
        const list=document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}$</td>
        <td><a href="#" class="btn btn-danger btn-sm delete-button">X<a/></td>`

        list.appendChild(row)
    }
    static deleteBook(el){
      if(el.classList.contains('delete-button')){
      el.parentElement.parentElement.remove();
      };
    }
    static clearFields(){
      document.querySelector('#title').value="";
      document.querySelector('#author').value="";
      document.querySelector('#price').value="";
    }
}
document.addEventListener('DOMContentLoaded',UI.displayBooks)

document.querySelector('#book-form').addEventListener('submit' ,(e) =>{
  e.preventDefault()

  let title=document.querySelector('#title').value;
  let author=document.querySelector('#author').value;
  let price=document.querySelector('#price').value;

  const book=new Book(title,author,price);

  console.log(book);

  if(title===""||author===""||price===""){
    alert('Please enter all the values ');
    return;
  }

  UI.addBook(book);
  UI.clearFields();
})
document.querySelector('#book-list').addEventListener('click',(e)=>{
  UI.deleteBook(e.target)
})