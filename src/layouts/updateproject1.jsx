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
      width: 400,
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
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
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
       <Paper className={classes.paper}>
         <div className={classes.container}>
           <CssBaseline />
           <FormControl className={classes.formControl} variant="outlined">
             <InputLabel
               ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="component-outlined"
            >
            Name
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={this.state.name}
            onChange={this.handleChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
           />
        </FormControl>
        <FormControl
          className={classes.formControl}
          variant="outlined">

          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChangeMul('multiline')}
            className={classes.textField}
            margin="normal"
            helperText="Viết những thay đổi đã xảy ra"
            variant="outlined"
            />

        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel
            ref={ref => {
           this.labelRef = ReactDOM.findDOMNode(ref);
         }}
         htmlFor="component-outlined"
         >
         Name
       </InputLabel>
       <OutlinedInput
         id="component-outlined"
         value={this.state.name}
         onChange={this.handleChange}
         labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
        />
     </FormControl>
     <FormControl className={classes.formControl} variant="outlined">
     <TextField
         id="outlined-select-currency"
         select
         label="Select"
         className={classes.textField}
         value={this.state.role}
         onChange={this.handleChangeMul('role')}
         SelectProps={{
           MenuProps: {
             className: classes.menu,
           },
         }}
         helperText="Please select your currency"
         margin="normal"
         variant="outlined"
       >
         {roles.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       <Button variant="outlined" size="small" color="primary" aria-label="Add" className={classes.button}>
  <AddIcon />
</Button>
       </FormControl>
       <FormControl className={classes.formControl} variant="outlined">
        <Paper className={classes.paper}>
          <TextField
              id="outlined-select-currency"
              select
              label="Select"
              className={classes.button}
              value={this.state.role}
              onChange={this.handleChangeMul('role')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
              variant="outlined"
            >
              {roles.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <IconButton className={classes.button} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                className={classes.button}
                value={this.state.role}
                onChange={this.handleChangeMul('role')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
                variant="outlined"
              >
                {roles.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <IconButton className={classes.button} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  className={classes.button}
                  value={this.state.role}
                  onChange={this.handleChangeMul('role')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                >
                  {roles.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <IconButton className={classes.button} aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
        </Paper>
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <Button variant="contained" color="secondary" className={classes.button}>
                Update
                <UpdateOutlined className={classes.rightIcon} />
        </Button>
      </FormControl>
     {/*}<TextField
       id="outlined-multiline-flexible"
       label="Multiline"
       multiline
       rowsMax="4"
       value={this.state.multiline}
       onChange={this.handleChange('multiline')}
       className={classes.textField}
       margin="normal"
       helperText="hello"
       variant="outlined"
       />*/}
      </div>
    </Paper>
   </main>
   )
 };
}

UpdateProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateProject);
