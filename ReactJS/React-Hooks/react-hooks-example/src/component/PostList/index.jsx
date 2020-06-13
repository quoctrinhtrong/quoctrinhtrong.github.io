import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    post: PropTypes.array,
};

PostList.defaultProps = {
    post: [],
};

function PostList(props) {
    const {post} =  props;

    return (
        <ul className="post-list">
            {post.map(post => {
                return (<li key={post.id}>{post.title}</li>);
            })}
        </ul>
    );
}

export default PostList;