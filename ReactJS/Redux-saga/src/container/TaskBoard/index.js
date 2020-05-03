import { withStyles, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox/index';
import TaskList from '../../components/TaskList/index';
import { STATUS } from '../../constants';
import TaskForm from '../TaskForm/index';
import styles from './styles';

class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionsCreators } = this.props;
    const { fetchListTask } = taskActionsCreators;
    fetchListTask();
  }

  handleClose = () => {};

  onUpdateTask = (task) => {
    const { taskActionsCreators, modalActionsCreators } = this.props;
    const { setTaskEditing } = taskActionsCreators;
    setTaskEditing(task);
    const {
      showModal,
      changeModalContent,
      changeModalTitle,
    } = modalActionsCreators;
    showModal();
    changeModalTitle('Update Task');
    changeModalContent(<TaskForm />);
  };

  handleDeleteTask = (task) => {
    console.log(task);
    const { taskActionsCreators } = this.props;
    const { deleteTask } = taskActionsCreators;
    deleteTask(task.id);
  };

  showModalDeleteTask = (task) => {
    const { modalActionsCreators, classes } = this.props;
    const {
      showModal,
      changeModalContent,
      changeModalTitle,
      hideModal,
    } = modalActionsCreators;
    showModal();
    changeModalTitle('Delete Task');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Can you want delete task{' '}
          <span className={classes.modalTextBold}>{task.title}</span> ?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteTask(task)}
            >
              OK
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };

  renderBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const filterTask = listTask.filter((task) => {
            return task.status === status.value;
          });
          return (
            <TaskList
              key={status.value}
              status={status}
              tasks={filterTask}
              onUpdateTask={this.onUpdateTask}
              onDeleteTask={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  openForm = () => {
    const { modalActionsCreators, taskActionsCreators } = this.props;
    const {
      showModal,
      changeModalContent,
      changeModalTitle,
    } = modalActionsCreators;

    const { setTaskEditing } = taskActionsCreators;
    setTaskEditing(null);
    showModal();
    changeModalTitle('Add Task');
    changeModalContent(<TaskForm />);
  };

  loadData = () => {
    const { taskActionsCreators } = this.props;
    const { fetchListTask } = taskActionsCreators;
    fetchListTask();
  };

  hanldeFilter = (e) => {
    const { value } = e.target;
    const { taskActionsCreators } = this.props;
    const { filterTask } = taskActionsCreators;
    filterTask(value);
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.hanldeFilter} />;
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          onClick={this.openForm}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <AddIcon />
          Add New Job
        </Button>
        <Button
          onClick={this.loadData}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Load Data
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreators: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalActionsCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
