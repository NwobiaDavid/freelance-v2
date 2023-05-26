//add a paper plane icon next to the sent button
const Contact = () => {
    return ( 
        <div className=" ">
            <div className="flex justify-center h-screen items-center">
                <div className="md:w-[50%] flex justify-center">
                    <form action="#" className="flex md:w-[49%] flex-col" method="post">
                    <h2 className="text-center text-2xl uppercase p-3">contact me</h2>
                        <input className="rounded-md p-3 border-2 my-2 focus:border-yellow-500 outline-none border-yellow-400" type="text" placeholder="email" />
                        <textarea className="rounded-md p-3 border-2 my-2 focus:border-yellow-500 outline-none border-yellow-400" name="textarea" id="" cols="30" rows="10" placeholder="write your message..."></textarea>
                        <button className="p-3 hover:bg-yellow-500 bg-yellow-400 rounded-lg" type="submit">Send</button>
                    </form>
                </div>

                <section className="hidden md:flex w-[50%] bg-yellow-100 h-screen">

                </section>
            </div>
        </div>
     );
}
 
export default Contact;