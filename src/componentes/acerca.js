import React from 'react';
import Navigation from './navigation';
import './css/main.css';
import './css/util.css';

import imagen from "./images/que.png"

const Page = () => (


    <section class="bg0 p-t-75 p-b-20">
        <div class="container">
            <div class="row p-b-120">
                <div class="col-md-7 col-lg-8">
                    <div class="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                        <h3 class="mtext-111 cl2 p-b-16">
                            ¿Que es GoArtisan?
                        </h3>
    
                        <p class="stext-113 cl6 p-b-26">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                        </p>
    
                        
                    </div>
                </div>
    
                <div class="col-11 col-md-5 col-lg-4 m-lr-auto">
                    <div class="how-bor1 ">
                        <div class="hov-img0">
                            <img src={imagen} alt="IMG"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>	


);

export default Page;