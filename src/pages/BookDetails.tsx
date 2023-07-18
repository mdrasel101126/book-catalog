import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import BookCardDetails from "../components/BookCardDetails";
import Review from "../components/Review";
import { useState } from "react";
import { usePostReviewMutation } from "../redux/features/review/reviewApi";
import Spinner from "../components/ui/Spinner";

const BookDetails = () => {
    const {id}=useParams();
    const {data,isLoading,error}=useGetSingleBookQuery(id,{pollingInterval:30000,refetchOnMountOrArgChange:true});
    const [reviewInput,setReviewInput]=useState<string>("")
    const [postReview]=usePostReviewMutation()
    const handleReview=(reviewData:string)=>{
        console.log(reviewData)
        const options={
            review:reviewData,
            user:"64b12f823b5d320e57a3cf8c",
            book:data?.data?.book?._id,
        }
        postReview(options);
    }
    return (
        <div>
            {isLoading && <Spinner/>}
            {data && <BookCardDetails book={data?.data?.book}/>}
            <div className="">
                <div>
                   <input onChange={(e)=>setReviewInput(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                   <button className="btn btn-primary" onClick={()=>handleReview(reviewInput)}>Search</button>
                </div>
                <p>Comments</p>
                {
                    data?.data?.reviews.map((review:any)=><Review key={review._id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default BookDetails;