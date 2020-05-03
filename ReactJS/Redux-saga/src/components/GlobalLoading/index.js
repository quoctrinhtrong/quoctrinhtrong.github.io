import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import LoadingIcon from '../../assets/images/loading2.gif';
import PropTypes from 'prop-types';
import * as uiActions from '../../actions/ui';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img
            className={classes.loadingIcon}
            src={LoadingIcon}
            alt="Loading"
          />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(GlobalLoading);
