import { Link } from 'react-router-dom';
import bookImage from '../assets/book.png';
import { IBook } from '../types/bookTypes';
const BookCard = ({book}:IBook) => {
    return (
        <div className="card card-compact  w-full bg-base-100 shadow-xl mx-auto">
         <figure><img src={bookImage} alt="Book" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{book?.title}</h2>
           <p>Author:{book?.author}</p>
           <p>Genre:{book?.genre}</p>
           <p>Publication Date:{book?.publicationDate}</p>
           <div className="card-actions justify-center">
            <Link to={`/books/${book?._id}`}><button className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
);
};

export default BookCard;