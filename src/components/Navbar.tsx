import React from 'react';
import logo from '../assets/logo.png';
import '../scss/header.scss';

import { BsFillBasket2Fill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

function Navbar() {

	const cartSize = 0; //get cart

  	return (
    	<header className="bs-section-header">
			<div className="bs-logo bs-pd-m">
				<img src={logo} alt="" />
			</div>
			<div className="bs-nav-items">
				<div className="bs-item bs-pd-m">
					<div className="bs-icon">
						<MdAccountCircle size={24} color='#FFF' />
					</div>
					<div className="bs-text bs-fs-l">
						Zaloguj się
					</div>
				</div>
				<div className="bs-item bs-pd-m">
					<div className="bs-icon">
						<BsFillBasket2Fill size={24} color='#FFF' />
					</div>
					<div className="bs-text bs-fs-l">
						Koszyk ({cartSize})
					</div>
				</div>
			</div>
		</header>
  	);
};

export default Navbar;