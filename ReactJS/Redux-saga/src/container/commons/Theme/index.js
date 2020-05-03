import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#03A9F4',
    error: '#E64A19',
    textColor: '#FFFFFF',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#E64A19',
    textColor: '#FFFFFF',
    borderColor: '#cccccc',
  },
});

export default theme;
