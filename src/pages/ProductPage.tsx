import React from 'react';
import { useParams } from 'react-router';

function ProductPage() {

	const { productId } = useParams();

  	return (
    	<div>
			<span style={{color: '#000'}}>{productId}</span>
    	</div>
  	);
};

export default ProductPage;