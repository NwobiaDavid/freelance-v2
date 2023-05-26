import grain from '../assets/grain.svg';

const About = () => {
  return (
    <div name="about" style={{ backgroundImage: `url(${grain})`, backgroundRepeat: 'no-repeat' ,height:'100vh', width:'100%'}} className=" overflow-y-auto bg-gray-900 text-white" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full text-center md:text-left" >
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Us</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[20%] hidden md:flex items-center justify-start relative">
            <p className="rotate-[-90deg] uppercase font-bold text-5xl text-center absolute">about</p>
          </div>

          <div className="md:w-[80%] w-[100%]">
            <p className="text-xl md:mt-20 mt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi. Reiciendis perspiciatis nobis nam dolore deserunt, molestias perferendis distinctio iusto mollitia. Sint exercitationem natus excepturi unde. Consequuntur optio quia facere beatae, dicta ab et harum odit eos, aspernatur reprehenderit quasi.
            </p>

            <br />

            <p className="text-xl">
              I am a talented, ambitious and hardworking individual, with broad skills and experience in digital marketing, social media and leading projects. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. A key strength is communication; building strong relationships with people in order to deliver the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
