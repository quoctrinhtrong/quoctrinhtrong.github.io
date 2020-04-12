import React, { Component } from 'react';
import Message from '../components/Message';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class MessageContainer extends Component {
    render() {
        let {message} = this.props;
        return (
            <Message message={message}/>
        );
    }
}

// Check type in prop
// https://reactjs.org/docs/typechecking-with-proptypes.html
MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
    };
};

const mapDispatchToProps = (dispatch, action) => {
    return {

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer);
