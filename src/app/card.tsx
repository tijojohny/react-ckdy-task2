
export default function Card() {
    return (
      <div className="p-10 grid grid-cols-1 text-center bg-white sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-100 h-100" src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/w_1920,c_limit/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg" alt="Mountain"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-700 mb-2">Visibilty</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
   
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-100 h-100" src="https://thumbs.dreamstime.com/z/business-people-analyzing-financial-graphs-their-company-cosy-meeting-room-32879396.jpg" alt="River"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-700 mb-2">Real Local Agent</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
    
      </div>
  
   
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-100 h-100" src="https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="Forest"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-700 mb-2">Professional phtos</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
       
      </div>
    </div>
)}