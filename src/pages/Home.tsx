import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetBooksQuery} from "../redux/features/book/bookApi";
import { IBookTypes } from "../types/bookTypes";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setGenre, setPublicationDate, setSearchTerm } from "../redux/features/book/bookSlice";

const Home = () => {
    const [searchData,setSearchData]=useState<string>("")
    const {genre,publicationDate,searchTerm}=useAppSelector(state=>state.book);
    const dispatch=useAppDispatch()
    const {data,isLoading,error}=useGetBooksQuery({searchTerm:searchTerm,genre:genre,publicationDate:publicationDate})
    const handleSearch=(data:string)=>{
      dispatch(setSearchTerm(data))
    }
   
    return (
      <div className="sm:block md:flex flex-row">
        <div>
        <input onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-primary" onClick={()=>handleSearch(searchData)}>Search</button>

        <select onChange={(e)=>dispatch(setGenre(e.target.value))} className="select select-bordered w-full max-w-xs">
          <option disabled defaultValue={""}>Select Genre</option>
          <option value=''>All</option>
          <option value='Fiction'>Fiction</option>
          <option value='Novel'>Novel</option>
          <option value='History'>History</option>
          <option value='Poem'>Poem</option>
          <option value='Narrative'>Narrative</option>
          <option value='Mystery'>Mystery</option>
        </select>
        <br />
        <select onChange={(e)=>dispatch(setPublicationDate(e.target.value))} className="select select-bordered w-full max-w-xs">
          <option disabled defaultValue={""}>Select Publication Date</option>
          <option value=''>All</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
        </select>
        </div>
        {
          data?.data?.data?.length === 0 && <p className="text-red-600 mx-auto text-lg">No Book Found!</p>
        }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            data?.data?.data?.map((book:IBookTypes)=><BookCard key ={book._id} book={book}/>)
          }
        </div>
      </div>
    );
};

export default Home;