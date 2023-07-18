import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import BookCardDetails from "../components/BookCardDetails";
import Review from "../components/Review";
import { useState } from "react";
import { usePostReviewMutation } from "../redux/features/review/reviewApi";
import Spinner from "../components/ui/Spinner";
import { useAppSelector } from "../redux/hooks";
import { toast } from "react-hot-toast";

const BookDetails = () => {
    const {id}=useParams();
    const {email,_id}=useAppSelector(state=>state.user)
    const {data,isLoading,error}=useGetSingleBookQuery(id,{pollingInterval:30000,refetchOnMountOrArgChange:true});
    const [reviewInput,setReviewInput]=useState<string>("")
    const [postReview]=usePostReviewMutation()
    const handleReview=(reviewData:string)=>{
        if(!_id){
            return toast.error("Please Login to Add a Comment")
        }
        console.log(reviewData)
        const options={
            review:reviewData,
            user:_id,
            book:data?.data?.book?._id,
        }
        postReview(options);
    }
    return (
        <div>
            {isLoading && <Spinner/>}
            {data && <BookCardDetails book={data?.data?.book}/>}
            <div className="w-4/5 mx-auto mt-6">
                <div>
                   <input onChange={(e)=>setReviewInput(e.target.value)} type="text" placeholder="Enter Review" className="input input-bordered w-full max-w-xs" />
                   <button className="btn btn-primary" onClick={()=>handleReview(reviewInput)}>Add Review</button>
                </div>
                <p className="mt-4 text-lg font-bold">Comments</p>
                {
                    data?.data?.reviews.map((review:any)=><Review key={review._id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default BookDetails;