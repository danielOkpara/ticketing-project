const Pinconfirm=()=>{
    return(
        <div className=" h-screen w-full bg-[#660056] flex items-center justify-center">
            <div className=" container bg-white h-[900px] w-[651px] mt-5 flex flex-col justify-center text-center">
                <form>
                    <h1 className=" mt-40 text-3xl font-bold ">
                        Set Up Your pin
                    </h1>

                    <div className=" flex justify-center mt-28">
                    <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
                    <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
                    <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
                    <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
                    </div>

                </form>

               <div className="text-center mt-[145px] mb-[215px] mx-3">
               <button type="submit" className=" mt-28 bg-[#660056]  text-white rounded p-4 w-[509px] font-poppins font-medium text-xl hover:bg-primary">Finish Account Creation</button>
               </div>
            </div>

        </div>
    );
}
export default Pinconfirm;