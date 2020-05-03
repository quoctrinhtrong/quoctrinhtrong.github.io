import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskItem extends Component {
  onUpdateTask = () => {
    const { onUpdateTask } = this.props;
    onUpdateTask();
  };

  render() {
    const { classes, task, status, onDeleteTask } = this.props;
    const { title, description } = task;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <div>{description}</div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" />
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={this.onUpdateTask}
          >
            <Icon>edit_icon</Icon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={onDeleteTask}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onUpdateTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
