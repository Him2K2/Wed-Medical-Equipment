import React, { useState, useEffect, memo } from 'react';
import Cart from './Cart';
import './style.css';
const NewArrivals = () => {
    return (
        <>
            <section className="NewArrivals background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row  f_flex">
                            <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
                            <h2>Sản phẩm mới </h2>
                        </div>
                        <div className="heading-right row ">
                            <span>Tất cả</span>
                            <i className="fa-solid fa-caret-right"></i>
                        </div>
                    </div>
                    <Cart />
                </div>
            </section>
        </>
    );
};

export default memo(NewArrivals);