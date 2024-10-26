import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/customer.module.css"

export default function index() {
    return (
        <div className='container ml-64'>





            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <div className={styles.card}>
                            <img src="/image-customer/images.png" className="card-img-top img-fluid" alt="Card Image"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <div className={styles.card}>
                            <img src="/image-customer/logo.png" className="card-img-top img-fluid" alt="Card Image"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <div className={styles.card}>
                            <img src="/image-customer/logoo.png" className="card-img-top img-fluid" alt="Card Image"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <div className={styles.card}>
                            <img src="/image-customer/logooo.png" className="card-img-top img-fluid" alt="Card Image"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <div className={styles.card}>
                            <img src="/image-customer/loogo.png" className="card-img-top img-fluid" alt="Card Image"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <div className={styles.card}>
                            <img src="/image-customer/logof.png" className="card-img-top img-fluid" alt="Card Image"/>
                        </div>
                    </div>
                        
                </div>
            </div>

        </div>
    )
}
