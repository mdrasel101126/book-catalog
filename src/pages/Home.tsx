import BookCard from "../components/BookCard";
import { useGetProductsQuery } from "../redux/features/book/bookApi";

const Home = () => {

    const {data}=useGetProductsQuery(undefined)
    console.log(data)
    return (
        <div>
          {
            data?.data?.data?.map(book=><BookCard key ={book._id} book={book}/>)
          }
        </div>
    );
};

export default Home;