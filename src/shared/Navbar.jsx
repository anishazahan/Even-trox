import  { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CommonBtn from '../pages/components/Common-btn/CommonBtn'





const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    
<div className="  bg-primary">
	<nav className="relative px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
		<Link to='/' className="text-3xl font-bold leading-none" >
			<img src="../assets/logo (1).png" alt="" />
            <h2 className='text-white'>logo</h2>
		</Link>
		
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">

		<li><NavLink to='/'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >Home</NavLink></li>
			
			<li><NavLink to='/about'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >About Us</NavLink></li>
			
			<li><NavLink to='/services'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >Services</NavLink></li>
			
			<li><NavLink to='/books'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >Books</NavLink></li>
		
			<li><NavLink to='/contact'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary ' : 'font-bold text-[17px] text-white hover:text-secondary') } >Contact</NavLink></li>
		</ul>


		<div className="hidden lg:inline-block">
	<CommonBtn></CommonBtn>
		</div>


		<div className="lg:hidden ">
		
			<div className="flex ml-auto justify-end">
			<button  onClick={() => setIsMenuOpen(true)} htmlFor="my-drawer" className="drawer-button flex items-end text-black-600 p-3">
				
				hellow
			</button>
			</div>
		</div>

	</nav>


	{/* // for mobile */}

  
  {
	isMenuOpen && <div className=" navbar-menu relative z-50 lg:hidden">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
					<h1 className='text-white'>logo</h1>
				</a>
				<button  onClick={() => setIsMenuOpen(false)} className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul className='space-y-3 text-center'>
                <li><NavLink to='/about'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >About Us</NavLink></li>
			
			<li><NavLink to='/services'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >Services</NavLink></li>
			
			<li><NavLink to='/books'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary ' : 'font-semibold text-[17px] text-white hover:text-secondary') } >Books</NavLink></li>
		
			<li><NavLink to='/contact'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary ' : 'font-bold text-[17px] text-white hover:text-secondary') } >Contact</NavLink></li>
				</ul>
			</div>
			<div className="mt-auto">
				
			</div>
		</nav>
	</div>
  }



</div>




    </>
  )
}

export default Navbar