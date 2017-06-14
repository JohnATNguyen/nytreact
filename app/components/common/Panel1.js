import React, { Component } from "react";
import API from "../../utils/API";

class Panel1 extends Component {
	favoriteArticle(article) {
		API.favoriteArticle(article)
	}
}