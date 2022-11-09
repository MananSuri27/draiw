import React from "react";


const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
       DRAIW
      </h1>
      <form className='search'>
        <input type='search' name='search' placeholder='Search' />
      </form>
      <h1 className="ss">
      <i class="fa-sharp fa-solid fa-magnifying-glass" ></i>
      </h1>
    </nav>
  );
};

export default Navbar;