import React from 'react';
import './css/main.css';
import './css/util.css';
import logo from './images/icons/logo.png'
import Footer from './footer';
import { Link, Redirect, withRouter } from 'react-router-dom';
import carrito from './images/carrito.png'

const Page = () => (


	<header>

		<div class="container-menu-desktop">
		
			<div class="wrap-menu-desktop">
				<nav class="limiter-menu-desktop container">
						
					<a href="#" class="logo">
						<img src={logo} alt="IMG-LOGO"/>
					</a>


					<div class="menu-desktop">
						<ul class="main-menu">
					
                                <li > <Link to="/settings">Inicio</Link></li>
							
							
							<li> <Link to="/tienda">Tiendas</Link></li>
						

							<li> <Link to="/acerca">Acerca</Link></li>

						
							<li> <Link to="/inform">Login</Link></li>

						</ul>
					</div>	
					<div class="wrap-icon-header flex-w flex-r-m">
							
		
								<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11  js-show-cart" >
									<i >	<Link to="/carrito"><img src={carrito} height="30" width="30"/></Link></i>
								</div>

								<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 ">

								<Link to="/creart" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
									Crear Tienda</Link>


							</div>
		


						
					</div>
				</nav>
			</div>	
		</div>

		<div class="wrap-header-mobile">		
			<div class="logo-mobile">
				<a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"/></a>
			</div>

			<div class="wrap-icon-header flex-w flex-r-m m-r-15">
				<div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
					<i class="zmdi zmdi-search"></i>
				</div>

				<div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
					<i class="zmdi zmdi-shopping-cart"></i>
				</div>

				<a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
					<i class="zmdi zmdi-favorite-outline"></i>
				</a>
			</div>

			<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</div>
		</div>

		<div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
			<div class="container-search-header">
				<button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="images/icons/icon-close2.png" alt="CLOSE"/>
				</button>


			</div>
		</div>
	</header>



);

export default Page;