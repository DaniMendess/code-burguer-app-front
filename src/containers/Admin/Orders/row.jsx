/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import formatDate from '../../../utils/formatDate';
import { ProductsImg } from './style';

export function Row(row) {
  const [open, setOpen] = React.useState(false);

  const [products] = useState(row.row);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.row.orderId}
        </TableCell>
        <TableCell>{products.name}</TableCell>
        <TableCell>{formatDate(products.date)}</TableCell>
        <TableCell>{products.status}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>
                        <ProductsImg src={productRow.url} alt="imagen do produto" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     orderId: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     status: PropTypes.string.isRequired,
//     products: PropTypes.arrayOf(
//       PropTypes.shape({
//         quantity: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//   }).isRequired,
// };

export default Row;
