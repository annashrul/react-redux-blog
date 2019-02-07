import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom'
import gambar from '../background.png';
import {connect} from 'react-redux';
class Home extends Component{
	// state = {
	// 	posts : []
	// };
	// componentDidMount(){
	// 	axios.get("https://jsonplaceholder.typicode.com/posts")
	// 	.then(res=>{
	// 		this.setState({
	// 			posts:res.data.slice(0,10)
	// 		})
	// 	})
	// }
	
	render(){
		const {posts} = this.props;
		const postList= posts.length ? (
			posts.map(post => {
				return(
					<div className="post card" key={post.id}>
						<Link to={"/"+post.id}>
							<img src={gambar} alt=""/>
							<div className="card-content">
								<span className="card-title">{post.title}</span>
								<p>{post.body}</p>
								<span className="read-more">Read More</span>
							</div>
						</Link>
					
					</div>
				)
			})
			
		) : (
			<div className="center">Tidak Ada Data</div>
		);
		return(
			<div className="home container">
				<h4 className="center">Home</h4>
				<div className="row">
					{postList}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts : state.posts
	}
};

export default connect(mapStateToProps) (Home);