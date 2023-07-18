import { useForm,SubmitHandler } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import { ISignupTypes } from "../types/signupTypes";
import { useCreateUserMutation } from "../redux/features/user/userApi";
import { useAppDispatch } from "../redux/hooks";
import { saveUser } from "../redux/features/user/userSlice";


const Signup = () => {
const navigate = useNavigate()
const [postUser,{isError,data:user}]=useCreateUserMutation();
const dispatch=useAppDispatch()
if(user){
  dispatch(saveUser({email:user.data?.user?.email,_id:user.data?.user?._id,accessToken:user.data?.accessToken}))
  localStorage.setItem('bookCatalog',user.data?.accessToken);
  navigate('/')
}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupTypes>();
  const onSubmit: SubmitHandler<ISignupTypes> = (data) => {
    const options={
      name:data.name,
      email:data.email,
      password:data.password,
    }
    console.log(options)
    postUser(options)
  }
 
  return (
    <div className="my-20">
      
      <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto mt-16 bg-base-200 p-6 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-violet-800 mb-6">
          Please Sign Up
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is Required" })}
            />
           {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is Required" })}
            />
           {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>
          <div className="form-control w-full">
          <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is Required",
              })}
            />
           {errors.password && <span  className="text-sm text-red-500">{errors.password.message}</span>}
          </div>
          {
            isError && <p className="text-sm text-red-600">Something Went Wrong!</p>
          }
          <input
            className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary "
            type="submit"
            value="Signup"
          />
        </form>
        <label className="label">
          <p>
            <small>
              Already Have an Account?{" "}
              <Link to="/login" className="label-text text-primary">
                Please Login
              </Link>
            </small>
          </p>
        </label>
      </div>
    </div>
  );
};

export default Signup;