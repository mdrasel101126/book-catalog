import {Link, useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeUser } from '../redux/features/user/userSlice';

const Navbar = () => {
  const navigate=useNavigate()
  const {email}=useAppSelector(state=>state.user)
  const dispatch=useAppDispatch()
  const handleLogout=()=>{
    dispatch(removeUser())
    localStorage.removeItem('bookCatalog');
    navigate('/login')
  }
  const links=<>
        <li><Link to='/add-book'><button className='btn btn-primary'>Add Book</button></Link></li>
        <li><Link to='/dashboard'><button className='btn btn-primary'>Dashboard</button></Link></li>
  </>
    return (
    <div className="navbar bg-neutral-content">
            <div className="navbar-start">
            <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Book Catalog</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      email?<button onClick={()=>handleLogout()} className="btn btn-primary">Logout</button>:<Link to='/login'>Login</Link>
    }
  </div>
</div>
);
};

export default Navbar;