import Image from 'next/image'
import imgss from "./imagesama.png"
export default function Slider() {
    return (

<div id="animation-carousel" className="relative w-full bg-white" data-carousel="static">
    <h2 className="text-black text-center">Featured on</h2>
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div className=" duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="image"/>

        </div>
   
        <div className=" duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          
        </div>
      
        <div className=" duration-200 ease-linear" data-carousel-item="active">
     
            <img src="https://en.m.wikipedia.org/wiki/File:BMW_logo_%28gray%29.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div className=" duration-200 ease-linear" data-carousel-item>
            <img src="https://en.m.wikipedia.org/wiki/File:BMW_logo_%28gray%29.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
   
        <div className=" duration-200 ease-linear" data-carousel-item>
            {/* <img src='https://www.slidebackground.com/thumb/real-estate-background/real-estate-homebuy-home-banner-background-homebuym-1.jpg' className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/> */}
        </div>
    </div>

    <button type="button" className="absolute top-0 left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


        )
    }