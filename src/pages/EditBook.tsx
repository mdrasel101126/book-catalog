import { useForm,SubmitHandler } from "react-hook-form";
import { IBookTypes } from "../types/bookTypes";
import { useGetSingleBookQuery, usePostBookMutation } from "../redux/features/book/bookApi";
import { useParams } from "react-router-dom";


const EditBook = () => {
    const {id}=useParams()
    const {data:book,isLoading}=useGetSingleBookQuery(id)
    console.log(book)
    const [postBook,{isError,isSuccess,data}]=usePostBookMutation();
    console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookTypes>();
  const onSubmit: SubmitHandler<IBookTypes> = (data) => {
    console.log(data)
    const options={
        title:data.title,
        author:data.author,
        genre:data.genre,
        publicationDate:data.publicationDate,
        posterId:"64b12f823b5d320e57a3cf8c"
    }
    postBook(options)
  }
 
  return (
    <div className="my-20">
      
      <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto mt-16 bg-base-200 p-6 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-violet-800 mb-6">
          Please Add Book
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              defaultValue={book?.data?.book?.title}
              className="input input-bordered w-full"
              {...register("title", { required: "Title is Required" })}
            />
           {errors.title && <span className="text-sm text-red-500">{errors.title.message}</span>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              placeholder="Author Name"
              defaultValue={book?.data?.book?.author}
              className="input input-bordered w-full"
              {...register("author", { required: "Author is Required" })}
            />
           {errors.author && <span className="text-sm text-red-500">{errors.author.message}</span>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              placeholder="Genre"
              defaultValue={book?.data?.book?.genre}
              className="input input-bordered w-full"
              {...register("genre", { required: "Genre is Required" })}
            />
           {errors.genre && <span className="text-sm text-red-500">{errors.genre.message}</span>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">publication Date</span>
            </label>
            <input
              type="text"
              placeholder="publication Date"
              defaultValue={book?.data?.book?.publicationDate}
              className="input input-bordered w-full"
              {...register("publicationDate", { required: "Publication Date is Required" })}
            />
           {errors.publicationDate && <span className="text-sm text-red-500">{errors.publicationDate.message}</span>}
          </div>
          <input
            className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary "
            type="submit"
            value="Add Book"
          />
        </form>
      </div>
    </div>
  );
};

export default EditBook;