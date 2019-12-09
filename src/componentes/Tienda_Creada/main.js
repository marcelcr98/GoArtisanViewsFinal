import React from 'react';
import '../css/main.css';
import '../css/util.css';
import logo from '../images/icons/logo.png'
import { Link, Redirect, withRouter } from 'react-router-dom';
import w1 from '../images/tiendas/1.jpg';
import w2 from '../images/que.png';
import w3 from '../images/2.jpg';
import w4 from "../images/icons/icon-heart-01.png";
import w5 from "../images/icons/icon-heart-02.png";
import w6 from "../images/contact.jpg"; 



const Page = () => (

	<section>
	<section class="section-slide">
		<div class="wrap-slick1">
			<div class="slick1">
				<div class="item-slick1" style={{backgroundImage: 'url('+w1+')'}}>
					<div class="container h-full">
						<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div data-appear="fadeInDown" data-delay="0">
								<span class="ltext-101 cl2 respon2"
								color="white">
									<font color="#fff">Mi tienda</font>
								</span>
							</div>
								
							<div  data-appear="fadeInUp" data-delay="800">
								<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
									<font color="#fff">Productos artesanales SAC</font>
							
								</h2>
							</div>
								
							<div  data-appear="zoomIn" data-delay="1600">
                                <font color="#fff">Venta de productos artesanales a por mayor y menor</font>
                                
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    
<section class="bg0 p-t-40 p-b-40">
	<div class="container">
		<div class="row p-b-120">
			<div class="col-md-7 col-lg-8">
				<div class="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
					<h3 class="mtext-111 cl2 p-b-16">
						Nuestra tienda
					</h3>

					<p class="stext-113 cl6 p-b-26">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. 
					</p>

					
				</div>
			</div>

			<div class="col-11 col-md-5 col-lg-4 m-lr-auto">
				<div class="how-bor1 ">
					<div class="hov-img0">
						<img src={w2} alt="IMG"/>
					</div>
				</div>
			</div>
		</div>
		
	</div>
    
    
</section>	
    
    
		<section class="bg0 p-t-23 p-b-70">
		<div class="container">
   		<div class="p-b-10">
				<h3 class="ltext-103 cl5">
					Productos
				</h3>
			</div>







			<div class="row isotope-grid">
			
		


				<div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src={w3} alt="IMG-PRODUCT"/>

                            <Link class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 " to="/producto">

						
								Quick View
							</Link>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Mini Silver Mesh Watch
								</a>

								<span class="stext-105 cl3">
									$86.85
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src={w4} alt="ICON"/>
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src={w5} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="flex-c-m flex-w w-full p-t-45">
			<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">
        1
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
			</div>
		</div>
	</section>






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
					
					<img src={w6} height="400" width="440"/>


				</div>
			</div>
		</div>

        
	</section>	

			

		
		</div>
	</div>
    </section>	







);

export default Page;