import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router';
import '../scss/productPage.scss';
import '../scss/_utils.scss';
import '../scss/swiper.scss';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

function ProductPage() {

	const { productId } = useParams();
	
  	React.useEffect(() => {
		//fetch(`https://www.stealer.pl/api/${productId}`);
	}, [])
	
	return (
    	<div>
			<Navbar />
			<div className="bs-content bs-pv-l bs-mt-l">
				<div className="bs-row">
					<div className="bs-col bs-image-gallery bs-pv-l">
					<Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="bs-swiper">
						<SwiperSlide>
							<img src="https://picsum.photos/500" alt="" />
						</SwiperSlide>
						<SwiperSlide><img src="https://picsum.photos/500" alt="" /></SwiperSlide>
						<SwiperSlide><img src="https://picsum.photos/500" alt="" /></SwiperSlide>
						<SwiperSlide><img src="https://picsum.photos/500" alt="" /></SwiperSlide>
						<SwiperSlide><img src="https://picsum.photos/500" alt="" /></SwiperSlide>
						<SwiperSlide><img src="https://picsum.photos/500" alt="" /></SwiperSlide>
						<SwiperSlide><img src="https://picsum.photos/500" alt="" /></SwiperSlide>
					</Swiper>
					</div>
					<div className="bs-col bs-text-box bs-pv-l">
						<div className="bs-title">test</div>
					</div>
				</div>
			</div>
    	</div>
  	);
};

export default ProductPage;