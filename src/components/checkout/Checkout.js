import React from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import Subtotal from '../subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
	const [{basket}, dispatch] = useStateValue()
	return (
		<>
		<div className='checkout'>
			<div className='checkout-left'>
				<img className='checkoutAds' src="https://washington.org/sites/default/files/hero_shopping_eastern-market_ddc-photo_1600x432.jpg" alt="" />
				<div>
					<h2 className='checkoutTitle'>Shopping Basket</h2>
					{basket.map(item => (
						<CheckoutProduct 
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
            
			<div className='checkout-right'>
				<Subtotal />
			</div>
		</div>
		</>
	)
}

export default Checkout
