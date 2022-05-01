import React from 'react'
import {
    Container,
    } from "../FooterStyles";
    import Cart from './Cart'

export default function Store() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5">
      Zombie Apocalypse
    </h1>
    <Container>
    <div class="row shop-items container text-center">
		
		<div class="row g-1">
			<div class="col shop-item">
		  <div class="card mb-4 rounded-3 shadow-sm">
			<div class="card-header py-3">
			  <h4 class="my-0 fw-normal shop-item-title" >Zombie Shirt</h4>
			</div>
			<div class="card-body shop-item-details image">
			  <h1 class="card-title pricing-card-title shop-item-price">$6.00<small class="text-muted fw-light"></small></h1>
			  <div class="list-unstyled mt-3 mb-4">
				<img class="img-fluid shop-item-image" src="../images/zombieshirt.jpg" alt=""></img>
			  </div>
        <button to="" type="button" className="w-100 btn btn-lg btn-primary add-cart cart1"><h5>Add</h5></button>
			  <input type="hidden" value="6" />
			</div>
		  </div>
			</div>
      </div>
</div>
    </Container>
<Cart/>
  </form>
  )
}