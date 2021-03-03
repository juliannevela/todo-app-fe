import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<header className='header'>
				<NavLink exact to={'/'}>
					Home
				</NavLink>
				{/* <button>Sign Out</button> */}
			</header>
		);
	}
}
