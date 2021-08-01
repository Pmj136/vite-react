import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import './welcome.css'

function Welcome() {
	const history = useHistory()
	const toHome = () => {
		history.replace('/home')
	}
	return (
		<div className="app-welcome">
			<header className="app-welcome-header">
				<img src={logo} className="app-welcome-logo" alt="logo" />
				<p className="yyds">React is yyds</p>
				<span className="entry-btn" onClick={toHome}>
					进入主站
				</span>
			</header>
		</div>
	)
}

export default Welcome
