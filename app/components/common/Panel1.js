import React, { Component } from "react";
import API from "../../utils/API";

class Panel1 extends Component {
	constructor() {
		super();
		this.saveArticle = this.saveArticle.bind(this);
	}
	saveArticle() {
		API.saveArticle(this.props.article.headline.main, this.props.article.web_url).then((res) => {
			console.log(res);
		});
	}
	render() {
		return (
			<div className="panel panel-default">
	  			<div className="panel-body">
	    			<h4 id="resultListing">
	    				<a href={this.props.article.web_url} target="_blank">{this.props.article.headline.main}</a>
		    			<button
		    				id="saveButton"
		    				className="btn btn-primary"
		    				onClick={this.saveArticle}
		    			>
		    				Save
		    			</button>
	    			</h4>
	  			</div>
			</div>
		);
	}
}

export default Panel1;