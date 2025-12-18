import { useNavigate } from "react-router-dom";

const Navbar = () =>  {

  const navigate = useNavigate();
  
  const handleClick = (value:string) => {
    navigate(value);
  }

  return (
    <div className="flex justify-between bg-gray-300">
      <div className="p-3 m-3 text-xl cursor-pointer" onClick={()=> handleClick('/')}>
        Home
      </div>
      <div className='flex gap-4 p-3 m-3 text-xl cursor-pointer'>
        <div onClick={()=>handleClick('/login')}>Login</div>
        <div onClick={()=>handleClick('/register')}>Register</div>
      </div>
    </div>
  )
}

export default Navbar
