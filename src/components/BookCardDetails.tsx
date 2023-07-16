import bookImage from '../assets/book.png';
import { IBook } from '../types/bookTypes';
const BookCardDetails = ({book}:IBook) => {
    return (
        <div className="card card-compact  w-4/5 mx-auto bg-base-100 shadow-xl">
         <figure><img src={bookImage} alt="Book" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{book.title}</h2>
           <p>Author:{book.author}</p>
           <p>Genre:{book.genre}</p>
        <p>Publication Date:{book.publicationDate}</p>
  </div>
</div>
);
};

export default BookCardDetails;