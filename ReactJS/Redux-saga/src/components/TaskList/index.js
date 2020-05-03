import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import TaskItem from '../TaskItem/index';
import PropTypes from 'prop-types';

class TaskList extends Component {
  render() {
    const { classes, status, tasks, onUpdateTask, onDeleteTask } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mb={1} mt={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wapperListTask}>
          {tasks.map((task, index) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                status={status}
                onUpdateTask={() => onUpdateTask(task)}
                onDeleteTask={() => onDeleteTask(task)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  onUpdateTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

export default withStyles(styles)(TaskList);
