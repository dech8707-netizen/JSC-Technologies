import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  return(
    <div>
      <div className="flex justify-between px-14  py-4 ">
        <div className="text-5xl font-bold text-[#13418B]">JSC</div>
        <div className="flex juatify-between items-center ">
          <ul className="flex gap-10 mr-10 font-bold text-lg text-[#4A4D55]">
            <li><Link to="/" className="hover:text-[#061F3F] cursor-pointer hover:border-b border-[#13418B]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#061F3F] hover:border-b border-[#13418B] cursor-pointer">About</Link></li>
            <li><Link to="" className="hover:text-[#061F3F] hover:border-b border-[#13418B]  cursor-pointer">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#061F3F] hover:border-b border-[#13418B]  cursor-pointer">Contact</Link></li>
            <li><Link to="/login" className="hover:text-[#061F3F] hover:border-b border-[#13418B]  cursor-pointer">Login</Link></li>
          </ul>
          <button className="border border-[#13418B] bg-[#13418B] text-white px-6 py-2 rounded-sm">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header;