import Input from "../components/Input";
// import { Link } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";
// import { useRef, useState, useEffect } from "react";
const Fileupload=()=>{
    return(
     <div className=" h-screen w-full flex items-center justify-center">
        <div className=" container bg-white h-[918px] w-[651px] mt-25 flex flex-col justify-center text-center">
         
        <h1 className=" font-bold text-2xl  mt-[90px]">Upload Your Passport</h1>
         <p className=" mt-5">Use your camera to upload a picture of your passport bio data page</p>

     <form className=" mt-20 flex justify-center items-center flex-col">
            
               <div className=" border-2 border-black w-[310px] h-[320px] relative flex justify-center items-center ">
             
             {/* <img
               src={preview}
               alt=""
               className="object-cover rounded-full w-[100px] h-[100px] bg-center m-[3px]"
             />
            */}
              {/* <input
               type="file"
               className="hidden"
               ref={fileinputRef} // select the file input
               accept="image/*" //Limits the file to images only
               onChange={(e) => {
                 const file = e.target.files[0];
                 file && file.type.substring(0, 5) === "image"
                   ? setImage(file)
                   : setImage(null);
            //    }} 
            //  /> 
           

           {/* <AiOutlineCamera
             size={25}
             className="absolute top-16 left-[5.5rem]"
             onClick={(e) => {
               fileinputRef.current.click(); // when you click on this, click the file input
             }}
           /> */}
           <button className=" bg-purple-900 ">Upload file here</button>
         </div>
              

         <div className=" text-center mb-[75px] mx-3 ">
           <button type="submit" className=" mt-28 bg-[#660056] text-white rounded p-4 w-[509px] font-poppins font-medium text-xl hover:bg-primary">Upload File</button>
         </div>
            
    </form>
    <h1 className=" text-lg font-semibold">Already a user?</h1>
    <p className="mt-8">By signing in, you consent to our terms and condition</p>

        </div>

    </div>


    );
}
export default Fileupload;