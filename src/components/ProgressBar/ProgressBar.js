import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ level }) => {

	const levels = ['Warm-up', 'Sparrows', 'Forest birds', 'Songbirds', 'Seabirds', 'Raptors'];
	const birds = levels.map((el, ind) => (
		<li className='page-item' key={el}>
			<a className={level === ind ? 'page-link active' : 'page-link'} href='/#'>{el}</a>
		</li>)
	);

	return	(
		<ul className="pagination">
			{birds}
		</ul>
	)
};

export default ProgressBar;