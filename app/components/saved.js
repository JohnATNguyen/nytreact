import React, { Component } from 'react';
import API from '../utils/API';
import Panel2 from './common/Panel2';

class Saved extends Component {
	constructor() {
		super();
		this.state = {
			saved: []
		}
		this.getSaved = this.getSaved.bind(this);
		this.renderSaved = this.renderSaved.bind(this);
	}
	componentDidMount() {
		this.getSaved();
	}
	getSaved() {
		API.getSaved().then((res) => {
			this.setState({ saved: res.data });
		});
	}
	renderSaved() {
		return this.state.saved.map(saved => (
			<Panel2
				saved={saved}
				id={saved._id}
				key={saved._id}
				getSaved={this.getSaved}
			/>
		));
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Saved Articles</h3>
				  	</div>
				  	<div className="panel-body">
				  		{this.renderSaved()}
				  	</div>
				</div>
			</div>
		);
	}
}

export default Saved;