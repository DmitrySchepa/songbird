import React from 'react';
import './AppHeader.css';

const AppHeader = ({score}) => (

	<div className="top-panel d-flex">
		<h1>SongBird</h1>
		<p className="score">Score: <span>{score}</span></p>
	</div>
)

export default AppHeader;