import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { Context } from '../../Context/UserContext'
import toast from 'react-hot-toast'

export default function Nav({state,setState,Toggle }) {
  const {user,setUser,setSession} =  useContext(Context)
    const navigate = useNavigate()
  // console.log(user);
  
  return (
        <nav className='relative flex justify-between items-center bg-slate-900 bg-linear-to-r from-slate-950 to-slate-800 sm:bg-none bg-fixed px-8 rounded-b-sm w-full h-16'>
        <MenuIcon   setState={setState} state={state} />
       <NavLink onClick={Toggle} to={"/"}>
         <h2  className='pl-1 border-yellow-500 border-b-2 border-l-2 rounded-2xl font-light text-3xl animate-bounce linea'>Od Movie</h2>
       </NavLink>
        <div className='hidden md:flex gap-4 text-slate-400'>
            <p className='hover:border-b hover:border-b-red-200 transition-all ease-in delay-100'><NavLink to="movies">فیلم ها </NavLink></p>
            <p className='hover:border-b hover:border-b-red-200 transition-all ease-in delay-100'><NavLink to='tv'>سریال ها</NavLink></p>
            <p className='hover:border-b hover:border-b-red-200 transition-all ease-in delay-100'><NavLink to='people'>بازیگران</NavLink></p>
            <p className='hover:border-b hover:border-b-red-200 transition-all ease-in delay-100'><NavLink to='farsimovie'>دوبله فارسی </NavLink></p>

        </div>
        <div className='hidden md:flex justify-center items-center gap-4'>
            <p className='hidden md:block'><NavLink to='about'>درباره ما</NavLink></p>
            {user 
            ?
             <> 
              <p onClick={()=>navigate("/profile")} className='bg-yellow-200 px-6 py-2 border-0 rounded-sm text-slate-800 cursor-pointer'>{user.name}</p>
              <button onClick={() =>{setUser(null) ,navigate("/"),localStorage.removeItem('session'),toast.success("خروج با موفقیت انجام شد ..",{ style: {
                    borderRadius: '10px',
                    background: '#272525',
                    color: '#00ff00',
                    },}) }}  className='bg-red-500 py-2 border-0 rounded-sm w-20 text-white text-center cursor-pointer'>خروج</button>
              </> 
            :
              <>
               <p className='bg-yellow-500 px-6 py-2 border-0 rounded-sm text-white'><NavLink to='sign'>ثبت نام</NavLink></p>
               <p className='bg-yellow-500 px-6 py-2 border-0 rounded-sm text-white'><NavLink to='login'>ورود</NavLink></p>
             </> 
            }
          


        </div>

    </nav>
  )
}
function MenuIcon({setState,state}){
  if(!state){

    return(
      <div onClick={() =>setState(s =>!s)}  className='md:hidden flex justify-center items-center hover:cursor-pointer bg'>
        
        <i class="bi bi-list">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
  </svg></i></div>
  
  )
  }else{
    return(

      <div onClick={() =>setState(s =>!s)}  className='md:hidden flex justify-center items-center hover:cursor-pointer bg'>

    <i class="bi bi-x-lg"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></i>
       </div>
)
  }
}