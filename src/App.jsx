import logo from './assests/images/logo.svg';
import './App.css';
import twitter from './assests/images/twitter icon.png'
import telegram from './assests/images/telegram icon.png'
import join from './assests/images/join to grow icon.png'
import character from './assests/images/character.png'
import { GrShare } from "react-icons/gr";
import box3 from './assests/images/box3.png'
import box2 from './assests/images/box2.png'
import box1 from './assests/images/box1.png'
import { useState, useEffect } from 'react';





  const App = () => {


    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const target = new Date("2/03/2024 23:59:59");
  
      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
  
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
  
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
  
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);


  return (

    <div className='bg-[#064077] min-h-screen flex flex-row items-center justify-center'>
     <div className='w-fit flex gap-8 h-fit relative justify-center'> 
    
      {/* Left-hand container */}
      <div className="w-2/3 md:w-3/5 flex flex-col items-center justify-between xs:w-full lg:w-1/3  lg:mt-10 lg:m-10 ">
     
        <div>
        <img className="xs:m-8 md:m-8 " src={logo} alt="" />
          <div className="flex flex-col gap-2 items-center">
            {/* <h2 className='growth w-full text-[#1bee70] text-8xl font-bold'>Growth NOW!</h2>  */}
            {/* <h2 className='growth w-full text-[#1bee70] xs:text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-bold'>
        Growth NOW!
      </h2> */}
      <h2 className='growth w-full text-[#1bee70] mt-10 xs:mt-2 xs:ms-12 xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold '>Growth NOW!</h2>
        
            <h3 className='growth text-white mt-5 lg:mt-7 xs:mt-2 xs:ms-6  xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl '>Ready for a <span className='font-bold'>peak into the world of success from </span>
              <span className="text-[#5cacf7] font-bold">established industry leaders?</span>
            </h3>
            <h4 className="growth font-bold w-full  text-[#1bee70] lg:mt-6 xs:mt-2 xs:ms-10 xs:text-2xl sm:text-4xl md:text-6xl lg:text-4xl  ">The revolution begins with you!</h4>
            <div className="flex flex-wrap w-full lg:mt-10 ms-8">
            <a href="https://twitter.com/dutchuncleio" target="_blank" rel="noopener noreferrer">
            <img className="mr-2 xs:mb-8 object-contain h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-14 lg:w-14" src={twitter} alt="Twitter" />
            </a>
            <a href="https://t.me/dutchuncleio" target="_blank" rel="noopener noreferrer">
             <img className="mx-2 object-contain h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-14 lg:w-14 " src={telegram} alt="Telegram" />
            </a>
          <a href="https://t.me/dutchuncleio" target="_blank" rel="noopener noreferrer">
           <img className="ml-7 h-24 w-72 xs:h-9 xs:w-24 xs:ml-2 md:h-18 md:w-36" src={join} alt="Join" />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start mt-5 xs: m-8'>
        <a href="https://opensea.io/collection/growth-now/overview" target="_blank" rel="noopener noreferrer">
          <button className="growth bg-[#1bee70] text-[#064077] p-3 flex w-full xs:mr-12 xs:text-1xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-4xl gap-3 font-bold text-center justify-center rounded">Get the Alpha Pass NFT<GrShare /></button>
        </a>
          <span className="growth text-1xl text-center w-full text-[#8a97a2] mr-[220px]">You are only 30 USD away from changing Your life</span>
         </div> 
     
      </div>
      {/* Right-hand container */}
 

<div className='w-1/2 relative hidden lg:block lg:w-1/3 lg:mt-10'>
<img className="w-full" src={character} alt="" />

<img className="absolute bottom-0 right-0 mb-[190px] mr-12 hover:animate-spin animate-float1" src={box2} alt="" />

 <img className="absolute bottom-[300px] left-[-55px] hover:animate-spin animate-float2" src={box1} alt="" />

<img className="absolute top-[210px] right-0 mr-12 hover:animate-spin animate-float3" src={box3} alt="" />
  </div> 

</div>

  <div className='growth font-bold absolute top-3 text-[#064077] text-8xl flex items-center bg-green-500 rounded md:p-4 md:top-0 lg:top-5 '>
  <p className='mr-2 text-[1.3rem]'>{days}d</p>
      <p className='mr-2 text-[1.3rem]'> {hours}h</p>
      <p className='mr-2 text-[1.3rem] hidden'>{minutes}d</p>
      <p className='mr-2 text-[1.3rem] hidden'> {seconds}h</p>
      <p className='text-[1.1rem]'>Alpha Drops! Be prepared, Growth Now!</p>
    <div>
   </div>
  </div>

 
<div className='absolute top-0 left-0 p-4 text-white mx-auto sm:hidden xs:hidden'>
      <p className='bg-[#1D9BE5] p-1 text-center mr-10 rounded'>Alpha 1.0</p>
       <span className='text-[#6fb7e1]'>Full Site Coming Soon!</span>
</div> 
</div>

  )
}

export default App;