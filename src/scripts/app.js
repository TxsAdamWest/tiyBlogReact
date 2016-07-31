import React from 'react'
import ReactDOM from 'react-dom'

const app = function() {

	const Body = React.createClass({
		render: () => {
			return  <div className="container">
						<div className="header">
							<img className="banner" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"></img>
							<img className="icon" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"></img>
						</div>
						<div className="bodyContainer">
							<Sect1/>
							<Sect2/>
						</div>
						<FollowBox/>
					</div>
		}
	})

	const Sect1 = React.createClass({
		render: () => {
			return <div className="sect1">lorem	</div>

		}
	})

	const Sect2 = React.createClass({
		render: () => {
			return <div className="sect2">
						<h3>September 23rd Starts a New Class of The Iron Yard Houston Students</h3>

						<p className="subText"><i><small>By Brian Dorton, Campus Director at The Iron Yard Houston</small></i></p>
					</div>
		}
	})

	const FollowBox = React.createClass({
		render: () => {
			return <div className="followBox"> Cool box <button></button></div>
		}
	})

	ReactDOM.render(<Body />,document.querySelector('.container'))
}

app()