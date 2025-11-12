import React, { useState } from 'react'
import Nav from './Nav'

import FollowUs from './FollowUs'
import Slider from './Slider'
import NavigationMobile from './NavigationMobile'
import { useLocation } from 'react-router'
import Search from './SearchBox/Search';

export default function Header({imageClick}) {

    const [state,setState] = useState(false)
    function Toggle(){
      setState(false)
    }
    const location = useLocation()
  // console.log(location);
  if(location.pathname === "/"){

    return (
      <>
  
      <div  className=' '>
      <Nav Toggle={Toggle}  setState={setState} state={state}  />
      {state && 
      <NavigationMobile Toggle={Toggle}  />
      }
       <div className="flex flex-col items-center">

      <Search />
      <FollowUs />
      </div>
      <div className='hover:cursor-pointer'>
        <Slider  imageClick={imageClick}/>
      </div>
  
      </div>
      </>
    )
  }else{
        return (
      <>
  
      <div className=' '>
      
      <Nav setState={setState} state={state}  />
      {state && 
      <NavigationMobile Toggle={Toggle} />
      
    }
      <Search />
  
      </div>
      </>
    )
  }

}