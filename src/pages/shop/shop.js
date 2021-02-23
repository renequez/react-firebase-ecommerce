import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { SHOP_DATA } from './data';

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<div className='shop-page'>
			{collections.map((collection) => {
				return <CollectionPreview key={collection.id} {...collection} />;
			})}
		</div>
	);
};

export default ShopPage;
