import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        // this.props.match.params.id;
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        return (
            <div>
                Posts show!
            </div>
        )
    }
}

function mapStateToProps({ posts }) {

}

export default (null, { fetchPost })(PostsShow);