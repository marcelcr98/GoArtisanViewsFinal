import React from 'react';
import '../css/main.css';
import '../css/util.css';
import logo from '../images/icons/logo.png'
import { Link, Redirect, withRouter } from 'react-router-dom';
import w1 from "../images/3.jpg";




const Page = () => (





	<div class="sec-banner bg0 p-t-80 p-b-50">
			<div class="container center">

	
	
		<section class="bg0 p-t-104 p-b-116">
			<div class="container">
				<div class="flex-w flex-tr">
					<div class="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
						<form>
							<h4 class="mtext-105 cl2 txt-center p-b-30">
								Crear tienda
							</h4>

							<div class="bor8 m-b-20 how-pos4-parent">
									<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="text" placeholder="Nombre de la tienda"/>
								
								
								</div>
	
							<div class="bor8 m-b-20 how-pos4-parent">
								<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="text" placeholder="RUC:"/>
								<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="date" name="text" placeholder="Fecha inicio:"/>
								<input class="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="file" id="ejemplo_archivo_1" placeholder="Adjuntar"/>

							
							</div>
	
							<div class="bor8 m-b-30">
								<textarea class="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="Descripcion"></textarea>
							</div>
	
							<button class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
								Crear
							</button>
						</form>
					</div>
	
					<div class="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
						
						<img src={w1} height="400" width="440"/>
	
	
					</div>
				</div>
			</div>
		</section>	
	</div>
    </div>




    







);

export default Page;