import React ,{useState,useEffect}from 'react'

import { Typewriter } from 'react-simple-typewriter'

import logo from "./assests/tf-removebg-preview.png"

const Preloader = ({fadeOut}) => {

    const [firstLoop,setFirstLoop] = useState(false)

    useEffect (()=>{
        setTimeout(()=>{
            setFirstLoop(true)
        },1700)
    },[])
    function firstLoopDone(){
        
    }

  return (
    <div   className={`flex justify-center items-center w-[100vw] h-[100vh]  flex-col transition-all duration-500 relative ${
        fadeOut ?  'opacity-0 scale-100 z-40' : 'opacity-100 scale-50 z-40'
      }`}
    >
        <img className='z-40' src={logo} width={200} alt=''/>

        <span className='text-white  font-bold z-40 pre-loader-text'>
        <Typewriter
            words={['THE FREELANCER']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={70}
            delaySpeed={2500}
            onLoopDone={firstLoopDone}
          />
        </span>
        {firstLoop && 
        <span className='text-white text-[1.2rem] z-40'>
        <Typewriter
            words={['COMPANY']}
            loop={1}
            deleteSpeed={70}
            delaySpeed={2000}
            typeSpeed={110}
          />
        </span>}
        
    </div>
  )
}

export default Preloader