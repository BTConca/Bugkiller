import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateOutlined from '@material-ui/icons/UpdateOutlined';

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";
import NotificationSetting from "components/Table/NotificationSetting.jsx";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 200,
},
textFieldRole: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 200,
},
textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 150,
},
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginTop: theme.spacing.unit * 6,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 750,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  },
  button :{
    marginTop :theme.spacing.unit *3,
  },
  cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
});

class SettingNotification extends React.Component {
  state = {
    trigger: 'Update Project',
    role1: 'Dev',
    role2: 'Scrum Master'
  };

  handleChangeMul = des => event => {
      this.setState({
        [des]: event.target.value,
      });
    };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

render() {
   const { classes } = this.props;
   return (
     <main className={classes.layout}>
        <Card>
          <CardHeader color="rose">
            <h4 className={classes.cardTitleWhite}>Notifications Setting</h4>
          </CardHeader>
          <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <TextField
                          id="outlined-select-currency"
                          select
                          label="Event"
                          className={classes.textFieldRol}
                          value={this.state.trigger}
                          onChange={this.handleChangeMul('trigger')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          margin="normal"
                          variant="outlined"
                        >
                          {events.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Role"
                            className={classes.textField}
                            value={this.state.role1}
                            onChange={this.handleChangeMul('role1')}
                            SelectProps={{
                              MenuProps: {
                                className: classes.menu,
                              },
                            }}
                            helperText="Please select role triger event"
                            margin="normal"
                            variant="outlined"
                          >
                            {role1s.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>

                          <TextField
                              id="outlined-select-currency"
                              select
                              label="Role"
                              className={classes.textField}
                              value={this.state.role2}
                              onChange={this.handleChangeMul('role2')}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu,
                                },
                              }}
                              helperText="Please select role will receive notifications"
                              margin="normal"
                              variant="outlined"
                            >
                              {role2s.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <Button variant="outlined" size="medium" color="secondary" aria-label="Add" className={classes.button}>
                                <AddCircleOutline />
                          </Button>
                  </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <NotificationSetting />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Button variant="contained" color="secondary" className={classes.button}>
                                Update
                                <UpdateOutlined className={classes.rightIcon} />
                        </Button>
                    </GridItem>
                  </GridContainer>
          </CardBody>
        </Card>
   </main>
   )
 };
}

SettingNotification.propTypes = {
  classes: PropTypes.object.isRequired,
};

const events = [
  {

    value: 'Update Project',
    label: 'Update Project',
  },
  {

    value: 'Create Project',
    label: 'Create Project',
  },
  {
    value: 'Delete Project',
    label: 'Delete Project',
  },
];

const role1s = [
  {

    value: 'Dev',
    label: 'Dev',
  },
  {

    value: 'Scrum Master',
    label: 'Scrum Master',
  },
  {
    value: 'Product Owner',
    label: 'Product Owner',
  },
];

const role2s = [
  {

    value: 'Dev',
    label: 'Dev',
  },
  {

    value: 'Scrum Master',
    label: 'Scrum Master',
  },
  {
    value: 'Product Owner',
    label: 'Product Owner',
  },
];
export default withStyles(styles)(SettingNotification);
