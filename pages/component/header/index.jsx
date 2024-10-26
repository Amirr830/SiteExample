"use client"

import React from 'react'
import { useState } from 'react';
// import "./Header.css"
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import { FaMap } from "react-icons/fa";
import { CgMailOpen } from "react-icons/cg";
import {url} from 'url'
import Image from 'next/image';





export default function index() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    
    <div style={{ height: 80 , backgroundImage:'url("/public/image-co.jpg")' , zIndex: 1000 }} className='position-fixed top-0 w-100 opacity-75 bg-blue-600' >
      <header className='mt-3'>
        <div className="hstack gap-3 w-100">
          <div className="p-2">
            <button><FaSearch className='text-white justify-center content-center' onClick={toggleSearch} /></button>

            {isSearchOpen && (
              <div className="absolute top-20 left-0 right-0 p-4 bg-white border border-gray-300 rounded shadow-lg">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-900 rounded"
                  placeholder="Type to search..."
                />
              </div>
            )}


          </div>

          <div className="text-white p-2">
            <Link href={"/login"} className='justify-center content-center' style={{ textDecoration: "none", color: "white" }}>پشتیبانی</Link>
          </div>

          <div className="text-white p-2">
            <Link href={"/about"} className='justify-center content-center' style={{ textDecoration: "none", color: "white" }}>درباره ما</Link>
          </div>

          <div className="text-white p-2">
            <Link href={"/service"} className='justify-center content-center' style={{ textDecoration: "none", color: "white" }}>خدمات</Link>
          </div>

          <div className="text-white p-2">
            <Link href={"/contact"} className='justify-center content-center' style={{ textDecoration: "none", color: "white" }}>ارتباط با ما</Link>
          </div>

          <div className="text-white p-2">
            <Link href={"/"} className='justify-center content-center' style={{ textDecoration: "none", color: "white" }}>خانه</Link>
          </div>



          <div className="flex p-2 ms-auto">
            <span className='pr-1 text-white opacity-80 justify-center container-fluid'>نوآوری در فناوری هوشمندی </span><br />
          </div>


          <div className="flex p-2">
            <img src="/logo-ebtekar.svg" className='rounded-3xl img-fluid justify-center content-center' alt="Logo Comapny" height={80} width={80} />
          </div>
        </div>
      </header><br />


 



    </div>

  )
}
