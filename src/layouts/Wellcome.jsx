import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuAppBar from './MenuAppBar.jsx'
import wellcomeRoutes from '../routes/Wellcome.jsx'
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);
function Wellcome(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <SnackbarContent className={classes.snackbar} message="Wellcome to Bugkiller" action={action} />
        <SnackbarContent className={classes.snackbar} message="I love snacks." action={action} />
          <SnackbarContent
            className={classes.snackbar}
            message={
              'I love candy. I love cookies. I love cupcakes. \
              I love cheesecake. I love chocolate.'
            }
          />
      <SnackbarContent
          className={classes.snackbar}
          message={
            'I love candy. I love cookies. I love cupcakes. \
            I love cheesecake. I love chocolate.'
          }
        />
        <SnackbarContent
          className={classes.snackbar}
          message="I love candy. I love cookies. I love cupcakes."
          action={action}
        />
        <SnackbarContent
          className={classes.snackbar}
          message={
            'I love candy. I love cookies. I love cupcakes. \
            I love cheesecake. I love chocolate.'
          }
          action={action}
        />
        </main>
    </React.Fragment>

  );
}

Wellcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wellcome);
