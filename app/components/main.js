import React, {Component} from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import Saved from '../components/Saved';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			topic: '',
			startYear: '',
			endYear: ''
		}
		this.setParent=this.setParent.bind(this);
	}
	setParent(topic, startYear, endYear) {
		this.setState({
			topic: topic,
			startYear: startYear,
			endYear: endYear
		});
	}
	render() {
		return (
			<div className="container-fluid">
				<Search setParent={this.setParent}/>
				<Results />
				<Saved />
			</div>
		);
	}
}

export default Main;