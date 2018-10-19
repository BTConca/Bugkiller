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
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateOutlined from '@material-ui/icons/UpdateOutlined';

// @material-ui/core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import Table from "components/Table/Table.jsx";

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
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 750,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
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

const roles = [
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


class UpdateProject extends React.Component {
  state = {
    name: 'Some thing here ...',
    multiline: 'Controlled',
    des : 'Nothing here...',
    role: 'Dev',
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
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Update Project</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <CustomInput
                    labelText="Your Project Name"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false
                    }}
                  />
            </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Description"
                      multiline
                      rowsMax="10"
                      value={this.state.des}
                      onChange={this.handleChangeMul('des')}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      fullWidth = "true"
                      />
                  </GridItem>
                </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Role"
                            className={classes.textField}
                            value={this.state.role}
                            onChange={this.handleChangeMul('role')}
                            SelectProps={{
                              MenuProps: {
                                className: classes.menu,
                              },
                            }}
                            helperText="Please select your role"
                            margin="normal"
                            variant="outlined"
                          >
                            {roles.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                  </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Table />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <IconButton className={classes.button} aria-label="Delete">
                        <Button variant="contained" color="secondary" className={classes.button}>
                                Update
                                <UpdateOutlined className={classes.rightIcon} />
                        </Button>
                      </IconButton>
                    </GridItem>
                  </GridContainer>
          </CardBody>
        </Card>
   </main>
   )
 };
}

UpdateProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateProject);
