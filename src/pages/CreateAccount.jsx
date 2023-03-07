import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'


function CreateAccount() {
  return (
    <section className='h-screen w-full bg-primary flex items-center justify-center'>
      <div className='bg-white h-[741px] w-[651px] px-9'>
        <h2 className='mt-12 text-center text-2xl capitalize font-semibold font-inter'>Create Your Account</h2>
        <div className='flex justify-between items-center mb-8 font-inter'>
          <span c>Account Details</span>
          <p><span>1</span>Of 2</p>
        </div>

        <form>
          <Input label="Username" name="username" type="text" id="username" placeholder="Username"/>
          <Input label="Email Address" name="email" id="email" type="email" placeholder="Email Address" />
          <Input label="Password" name="password" id="password" type="password" placeholder="Password" />
          <div>
            <span></span>
            <small>Minimum character</small>
          </div>
          <div>
            <span></span>
            <small>Must contain uppercase,lowercase and special character </small>
          </div>
          <div>
            <span></span>
            <small>Must contain Alphanumeric value </small>
          </div>

          <div className='text-center mt-20 mx-3'>
          <button type='submit' className='bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary'>Submit Account Details</button>
          </div>
        </form>

        <div className='mt-24 text-center font-normal text-2xl font-inter'>
          <span>Already a user?</span>
          <Link to="/login" className='ml-2 text-[#660056]'>Login here</Link>
        </div>

        <p className='text-center text-base font-semibold mt-8 font-inter'>By signing in, you consent to our terms and condition</p>
      </div>
    </section>
  )
}

export default CreateAccount