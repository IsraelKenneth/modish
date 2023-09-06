import { useState } from "react";
import { closeIcon, Hamburgermenu } from "../assets";

const Nav = () => {
        const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="padding-x">
        <nav class="bg-transparent p-4 flex justify-between items-center w-full">
    {/* <!-- Logo --> */}
    <div class="text-black text-2xl font-bold">
        <a href="#"><em className="font-inter">Modish.</em></a>
    </div>

    {/* <!-- Mobile Menu (hidden by default) --> */}
    <div class="lg:hidden">
        <button id="mobile-menu-button" class="text-black  text-xl focus:outline-none" onClick={() => setToggleMenu(!toggleMenu)}>
    {toggleMenu ? 
    <img src={closeIcon} /> 
    : <img src={Hamburgermenu} /> }
        </button>
    </div>

    {/* <!-- Desktop Menu --> */}
    <div class="hidden lg:flex space-x-6">
        <a href="#" class="text-black  hover:text-gray-300">ABOUT</a>
        <a href="#" class="text-black  hover:text-gray-300">SHOP</a>
        <a href="#" class="text-black  hover:text-gray-300">SALE</a>
        <a href="#" class="text-black  hover:text-gray-300">ARTICLES</a>
    </div>

    {/* <!-- Search and Login Buttons (hidden by default) --> */}
    <div class="hidden lg:flex space-x-4">
        <button class="text-black  hover:text-gray-300">Login</button>
        <button class="text-black  hover:text-gray-300">Search</button>
    </div>
</nav>

{/* <!-- Mobile Menu (hidden by default) --> */}

{toggleMenu && (
    <div id="mobile-menu" class="flex md:hidden bg-white font-montserrat text-xl font-semibold w-full h-screen absolute top-16 left-0 p-4 space-y-8 flex-col z-10">
    <a href="#" class="text-black">ABOUT</a>
    <a href="#" class="text-black">SHOP</a>
    <a href="#" class="text-black">SALE</a>
    <a href="#" class="text-black">ARTICLES</a>
    <br />
    <a href="#" class="text-black">Login</a>
    <a href="#" class="text-black">Search</a>
</div>
)}

    </header>
  )
}

export default Nav