import bookImage from '../assets/book.png';
import { IBook } from '../types/bookTypes';
const BookCard = ({book}:IBook) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src={bookImage} alt="Book" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{book.title}</h2>
           <p>Author:{book.author}</p>
           <p>Genre:{book.genre}</p>
           <p>Publication Date:{book.publicationDate}</p>
           <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
);
};

export default BookCard;