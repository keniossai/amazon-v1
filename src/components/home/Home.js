import React from 'react'
import Product from '../product/Product'
import './Home.css'

function Home() {
	return (
		<div className='home'>
			<div className='homeContainer'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/FathersDay/Fuji_TallHero_FD21_en_US_1x._CB667980417_.jpg'
					className='homeImage'
					alt=''
				/>
                <div className="homeRow">
                    <Product title='Garmin 010-02064-00 Instinct, Rugged Outdoor Watch with GPS, Features Glonass and Galileo, Heart Rate Monitoring and 3-Axis Compass, Graphite' price={20.99} image='https://m.media-amazon.com/images/I/6181t0057sL._AC_UY218_.jpg' rating={5} />
                    <Product title='Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack' image='https://images-na.ssl-images-amazon.com/images/I/81p91cnIFEL._AC_UL270_SR212,270_.jpg' rating={3} price={25.99} />
                </div>
                <div className="homeRow">
                    <Product title='Apple AirPods with Charging Case (Wired)' price={12.99} image='https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg' rating={4} />
                    <Product title='Timberland Mens White Ledge Mid Waterproof Ankle Boot' price={80.88} image='https://m.media-amazon.com/images/I/71iWLNVDL3L._AC_UY218_.jpg' rating={4} />
                    <Product title='Nintendo Switch Pro Controller' price={55.88} image='https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UY218_.jpg' rating={5} />
                </div>
                <div className="homeRow">
                    <Product title='Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)' price={60.88} image='https://m.media-amazon.com/images/I/81tjLksKixL._AC_UY218_.jpg' rating={5} />
                </div>
			</div>
		</div>
	)
}

export default Home
