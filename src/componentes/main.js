import React from 'react';
import Navigation from './navigation';
import './css/main.css';
import './css/util.css';
import logo from './images/icons/logo.png'
import icon1 from './images/icons/icon-pay-01.png'
import icon2 from './images/icons/icon-pay-02.png'
import icon3 from './images/icons/icon-pay-03.png'
import icon4 from './images/icons/icon-pay-04.png'
import logo2 from "./images/icons/logod.png"
import w1 from "./images/1.jpg"

const Page = () => (

    <section class="section-slide">
    <div class="wrap-slick1">
      <div class="slick1">
        <div class="item-slick1" style={{backgroundImage: 'url('+w1+')'}}>
          <div class="container h-full">
            <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
    
                <span class="ltext-101 cl2 respon2" color="white">
                  <font color="#fff">Productos Artesanales</font>
                </span>
   
              <div  data-appear="fadeInUp" data-delay={800}>
                <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                  <font color="#fff">Adornos para tu casa</font>
                </h2>
              </div>
                <a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                  Ver mas
                </a>
  
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>

  













);

export default Page;