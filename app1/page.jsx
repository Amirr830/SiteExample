"use client"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import "./stylemain.css"
import Customers from "./customers"
import Story from "./storymain"
import Service from "./servicee"
import Count from "./count"
import Danesh from "./daneshmain"
import News from "./newsss"
import Main from "./it/page"
import Chat from "./chattingg"
import Company from "./company"
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import { IoChatbox } from "react-icons/io5";
import Head from 'next/head';





const App = () => {
  return (
    <div>
      <Carousel className='mt-2'>
        <CarouselItem >
          <img src="/phonee.jpg" id='first' alt="Image 1" />

          <CarouselCaption>
            <p className='text-left text-4xl mb-96 '>نوآوری

              در

              فناوری

              هوشمندی

              در

              کسب‌وکار</p>
              <div className='text-left ml-36 text-xl pos'>
            <p>بزرگترین ارایه دهنده زیرساخت تحول دیجیتال در کشور
            </p></div>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src="/taxis.jpg" id='second' alt="Image 1" />
          <CarouselCaption>
            <p className='text-4xl text-right imagee text-black'>نوآوری

              در

              فناوری

              هوشمندی

              در

              کسب‌وکار</p>
              <div className='text-right text-xl imagee text-black'>
            <p>بزرگترین ارایه دهنده زیرساخت تحول دیجیتال در کشور
            </p></div>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src="/texii.jpg" id='third' alt="Image 1" />
          <CarouselCaption>
            <p className='text-4xl text-right imagee text-black'>نوآوری

              در

              فناوری

              هوشمندی

              در

              کسب‌وکار</p>
              <div className='text-right text-xl imagee text-black'>
            <p>بزرگترین ارایه دهنده زیرساخت تحول دیجیتال در کشور
            </p></div>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>



      <br /><br /><br />

      <Story />

      <br />
      <br />
      <br />

      <Main />


      <br /><br />

      <Service />



      <br /><br /><br />
      <Count />

      <br /><br />

      <Danesh />

      <br /><br />

      <Company />

      <br /><br />

      <div className='container'>
        <p className='text-center text-4xl'>مشتریان</p>
      </div><br />


      <div className='container'>
        <Customers />
      </div>
      <br />



      <br />

      <div className='container'>
        <p className='text-center text-4xl'>اخبار</p>
      </div><br />


      <News />


      <br />
      <br />


      <Chat />
















































































    </div>
  );
};

export default App;


