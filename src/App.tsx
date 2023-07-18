import { Toaster } from "react-hot-toast"
import MainLayout from "./layouts/MainLayout"
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "./redux/features/user/userApi";
import { removeUser, saveUser } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useDispatch()
  const {data:user,isError,isLoading}=useGetUserQuery(undefined)

  const token=localStorage.getItem('bookCatalog');
  if(token){
    dispatch(saveUser({email:user?.data?.user?.email,_id:user?.data?.user?._id,accessToken:token}))
  }
  if(!token){
    dispatch(removeUser())
  }

  return (
    <div>
      <MainLayout/>
      <Toaster />
    </div>
  )
}

export default App
