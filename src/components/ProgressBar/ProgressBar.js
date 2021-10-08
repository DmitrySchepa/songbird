import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {

	render() {

		const levels = ['Warm-up', 'Sparrows', 'Forest birds', 'Songbirds', 'Seabirds', 'Raptors'];
		const { level } = this.props;
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
	}
};