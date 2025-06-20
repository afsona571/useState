import React, { useState } from 'react';
import mers from '../assets/mars.png'

const OnClick = () => {
  const [count, setCount] = useState(0); // хук useState на верхнем уровне

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (

    <div >
         <div className='flex flex-col items-center space-y-4 p-4'>
            <h1 className='text-3xl font-bold'>Counter</h1>
     
      <div className='flex space-x-4'>
        <button onClick={handleMinus} className='bg-red-500 text-white px-4 py-2 rounded' > - </button>

        <h2 className='text-2xl font-bold'> {count}</h2>

        <button onClick={handlePlus}className='bg-green-500 text-white px-4 py-2 rounded' >  + </button>
      </div>
         </div>
         <div>
             <h2 className='flex justify-center text-2xl font-bold'>Hidden Component</h2>
             <div className='flex justify-center py-4 gap-6'>
                 <button className='w-[120px] h-[40px] bg-black text-white  rounded-3xl ' >Hidden</button>
             <button className='w-[120px] h-[40px] bg-blue-700 text-white rounded-3xl'>Show</button>
             </div>
             <div>
                <p className='text-center font-bold'>Hello my name is marslikbola</p>
                <img className='flex justify-center px-130 py-5' src={mers} alt="" />
             </div>
             <div>
                <h2 className='text-center font-bold'>Input Change</h2>
                <div className='flex justify-center py-4'>
                <input className='bg-white rounded-2xl border border-lack ' type=""placeholder='Cristiano Rona'/>
                </div>
                <h3 className='text-center font-bold'>YOU TEXT:Cristiano Rona</h3>
             </div>
            


         </div>
        
      
    </div>
  );
};

export default OnClick;
