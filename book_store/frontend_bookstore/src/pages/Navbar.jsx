import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="flex justify-between px-[3rem] py-3 bg-sky-600 items-center">
        <h1  className=" text-white font-bold text-[2rem]"><Link to ='/'> Book Store</Link> </h1>
        <ul className="text-white flex justify-between space-x-[3rem]">
          <li>
            <Link to ="/" className="font-semibold hover:border-b-2">Home</Link>
          </li>
          <li>
            <Link to ='/addbook' className="font-semibold hover:border-b-2">Add Book</Link>
          </li>
          <li>
            <Link to ='/about' className="font-semibold hover:border-b-2">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
