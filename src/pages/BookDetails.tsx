import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import BookCardDetails from "../components/BookCardDetails";
import Review from "../components/Review";

const BookDetails = () => {
    const {id}=useParams();
    const {data,isLoading,error}=useGetSingleBookQuery(id);
    console.log(data?.data?.book)
    return (
        <div>
            {data && <BookCardDetails book={data?.data?.book}/>}
            <div>
                <p className="md:mx-40">Comments</p>
                {
                    data?.data?.reviews.map((review:any)=><Review key={review._id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default BookDetails;