import React from 'react';

function Navbar() {
  return (
    <nav className="w-full p-2 sm:p-4 mt-4 sm:mt-10 flex justify-center">
      <div className="border bg-[#fcd5b5] backdrop-blur-3xl border-[#e7a78a] rounded-full px-4 py-1 sm:px-6 sm:py-2">
        <ul className="flex space-x-4 text-sm sm:space-x-6 sm:text-xl">
          <li>
            <a href="#" className="text-[#9c5f4d] hover:text-[#ce7d5d]">Home</a>
          </li>
          <li>
            <a href="#" className="text-[#9c5f4d] hover:text-[#ce7d5d]">About</a>
          </li>
          <li>
            <a href="#" className="text-[#9c5f4d] hover:text-[#ce7d5d]">Services</a>
          </li>
          <li>
            <a href="#" className="text-[#9c5f4d] hover:text-[#ce7d5d]">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
