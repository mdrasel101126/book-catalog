import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetBooksQuery} from "../redux/features/book/bookApi";
import { IBookTypes } from "../types/bookTypes";

const Home = () => {
    const [searchData,setSearchData]=useState<string>("")
    const {data,isLoading,error}=useGetBooksQuery(undefined)
    const handleSearch=(data:string)=>{
      console.log(data)
    }
   
    return (
      <div className="sm:block md:flex flex-row">
        <div>
        <input onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-primary" onClick={()=>handleSearch(searchData)}>Search</button>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled defaultValue={"hello"}>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            data?.data?.data?.map((book:IBookTypes)=><BookCard key ={book._id} book={book}/>)
          }
        </div>
      </div>
    );
};

export default Home;