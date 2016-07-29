import React from 'react'
import ReactDOM from 'react-dom'

const app = function() {

	const Header = React.createClass({
		render: () => {
			return <div>
						<img src="../images/houston.jpg"></img>
					</div>
		}
	})

	const Body = React.createClass({
		render: () => {
			return <p>This works!</p>
		}
	})

	const Midsection = React.createClass({
		render: () => {
			return 
		}
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()