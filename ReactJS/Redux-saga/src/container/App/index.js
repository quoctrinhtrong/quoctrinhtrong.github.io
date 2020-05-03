import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommonModal from '../../components/CommonModal/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import configureStore from '../../redux/configureStore';
import theme from '../commons/Theme/index';
import TaskBoard from '../TaskBoard/index';
import styles from './styles';

const store = configureStore();

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <CommonModal />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
