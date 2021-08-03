import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableComp = ({ headings, rows }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headings.map((heading, index) => (
                            <TableCell key={index} align={`${index === 0 ? '' : 'right'}`}>{heading}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {row.map((element, inner_index) => (
                                <TableCell
                                    key={inner_index}
                                    component={`${inner_index === 0 ? 'th' : ''}`}
                                    scope={`${inner_index === 0 ? 'row' : ''}`}
                                    align={`${inner_index === 0 ? '' : 'right'}`}
                                >
                                    {element}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComp

TableComp.defaultProps = {
    headings: ['First Column', 'Second Column', 'Third Column', 'Fourth Column'],
    rows: [
        ['1x1', '1x2', '1x3', '1x4'],
        ['2x1', '2x2', '2x3', '2x4'],
        ['3x1', '3x2', '3x3', '3x4'],
    ]
}