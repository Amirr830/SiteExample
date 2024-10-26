"use client"

import React, { useState, useEffect } from "react";
import "./style.css"

export default function index() {


    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= 10000) {
                    clearInterval(interval);
                    return prevCount;
                }
                return prevCount + 50;
            });
        }, 100); 

        return () => clearInterval(interval); 
    }, []);


    return (
        <div className='container'>
            <h1 className='text-center text-3xl'>اطلاعات اعضا</h1>
            <div className="counter-container">
                <div className=" counter">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="text-blue-600 col">
                                {count}
                            </div>

                            <div className="text-blue-600 col">
                                {count}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
