import { Box, Grid, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';
import * as taskActions from '../../actions/task';
import renderSelectField from '../../components/FormHelper/Select';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActionsCreators, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionsCreators;
    const { title, description, status } = data;
    if (taskEditing) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };

  renderStatusSelection = () => {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    if (taskEditing) {
      xhtml = (
        <Grid item md={12}>
          <Field
            id="status"
            label="Status"
            className={classes.select}
            name="status"
            component={renderSelectField}
          >
            <MenuItem value={0}>Ready</MenuItem>
            <MenuItem value={1}>In Progress</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
          </Field>
        </Grid>
      );
    }
    return xhtml;
  };

  render() {
    const {
      classes,
      modalActionsCreators,
      handleSubmit,
      invalid,
      submitting,
      taskEditing,
    } = this.props;
    const { hideModal } = modalActionsCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Title"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Description"
              className={classes.textField}
              multiple
              rowsMax={4}
              margin="normal"
              component={renderTextField}
              name="description"
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button variant="contained" color="primary" onClick={hideModal}>
                Cancel
              </Button>
              <Box mr={1}>
                <Button
                  variant="contained"
                  color="primary"
                  mr={1}
                  type="submit"
                  disabled={invalid || submitting}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  modalActionsCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
  taskActionsCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskEditing: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing
        ? state.task.taskEditing.description
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
