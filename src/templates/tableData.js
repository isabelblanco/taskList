import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

class CustomizedTables extends React.Component {
  render() {
    const {rows} = this.props;
    return(
      <Paper>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Owner</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              <StyledTableCell align="center">Start</StyledTableCell>
              <StyledTableCell align="center">End</StyledTableCell>
              <StyledTableCell align="center">Details</StyledTableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.key}>
                  <StyledTableCell component="th" scope="row">
                    {row.owner}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.kind}</StyledTableCell>
                  <StyledTableCell align="center">{row.due}</StyledTableCell>
                  <StyledTableCell align="center">{row.due}</StyledTableCell>
                  <StyledTableCell align="center">{row.details}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default CustomizedTables;