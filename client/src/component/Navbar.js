
import {React,useState} from 'react'
import logoImg from '../assets/ksrcelogo.jpg';
import img from '../assets/botimg.jpg';
import Bot from "./bot";



function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [navbar, setNavbar] = useState(true);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
      };
    const toggleNavber = () => {
        setNavbar(!navbar);
      };
  return (
    <div>
<nav class="bg-white border-gray-200 dark:bg-transparent fixed w-full top-0 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="home" class="flex items-center space-x-3 rtl:space-x-reverse">      
      <img src={logoImg} class="h-14 w-14 rounded-lg" alt=" Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap font-mono text-white">KSRCE</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button 
              type="button" 
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
              id="user-menu-button" 
              aria-expanded={dropdownOpen} 
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-14 h-14 rounded-full" src={img} alt="user pho" />
            </button>
      {dropdownOpen && (
      <Bot/>    
        )}
  </div>
  <div class="hidden md:flex items-center justify-between w-full md:w-auto md:order-1 text-xl" id="navbar-user" >
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
      <li>
      <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
      </li>
      <li>
        <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Placement</a>
      </li>
      <li>
        <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Circulam</a>
      </li>
      <li>
        <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Roll of Honor</a>
      </li>
      <li>
        <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Research</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar