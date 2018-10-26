import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import IconButton from "@material-ui/core/IconButton";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(trigerevent, fromrole, torole) {
  id += 1;
  return { id, trigerevent, fromrole, torole};
}

const rows = [
  createData('Update Project', 'Dev', 'Scrum Master'),
  createData('Update Project', 'Dev', 'Product Owner'),
  createData('New Project', 'Dev', 'Scrum Master'),
];

function NotificationSetting(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Event</CustomTableCell>
            <CustomTableCell>
              From Role
            </CustomTableCell>
            <CustomTableCell>To Role </CustomTableCell>
            <CustomTableCell></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.trigerevent}
                </CustomTableCell>
                <CustomTableCell >
                  {row.fromrole}
                </CustomTableCell>
                <CustomTableCell >
                  {row.torole}
                </CustomTableCell>
                <CustomTableCell>
                  <IconButton
                    aria-label="Delete"
                    className={classes.button}>
                    <DeleteOutline fontSize="small" />
                  </IconButton>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

NotificationSetting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationSetting);
