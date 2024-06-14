import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer-app footer text-center pt-5">
		<div className="container pt-4">
			<div className="contenedor d-flex justify-content-between row">
				<div className="columna-1 col-5">
					<h5 className="text-principal">cyber</h5>
					<p>we are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
				</div>
				<div className="columna-2 col-3">
					<h5 className="text-titulo">Services</h5>
					<ul className="list-unstyled">
						<li>Bonus program</li>
						<li>Gift cards</li>
						<li>Credit and payment</li>
						<li>Service contracts</li>
						<li>Non-cash account</li>
						<li>Payment</li>
					</ul>
				</div>
				<div className="columna-3 col-4 text-titulo">
					<h5 className="text-titulo">Assistance to the buyer</h5>
					<ul className="list-unstyled">
						<li>Find an order</li>
						<li>Terms of delivery</li>
						<li>Exchange and return of goods</li>
						<li>Guarantee</li>
						<li>Frequently asked questions</li>
						<li>Terms of use of the site</li>
					</ul>
				</div>
			</div>
			<div className="iconos-footer d-flex justify-content-between ">
				<i className="fa-brands fa-twitter"></i>
				<i class="fa-brands fa-facebook-f"></i>
				<i class="fa-brands fa-tiktok"></i>
				<i class="fa-brands fa-instagram"></i>
			</div>
		</div>

	</footer>
);
