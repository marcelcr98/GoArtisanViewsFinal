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
import { Link, Redirect, withRouter } from 'react-router-dom';
import w1 from "./images/t1.jpg"

const Page = () => (


	<div class="sec-banner bg0 p-t-2 p-b-10">
		<div class="container">
			<div class="p-b-10">
				<h3 class="ltext-103 cl5">
					Tiendas
				</h3>
			</div>

			<br></br>

			<div class="row">
				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
			
					<div class="block1 wrap-pic-w">
						<img src={w1} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
			
					<div class="block1 wrap-pic-w">
						<img src={w1} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
			
					<div class="block1 wrap-pic-w">
						<img src={w1} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
			
					<div class="block1 wrap-pic-w">
						<img src={w1} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
			
					<div class="block1 wrap-pic-w">
						<img src={w1} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
			
					<div class="block1 wrap-pic-w">
						<img src={w1} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>

			

	
			<div class="flex-c-m flex-w w-full p-t-45">

								<Link  class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04" to="/tienda">Ver mas</Link>
			</div>
		</div>
	</div>




);

export default Page;