import React from 'react'
import authImg from '../../assets/authImg.jpg'

//   <div className='w-full h-screen flex items-center justify-center'>
//     <form className='w-[300px] drop-shadow-md py-8 bg-gray-50 px-4' onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" className='w-full my-4 border ' />
//       <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full my-4 border ' />
//       <button onClick={handleSubmit} className=' w-full bg-indigo-300 text-white' >
//         Signup
//       </button>
//     </form>
//   </div>

const AuthContainer = ({ children, title }) => {
    return (
        <div className='flex flex-row h-screen w-full'>

            <div className='w-1/2 flex items-center p-10'>

                <div className='w-full'>
                    <h3 className='text-xl font-bold text-indigo-900 mb-10'>
                        {title}
                    </h3>
                    {children}

                    <div className='h-[1px] w-full bg-gray-400 my-4'></div>
                    <button className='outline-none  bg-white text-center mx-2 border-solid border-[1px] border-indigo-200 p-2 rounded-md'>
                        sign in with google
                    </button>
                </div>

            </div>

            <div className='w-1/2'>
                <img src={authImg} className='h-full w-full object-cover' />
            </div>


        </div>
    )
}

export default AuthContainer