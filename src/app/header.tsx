import Image from 'next/image'
import imgs from "./imagesama.png"
import {MailOutlined,MobileOutlined }  from "@ant-design/icons"

export default function Home3() {
  return (
    <>
    <div className="bg-white text-black">
     <p className=" float-right py-2 px-10"><MobileOutlined style={{color:"blue"}}/>+1(905)206-1444   <MailOutlined style={{color:"blue"}}/> info@thecanadianhome.com</p>
    <img className="object-fill h-10 w-50 px-10 py-2 ..." src="./imagesama.png"/>
    </div>
   
    </>
  )
}
