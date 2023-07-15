import { useForm,SubmitHandler } from "react-hook-form";
import {Link} from 'react-router-dom';
import { ILoginInputs } from "../types/loginTypes";


const Login = () => {
 /*  const navigate = useNavigate();
  const location = useLocation(); */
  /* const from = location.state?.from?.pathname || "/"; */

/*   if (token) {
    navigate(from, { replace: true });
  } */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();
  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    console.log(data)
  }
 
  return (
    <div className="my-20">
      
      <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto mt-16 bg-base-200 p-6 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-violet-800 mb-6">
          Please Login
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
        
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
           {errors.email && <span  className="text-sm text-red-500">{errors.email.message}</span>}
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
       
          <input
            className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary "
            type="submit"
            value="Login"
          />
        </form>
        <label className="label">
          <p>
            <small>
              Already Have an Account?{" "}
              <Link to="/signup" className="label-text text-primary">
                Please signup
              </Link>
            </small>
          </p>
        </label>
      </div>
    </div>
  );
};

export default Login;