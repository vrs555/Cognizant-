import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            });

    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert(error);
    }

    render() {

        return (

            <div>

                <h1>Posts</h1>

                {
                    this.state.posts.map(post =>

                        <Post
                            key={post.id}
                            title={post.title}
                            body={post.body}
                        />

                    )
                }

            </div>

        );
    }

}

export default Posts;