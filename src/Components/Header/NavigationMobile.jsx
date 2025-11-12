import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Context } from '../../Context/UserContext'
import toast from 'react-hot-toast'

export default function NavigationMobile({Toggle }) {
  const {user,setSession,setUser} =  useContext(Context)
  const navigate = useNavigate()
  return (
     

         <ul className='md:hidden z-10 absolute flex flex-col items-center bg-linear-to-br from-slate-950 to-slate-600 px-8 pb-8 rounded-b-sm w-[300px] sm:w-8/12 h-70'>
            <p onClick={Toggle} className='pt-5 border-transparent border-b hover:border-b-slate-300 transition-all ease-in'><NavLink to='movies'>فیلم ها </NavLink></p>
            <p onClick={Toggle} className='pt-5 border-transparent border-b hover:border-b-slate-300 transition-all ease-in'><NavLink to='tv'>سریال ها</NavLink></p>
            <p onClick={Toggle} className='pt-5 border-transparent border-b hover:border-b-slate-300 transition-all ease-in'><NavLink to='people'>بازیگران</NavLink></p>
            <p  onClick={Toggle}   className='pt-5 border-transparent border-b hover:border-b-slate-300 transition-all ease-in'><NavLink to='farsimovie'>دوبله فارسی </NavLink></p>

        <div className='flex justify-between items-center gap-4 mt-2 pl-4 text-xs'>

            {user 
            ?
            <div className='flex flex-wrap gap-2'>
                          <p onClick={Toggle}  className='bg-red-500 px-3 py-2 border-0 rounded-sm w-20 text-white text-center'><NavLink to='about'>درباره ما</NavLink></p>
              <button  onClick={() =>{setUser(null) ,localStorage.removeItem('session'),setUser(null),Toggle(), toast.success("خروج با موفقیت انجام شد ..",{ style: {
                    borderRadius: '10px',
                    background: '#272525',
                    color: '#00ff00',
                    },}) }} className='bg-red-500 py-2 border-0 rounded-sm w-20 text-white text-center cursor-pointer'>خروج</button>
              <p onClick={()=>navigate("/profile")} className='bg-yellow-200 px-4 py-2 border-0 rounded-sm text-slate-800 cursor-pointer'>{user.name}</p>
            
            </div>
            :
            <>
            <p onClick={Toggle} className='bg-red-500 px-3 py-2 border-0 rounded-sm w-20 text-white text-center'><NavLink to='login'>ورود</NavLink></p>
            <p onClick={Toggle} className='bg-red-500 px-3 py-2 border-0 rounded-sm w-20 text-white text-center'><NavLink to='sign'>ثبت نام</NavLink></p>
            </>}



        </div>
         </ul>
     
  )
}
