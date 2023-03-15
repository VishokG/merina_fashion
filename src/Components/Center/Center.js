import React from 'react'
import "./Center.css"
import FancyBreaker from '../FancyBreaker/FancyBreaker';
import MainSwiper from '../MainSwiper/MainSwiper';
import ProductSwiper from '../ProductSwiper/ProductSwiper';
import AltSwiper from '../AltSwiper/AltSwiper';
import PhotoCollage from '../PhotoCollage/PhotoCollage';

const productSwiper1 = [{
	url: "assets/product_swiper_1/jacket2.jpeg",
	type: "Cloth",
	name: "Denim Jacket",
	price: 30,
	discount: 23
}, {
	url: "assets/product_swiper_1/blazer.jpeg",
	type: "Cloth",
	name: "Blue Blazer",
	price: 45,
	discount: 38
}, {
	url: "assets/product_swiper_1/jacket1.jpeg",
	type: "Cloth",
	name: "Leather Jacket",
	price: 39,
	discount: 18
}, {
	url: "assets/product_swiper_1/pants2.jpeg",
	type: "Cloth",
	name: "Blue Pants",
	price: 20,
	discount: 23
}, {
	url: "assets/product_swiper_1/shirt2.jpeg",
	type: "Cloth",
	name: "White Shirt",
	price: 10,
	discount: 7
}];
const product_swiper_2 = [{
	url: "assets/product_swiper_2/jacket3.jpeg",
	type: "Cloth",
	name: "Cotton Jacket",
	price: 70,
	discount: 23
}, {
	url: "assets/product_swiper_2/jacket4.jpeg",
	type: "Cloth",
	name: "Bomber Jacket",
	price: 90,
	discount: 79
}, {
	url: "assets/product_swiper_2/pants.jpeg",
	type: "Cloth",
	name: "Khaki Pants",
	price: 28,
	discount: 23
}, {
	url: "assets/product_swiper_2/shorts.jpg",
	type: "Cloth",
	name: "White Shorts",
	price: 31,
	discount: 22
}, {
	url: "assets/product_swiper_2/watch.jpg",
	type: "Accessories",
	name: "Classsic Watch",
	price: 200,
	discount: 145
}, {
	url: "assets/product_swiper_2/wallet.jpg",
	type: "Accessories",
	name: "Leather Wallet",
	price: 300,
	discount: 209
}];

const Center = () => {
	return (
		<div className="center">
			<div className="carousel_1">
				<MainSwiper />
			</div>
			<FancyBreaker text={"Fashion items in all styles"}/>
			<div className="carousel_2">
				<ProductSwiper assets={productSwiper1} />
			</div>
			<div className="img_grid_container">
				<div className="row">
					<div class="column">
						<img src="assets/image_grid/bowtie.jpeg" alt="" />
						<img src="assets/image_grid/formal.jpeg" alt="" />
						<img src="assets/image_grid/scarf.jpeg" alt="" />
					</div>
					<div class="column">
						<img src="assets/image_grid/suspenders.jpeg" alt="" />
						<img src="assets/image_grid/belt.jpeg" alt="" />
						<img src="assets/image_grid/socks.jpeg" alt="" />
					</div>
				</div>
			</div>
			<FancyBreaker text={"Trending Style"}/>
			<ProductSwiper assets={product_swiper_2} />
			<div className="img_grid_container">

			</div>
			<FancyBreaker text={"New Arrivals"}/>
			<div className="carousel_3">
				<AltSwiper />
			</div>
		</div>
	)
}

export default Center;