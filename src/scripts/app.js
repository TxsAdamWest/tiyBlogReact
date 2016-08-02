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
			return <div className="sect1">
						<p><b>THE IRON YARD | HOUSTON</b></p>
						<p>Happenings and updates from The Iron Yard in Houston, TX</p>

						<p className="search">Search </p>
						<input type="search"></input>
						<p className="subSearch">Enter Keywords</p>

				</div>

		}
	})

	const Sect2 = React.createClass({
		render: () => {
			return <div className="sect2">
						<h3>September 23rd Starts a New Class of The Iron Yard Houston Students</h3>

						<p className="subText"><i><small>By Brian Dorton, Campus Director at The Iron Yard Houston</small></i></p>

						<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat nec diam non egestas. Suspendisse cursus, mauris vitae viverra semper, est mi aliquam nisi, vitae viverra dolor lacus vitae dolor. Sed mollis sit amet massa rutrum porttitor. Suspendisse ut est sed tellus semper accumsan. Mauris erat magna, laoreet eu augue nec, pellentesque hendrerit purus. Etiam mattis sed dui ut fermentum. Vivamus dapibus tincidunt metus nec ultricies. Suspendisse ac laoreet dui, ac scelerisque massa. Donec ornare mattis consequat. Proin enim ex, gravida non finibus non, venenatis nec augue. Integer aliquam lorem felis, ac laoreet libero eleifend in.

							Quisque arcu mi, convallis ac semper eget, lacinia eu velit. Donec egestas nibh vel nisl convallis, et volutpat turpis vehicula. Duis sit amet condimentum nunc. Vivamus nulla ipsum, volutpat vitae bibendum quis, feugiat in lacus. Sed non mi nec tellus feugiat luctus. Ut vestibulum odio sit amet mi molestie pellentesque. Nulla facilisi. Integer tortor nisl, condimentum quis faucibus quis, tristique ac dui. Donec sodales, odio eget elementum venenatis, nulla purus efficitur nibh, iaculis congue nisi sapien consectetur libero. Proin blandit suscipit erat, eu ultrices turpis tincidunt ac. Donec quis consequat eros. Nam tincidunt molestie consectetur.
						</p>
					</div>
		}
	})

	const FollowBox = React.createClass({
		render: () => {
			return <div className="followBox"> <p>Never miss a post!</p>
						<div className="box1">
							<div className="iconContainer"><img className="icon2" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
							</div><p>TIY Houston</p><p>The Iron Yard | Houston</p>
								 <button>+ Follow</button>
						</div>

					</div>
		}
	})

	ReactDOM.render(<Body />,document.querySelector('.container'))
}

app()