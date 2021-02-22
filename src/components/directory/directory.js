import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import { data } from './data';
import './directory.scss';

const Directory = () => {
	const [sections, setSections] = useState(data);
	// console.log(sections);

	return (
		<div className='directory-menu'>
			{sections.map((section) => {
				console.log(section);
				const { id } = section;
				return <MenuItem key={id} {...section} />;
			})}
		</div>
	);
};

export default Directory;
