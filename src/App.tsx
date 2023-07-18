import { Toaster } from "react-hot-toast"
import MainLayout from "./layouts/MainLayout"
import { useGetUserQuery } from "./redux/features/user/userApi"
import { useDispatch } from "react-redux";
import { saveUser, setAccessToken, setLoader } from "./redux/features/user/userSlice";

function App() {
  const token = localStorage.getItem('bookCatalog');
  const dispatch=useDispatch()
  const {data:user,isError}=useGetUserQuery(undefined)
  console.log(user)
  if(isError){
    dispatch(setLoader())
  }
  
  if(token){
    dispatch(setAccessToken(token))
  }
  if(user && token){
    dispatch(saveUser({email:user.data?.email,_id:user.data?._id,accessToken:token}))
  }
  if(!token){
    dispatch(setLoader())
  }
  return (
    <div>
      <MainLayout/>
      <Toaster />
    </div>
  )
}

export default App
