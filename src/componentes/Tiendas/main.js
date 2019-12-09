import React from 'react';
import '../css/main.css';
import '../css/util.css';
import logo from '../images/icons/logo.png'
import { Link, Redirect, withRouter } from 'react-router-dom';
import w1 from '../images/wl1.jpg';
import w2 from '../images/t1.jpg';


const Page = () => (

	<section class="bg0 p-t-23 p-b-140">
        <br></br><br></br>
                <div class="container">
                        <section class="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url('+w1+')'}}>
                        
                <h2 class="ltext-105 cl0 txt-center">
                    Tiendas
                </h2>
            </section>	

	

	<div class="sec-banner bg0 p-t-2 p-b-10">
		<div class="container">

            <br></br>


			<div class="row">
	

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div class="block1 wrap-pic-w">
						<img src={w2} alt="IMG-BANNER"/>

					
						<Link class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3" to="/tiendac">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 1</font>
								</span>

								<span class="block1-info stext-102 trans-04">
									<font color="#fff">Direccion</font>
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09" >
									Shop Now
								</div>
							</div>
						
						</Link>
					</div>
				</div>

                <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div class="block1 wrap-pic-w">
						<img src={w2} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 2</font>
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
						<img src={w2} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 3</font>
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
						<img src={w2} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 4</font>
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
						<img src={w2} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 5</font>
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
						<img src={w2} alt="IMG-BANNER"/>

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									<font color="#fff">Tienda 6</font>
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






);

export default Page;