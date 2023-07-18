import userPic from '../assets/user-pic.jpg';
const Review = ({review}:any) => {
    return (
        <div className='border-2 rounded-md mt-4 p-3 shadow-lg'>
            <div className='flex flex-row items-center'>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={userPic} />
                 </div>
            </div>
            <div>
                <p className='ml-3'>{review?.user?.name}</p>
            </div>
            </div>
            <p>{review?.review}</p>
        </div>
    );
};

export default Review;