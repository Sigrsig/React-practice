import React from 'react';
import ReactDOM from 'react-dom';
import Sad from './used.js';
import './index.css';
import './sass.scss';

const myfirstelement = <h1>Hello React! Here is the root function</h1>

//(the element you want to use, Where you want it in the HTML)
ReactDOM.render(myfirstelement, document.getElementById('root'));

const alist = (
	<div>
		<ul>
			<li>Benn</li>
			<li>Sigga</li>
			<li>Jaffa</li>
			<li>Pippin</li>
		</ul>
		<p>You can also use JS inside here: {5+5} </p>
	</div>
);

ReactDOM.render(alist, document.getElementById('root-two'));

// Close all empty elements with />

class Cat extends React.Component {
	render() {
		return <h2>Hi, I am a Cat!</h2>
	}
}

ReactDOM.render(<Cat />, document.getElementById('class-js'));

function Cattoo() {
	return <h2>I am also a cat but as a funct. </h2>;
}

ReactDOM.render(<Cattoo />, document.getElementById('funct-js'));

//Using components from a class in the function
class CatCol extends React.Component {
	constructor() {
		super();
		this.state = {color: "orange"};
	}
	render() {
		return <h2>I am an {this.state.color} cat!</h2>;
	}
}

ReactDOM.render(<CatCol />, document.getElementById('cat-color'));

//props
class PropCat extends React.Component {
	render() {
		return <h2>I am a {this.props.color} Cat!</h2>;
	}
}

ReactDOM.render(<PropCat color="blonde" />, document.getElementById('prop-one'));


//Use components inside other components:
class Pet extends React.Component {
	render() {
		return(
			<div>
				<h1>What is this pet in my house?</h1>
				<CatCol />
			</div>
		);
	}
}

ReactDOM.render(<Pet />, document.getElementById('comp-in'));


//Using a different JS file
class Used extends React.Component {
	render() {
		return(
			<div>
				<p>I'm going to use another JS file now</p>
				<Sad />
			</div>
		)
	}
}

ReactDOM.render(<Used />, document.getElementById('comp-in'));


/*
	Let's use some props. They're kinda like a combo of function arguments and attributes in HTML
*/
class Smoll extends React.Component {
	render() {
		return <h2>I am a {this.props.size} cat!</h2>
	}
}

const mycat = <Smoll size="smoll" />;

ReactDOM.render(mycat, document.getElementById('prop-two'));


// State objects - The one you're used to
class Kitty extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			breed: "Norwegian Forest Cat",
			color: "Orange",
			age: 7
		};
	}
	render() {
		return (
			<div>
				<h1>My Cat</h1>
				<p>
					My cat is a {this.state.color} {this.state.breed} and is {this.state.age} years old.
				</p>				
			</div>
		);
	}
}
	

ReactDOM.render(<Kitty />, document.getElementById('cat-info'));


// Changing the state of an object
class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "red",
			age: 1
		};
	}
	
	changeColor = () => {
		this.setState({color: "blue"});
	}
	
	render() {
		return (
			<div>
				<p>This book is {this.state.color}</p>			
		
				<button 
				  type="button"
				  onClick={this.changeColor}
				>Change color</button>
			</div>
		);
	}
}

ReactDOM.render(<Book />, document.getElementById('color-change'));


// Changing component over time
class Favorite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {favoritecolor: "red"};
	}
	
	componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
		setTimeout(() => {
      this.setState({favoritecolor: "green"})
    }, 2000)
	setTimeout(() => {
      this.setState({favoritecolor: "blue"})
    }, 3000)
	setTimeout(() => {
      this.setState({favoritecolor: "purple"})
    }, 4000)
  }
	
	render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
	
}


ReactDOM.render(<Favorite />, document.getElementById('fav-col'));

// Forms
class MyForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('form'));


class AlsoMyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<AlsoMyForm />, document.getElementById('form-two'));



































