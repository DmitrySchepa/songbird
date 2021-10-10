import React from 'react';
import './AppHeader.css';
import { useSelector } from 'react-redux';
import { selectScore } from '../../state/store';

const AppHeader = () => {
	
	const score = useSelector(selectScore);
	return (
		<div className="top-panel d-flex">
			<h1>SongBird</h1>
			<p className="score">Score: <span>{score}</span></p>
		</div>
	);
}

export default AppHeader;