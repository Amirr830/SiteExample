"use client"

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
// import "./stylemain.css"
import Customers from "./customers"
import Story from "./storymain"
import Service from "./servicee"
import Count from "./count"
import Danesh from "./daneshmain"
import News from "./newsss"
import Main from "./it/page"
import { FaAngleUp } from "react-icons/fa6";
import Chat from "./chattingg"
import Company from "./company"
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import { IoChatbox } from "react-icons/io5";
import Head from 'next/head';
import Header from "../pages/component/header/index"
import styles from "../styles/main.module.css";
import Footer from '../pages/component/footer/index';



const App = () => {



  const [isVisible, setIsVisible] = useState(false);

  // نمایش دکمه تنها زمانی که اسکرول پایین تر از 300 پیکسل باشد
  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // اسکرول به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
























  return (
    <div>
      <Header />
      <div className='mt-20'>
        <Carousel>
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





        <div className={styles.scroll}>
          {isVisible && (
            <button onClick={scrollToTop} className={styles.scrollbutton}>
              <FaAngleUp />

            </button>
          )}
        </div>



<br />




          <Footer />































































      </div>
    </div>
  );
};

export default App;


