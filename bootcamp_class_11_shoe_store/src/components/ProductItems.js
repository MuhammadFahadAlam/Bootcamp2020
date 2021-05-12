import React from 'react';
import { useParams } from 'react-router-dom';

function ProductItems() {
	const { id } = useParams();
	const shoe = shoes[id];

	if (!shoe) {
		return <h1>Page Not Found</h1>;
	}

	return (
		<div>
			<h1>Welcome to Product Item</h1>
			<div className='link'>
				<h4>{shoe.name}</h4>
				<img src={shoe.img} height={500} alt='shoe' />
			</div>
		</div>
	);
}

const shoes = {
	'air-jordan-3-valor-blue': {
		name: 'VALOUR BLUE',
		img:
			'https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
	},
	'jordan-mars-270-london': {
		name: 'JORDAN MARS 270 LONDON',
		img:
			'https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1',
	},
	'air-jordan-1-zoom-racer-blue': {
		name: 'RACER BLUE',
		img:
			'https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
	},
};

export default ProductItems;
