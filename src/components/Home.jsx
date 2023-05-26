// import {Link} from "react-scroll";
import {Link} from 'react-router-dom'
// import backgroundImg from '../assets/home.jpg';
import grain from '../assets/grain.svg';


//todo: add glassmorphosim effect on the call to action <div> and add a grain effect on the background(maybe create a global css file and style it using traditional css)
function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${grain})`,backgroundColor:'gold' ,height:'100vh', width:'100%'}}
    >
      {/* <div className="absolute inset-0 bg-cover bg-center blur-lg"></div> */}

      <div className="flex flex-col justify-center items-start relative h-full">

        <div className="bg-white px-6 py-7 shadow-black shadow-lg md:rounded-r-lg w-[100%] mt-[7rem] md:w-[40%] border-black ">
          <h1 className="text-black text-4xl font-bold mb-4">
            Welcome to My Website
          </h1>
          <p  className='w-fit mb-5 text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Distinctio consequuntur soluta debitis molestias reiciendis corrupti,
             quo molestiae. Nihil id repudiandae aut! Blanditiis officia nesciunt aliquid vero unde accusantium vitae exercitationem?
          </p>
          <Link className='bg-yellow-500 mt-4 p-3 rounded-lg ' to='/services' >call to action</Link>
        </div>


        <Link to='/about' className="absolute cursor-pointer bg-black rounded-full left-1/2 transform -translate-x-1/2 bottom-32 animate-bounce ">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 m-2 cursor-pointer text-white animate-wiggle"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link> 
      </div>
    </div>
  );
}

export default Home;
