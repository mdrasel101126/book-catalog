import { Link, useNavigate } from 'react-router-dom';
import bookImage from '../assets/book.png';
import { IBook } from '../types/bookTypes';
import { useDeleteBookMutation } from '../redux/features/book/bookApi';
import { useAppSelector } from '../redux/hooks';
import { toast } from 'react-hot-toast';
const BookCardDetails = ({book}:IBook) => {
  const navigate=useNavigate()
  const [deleteBook,{isError,isSuccess,error,data}]=useDeleteBookMutation();
  /* console.log(data) */
  const {email,_id}=useAppSelector(state=>state.user)
  const handleDeleteBook=(id:string)=>{
    if(!email){
     return toast.error("Please login to delete the book!")
    }
    if(_id && _id!=book.posterId){
     return toast.error("Only Book Poster Can Delete The Book!")
    }
   deleteBook(id)
  }
  if(isSuccess && data) {
    toast.success("Book Deleted Successfully!")
    navigate('/')
  }

  const handleEditBook=()=>{
    if(!email){
      return toast.error("Please login to edit the book!")
     }
     if(_id && _id!=book.posterId){
      return toast.error("Only Book Poster Can Edit The Book!")
     }
     navigate(`/book/edit/${book._id}`)
  }
    return (
        <div className="card card-compact  w-4/5 mx-auto bg-base-100 shadow-xl mt-8">
         <figure><img src={bookImage} alt="Book" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{book.title}</h2>
           <p>Author:{book.author}</p>
           <p>Genre:{book.genre}</p>
        <p>Publication Date:{book.publicationDate}</p>
        <div className='flex flex-row-reverse'>
          <button onClick={()=>handleEditBook()} className='btn btn-warning text-white'>Edit Book</button>
          <button onClick={()=>handleDeleteBook(book._id)} className='btn btn-error text-white mx-4'>Delete Book</button>
        </div>
  </div>
</div>
);
};

export default BookCardDetails;