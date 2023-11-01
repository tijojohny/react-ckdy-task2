import Image from 'next/image'
import imgss from "./imagesama.png"
import { Button } from 'antd';
export default function Body() {
    
    return ( 
      
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ background: `url('https://www.slidebackground.com/thumb/real-estate-background/real-estate-homebuy-home-banner-background-homebuym-1.jpg')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="flex flex-col justify-center items-center h-full  bg-opacity-90">
          <h1 className="text-black text-center text-lg">Thinking of selling your home?</h1>
          <h4 className="text-black text-center">
            Get an instant estimate of your home's value. You can quickly determine the estimated value of<br/> your home by answering a few quick questions.
          </h4>
          <input className="w-64 p-2 rounded-md text-black border border-black" placeholder="Enter your address..." />
          <Button className=' my-2'>Get Free Estimate</Button>
        </div>
      </div>
    );
  }
