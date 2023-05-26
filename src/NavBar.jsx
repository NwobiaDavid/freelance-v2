import { useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
// import {Link} from "react-scroll";
import {Link} from 'react-router-dom';

const NavBar = () => {


    const [nav, setNav]= useState(false);

    const Links =[
    {
        id:1,
        link:'about'
    },
    {
        id:2,
        link:'services'
    },
    {
        id:3,
        link:'testimonials'
    },
    {
        id:4,
        link:'contact'
    },
]


    return ( 
        
        <div className='flex fixed w-full z-30 justify-between items-center h-16 w-fill
         text-white px-4   bg-slate-800'>
           <div>
            <Link to="/" className='text-5xl font-semibold ml-2'>LO<span className='text-yellow-500'>GO</span></Link>
           </div>

            <ul className='hidden md:flex'>

                {Links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer uppercase font-medium text-gray-500 
                    hover:scale-105 duration-200 hover:text-white ease-in '>
                        <Link to={link} smooth duration={500}>
                            {link}</Link></li> 
                ))}
            </ul>

            <div 
            onClick={()=> setNav(!nav)} className='cursor-pointer z-50 
            pr-4 text-gray-500 md:hidden hover:text-red-500 duration-200'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                
            </div>

            {nav && (
            <ul className='flex flex-col z-40 justify-center items-center absolute top-0 
            w-screen left-0 h-screen bg-black'>
                <li className='px-4 cursor-pointer 
                    uppercase py-6 text-4xl text-gray-500 focus:text-white hover:text-white duration-200'>
                    <Link to="/" onClick={()=> setNav(!nav)} smooth duration={500}>Home</Link>
                </li>

                {Links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer 
                    uppercase py-6 text-4xl text-gray-500 focus:text-white hover:text-white duration-200'><Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                    {link}</Link></li>
                ))}
            </ul>
            )}

        </div>
     );
}
 
export default NavBar;