import { Link } from 'react-router-dom';
import bookImage from '../assets/book.png';
import { IBook } from '../types/bookTypes';
import { useDeleteBookMutation } from '../redux/features/book/bookApi';
const BookCardDetails = ({book}:IBook) => {
  const [deleteBook,{isError,isSuccess,error,data}]=useDeleteBookMutation();
  console.log(data)
  const handleDeleteBook=(id:string)=>{
   deleteBook(id)
  }
    return (
        <div className="card card-compact  w-4/5 mx-auto bg-base-100 shadow-xl">
         <figure><img src={bookImage} alt="Book" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{book.title}</h2>
           <p>Author:{book.author}</p>
           <p>Genre:{book.genre}</p>
        <p>Publication Date:{book.publicationDate}</p>
        <div className='flex flex-row-reverse'>
          <Link to={`/book/edit/${book._id}`}>
          <button className='btn btn-warning text-white'>Edit Book</button></Link>
          <button onClick={()=>handleDeleteBook(book._id)} className='btn btn-error text-white mx-4'>Delete Book</button>
        </div>
  </div>
</div>
);
};

export default BookCardDetails;