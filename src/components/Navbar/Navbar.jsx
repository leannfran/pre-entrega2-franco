import React from 'react';
import Cart from '../CartShop/Cart'
import Menu from './Menu';
const Navbar = () => {
    return (
    <div className='w-[100%] bg-black shadow-md ' >
      <header className='flex justify-between items-center h-20 px-10 z-50'>
        <Menu/>

       <h1 className='text-2xl text-white font-bold'>FronFitnes</h1>

        <Cart cantCarrito={10}/> 
      </header>
    </div>
    );
}

export default Navbar;


