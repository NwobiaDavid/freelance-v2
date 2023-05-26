const About = () => {
    return (
        <div name='about' className="w-full md:h-screen  bg-gray-900 text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center md:text-left">

            <div className="pb-8 mt-20 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Us</p>
            </div>

            <div className="flex">

                <div className="w-[20%] relative">
                    <p className="rotate-90 absolute">about</p>
                </div>

                <div className="w-[80%] ">
                    <p className="text-xl mt-20"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi. Reiciendis perspiciatis nobis nam
                     dolore deserunt, molestias perferendis distinctio iusto mollitia.
                    Sint exercitationem natus excepturi unde. Consequuntur optio quia facere beatae, dicta ab et harum odit eos, aspernatur reprehenderit quasi.
                    </p>

                    <br />
                    
                    <p className="text-xl">
                     I am a talented, ambitious and hardworking individual, with broad skills and experience in digital marketing, social media and leading projects.
                    Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
                
                    A key strength is communication; building strong relationships with people in order to deliver the best results.
                    </p>
                </div>

            </div>

        </div>
    </div>
     );
}
 
export default About;