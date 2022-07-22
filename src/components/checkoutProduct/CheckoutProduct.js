import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
	return (
		<div className='checkoutProduct'>
			<img className='checkoutProductImage' src={image} alt='' />
			<div className='checkoutProductInfo'>
				<p className='checkoutProductTitle'>{title}</p>
				<p className='checkoutProductPrice'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='chechoutProductRating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
                <button>Remove from basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
