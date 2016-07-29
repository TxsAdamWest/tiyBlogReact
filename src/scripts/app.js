import React from 'react'
import ReactDOM from 'react-dom'

const app = function() {

	const Body = React.createClass({
		render: () => {
			return  <div className="container">
						<div>
							<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg"></img>
							<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"></img>
						</div>
						<Sect1/>
						<Sect2/>
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
			return <div className="sect2">ipsum </div>
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