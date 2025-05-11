import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-gray-900'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
             
             <div>
                 <p className='text-xl font-medium mb-5 text-white ml-5'>SOFTSELL</p>
                 <p className='w-full md:w-2/3 text-gray-300 leading-6 ml-5'>
                        SoftSell is a dynamic technology company dedicated to delivering high-quality digital solutions that empower businesses to grow and innovate. 
                        With a strong focus on user experience, performance, and scalability, we specialize in developing modern web applications, custom software, and intuitive user interfaces.
                        <br></br>
                        Website: Softsell.com
                        <br></br>
                        Contact: +91 950 746 9552 / Softsell.com
                 </p>
             </div>

             <div>
                 <p className='text-xl font-medium mb-5 text-white ml-5'>COMPANY</p>
                 <ul className='flex flex-col gap-2 text-gray-300 ml-5'>
                    <li> Works</li>
                    <li>Choose Us</li>
                    <li>Our Clients </li>
                    <li>Contact us</li>
                 </ul>
             </div>

             <div>
                 <p className='text-xl font-medium mb-5 text-white ml-5'>GET IN TOUCH</p>
                 <ul className='flex flex-col gap-2 text-gray-300 ml-5'>
                    <li>+91 9507469552</li>
                    <li>abhimanyukrbeldari7@gmail.com</li>
                 </ul>
             </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-300'>@ 2025 SoftSell. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
