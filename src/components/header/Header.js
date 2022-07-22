import { Search, ShoppingBasket } from '@material-ui/icons'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import './Header.css'

function Header() {
	const [{basket}, dispatch] = useStateValue()
	return (
		<>
			<div className='header'>
				<Link to='/'>
					<img
						className='headerLogo'
						src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
						alt=''
					/>
				</Link>

				<div className='headerLocation'>
					<LocationOnOutlinedIcon />
				</div>
				<div className='headerOption'>
					<span className='headerOptionLineOne'>Deliver to</span>
					<span className='headerOptionLineTwo'>Lagos</span>
				</div>
				<div className='headerSearch'>
					<input
						className='searchInput'
						type='text'
						placeholder='Search product...'
					/>
					<Search className='searchIcon' />
				</div>
				<div className='headerNav'>
					<div className='headerOption'>
						<span className='headerOptionLineOne'>Hello' Guest</span>
						<span className='headerOptionLineTwo'>Sign In</span>
					</div>
					<div className='headerOption'>
						<span className='headerOptionLineOne'>Returns</span>

						<span className='headerOptionLineTwo'>&Orders</span>
					</div>
					<div className='headerOption'>
						<span className='headerOptionLineOne'>Your</span>
						<span className='headerOptionLineTwo'>Prime</span>
					</div>

					<Link to='checkout'>
						<div className='headerBasket'>
							<ShoppingBasket />
							<span className='headerOptionLineTwo headerBasketCount'>{basket?.length}</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header
