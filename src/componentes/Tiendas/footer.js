import React from 'react';
import '../css/main.css';
import '../css/util.css';
import icon1 from '../images/icons/icon-pay-01.png'
import icon2 from '../images/icons/icon-pay-02.png'
import icon3 from '../images/icons/icon-pay-03.png'
import icon4 from '../images/icons/icon-pay-04.png'
import logo2 from "../images/icons/logod.png"

const Page = () => (
	
	<footer class="bg3 p-t-75 p-b-32">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-lg-3 p-b-50">
					<h4 class="stext-301 cl0 p-b-30">
						Enlaces rapidos
					</h4>

					<ul>
						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Inicio
							</a>
						</li>

						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Productos
							</a>
						</li>

						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Tiendas
							</a>
						</li>

						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Acerca
							</a>
						</li>

						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Login
							</a>
						</li>
					</ul>
				</div>





				<div class="col-sm-6 col-lg-3 p-b-50">

				<h4 class="stext-301 cl0 p-b-30">
						Desarrolladores
					</h4>

					<li class="p-b-10">
							<p class="stext-107 cl7 size-201">
						Marcelo Cuellar
					</p>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-instagram"></i>
						</a>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-linkedin"></i>
						</a>
					
					</li>

					<br></br>


					<li class="p-b-10">
							<p class="stext-107 cl7 size-201">
						Hugo de la Cruz
					</p>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-instagram"></i>
						</a>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-linkedin"></i>
						</a>
					
					</li>

					<br></br>


					<li class="p-b-10">
							<p class="stext-107 cl7 size-201">
						Friman Vilcapoma
					</p>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-instagram"></i>
						</a>

						<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i class="fa fa-linkedin"></i>
						</a>
					
					</li>


				</div>

				


				<div class="col-sm-6 col-lg-3 p-b-50">
					<h4 class="stext-301 cl0 p-b-30">
						Correo
					</h4>

					<form>
						<div class="wrap-input1 w-full p-b-4">
							<input class="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="Ingresa tu Correo"/>
							<div class="focus-input1 trans-09"></div>
						</div>

						<div class="p-t-18">
							<button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
								Continuar
							</button>
						</div>
					</form>
				</div>

				<div class="col-sm-6 col-lg-3 p-b-50">

					<img src={logo2} height="300" width="300"/>
					
				</div>
			</div>

			<div class="p-t-40">
				<div class="flex-c-m flex-w p-b-18">
					<a href="#" class="m-all-1">
						<img src={icon1} alt="ICON-PAY"/>
					</a>

					<a href="#" class="m-all-1">
					
						<img src={icon2} alt="ICON-PAY"/>
					</a>

					<a href="#" class="m-all-1">
						
						<img src={icon3} alt="ICON-PAY"/>
					</a>

					<a href="#" class="m-all-1">
					
						<img src={icon4} alt="ICON-PAY"/>
					</a>

					
				</div>


			</div>
		</div>
	</footer>



);

export default Page;