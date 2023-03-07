import React from 'react'
import {Link} from "react-router-dom"
import Input from "../components/Input"

function Login() {
  return (
    <section className='h-screen w-full bg-primary flex items-center justify-center'>
       <div className='bg-white h-[741px] w-[651px] px-9'>
        <h2 className='mt-32 text-center text-2xl capitalize font-semibold font-inter'>login to your account</h2>
        <form className='mt-10' >
          <Input id="email" name="email" label="Email Address" type="email" placeholder="Email Address" />

          <Input id="password" name="password" label="Password" type="password" placeholder="Password" />
          
          <div className='text-center mt-20 mx-3'>
          <button type='submit' className='bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary'>Sign up</button>
          </div>
        </form>

        <div className='mt-24 text-center font-normal text-2xl font-inter'>
          <span>New User?</span>
          <Link to="/create-account" className='ml-2 text-[#660056]'>Sign up</Link>
        </div>

        <p className='text-center text-base font-semibold mt-8 font-inter'>By signing in, you consent to our terms and condition</p>
       </div>
    </section>
  )
}

export default Login