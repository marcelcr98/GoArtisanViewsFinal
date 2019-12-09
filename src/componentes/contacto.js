import React from 'react';
import Navigation from './navigation';
import './css/main.css';
import './css/util.css';

import imagen from "./images/contact.jpg"
import imagen2 from "./images/icons/icon-email.png"

const Page = () => (


    
	<div class="sec-banner bg0 p-t-80 p-b-50">
		<div class="container center">
			<div class="p-b-10">
				<h3 class="ltext-103 cl5">
					Contacto
				</h3>
			</div>

	
                <section class="bg0 p-t-104 p-b-116">
                    <div class="container">
                        <div class="flex-w flex-tr">
                            <div class="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">

                            <form>
						<h4 class="mtext-105 cl2 txt-center p-b-30">
							Enviar un mensaje
						</h4>

						<div class="bor8 m-b-20 how-pos4-parent">
							<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Correo electronico"/>
							<img class="how-pos4 pointer-none" src={imagen2} alt="ICON"/>
						</div>

						<div class="bor8 m-b-30">
							<textarea class="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="Contacto"></textarea>
						</div>

						<button class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
							Enviar
						</button>
					</form>
     
                            </div>

                            <div class="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                                
                                <img src={imagen} height="400" width="440"/>


                            </div>
                        </div>
                    </div>
                </section>	

			

		
		</div>
	</div>


);

export default Page;