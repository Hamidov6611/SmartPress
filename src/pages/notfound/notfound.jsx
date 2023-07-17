import React from 'react'
import Layout from '../../components/layout/layout.jsx'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <Layout>
      <div className='w-[100%] h-[61vh] flex justify-center flex-col items-center'>
          <p className={`font-600 text-[#004CB2] text-[32px] md:text-[48px] mb-4`}>404</p>
          <p className={`font-600 text-[#004CB2] text-[32px] md:text-[48px] mb-4`}>Page Not Found</p>
          <Link to={`/`}> 
            <button 
              className={` bg-white  px-[28px] py-3 font-medium leading-[24.38px] text-[16px] md:text-[16px] text-[#004CB2] mt-4 border-2 border-[#004CB2] hover:bg-[#004CB2] transition-all hover:text-white hover:rounded-lg`}
            >Go back</button>
          </Link>
      </div>
    </Layout>
  )
}

export default Notfound