import React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

export type ButtonsProps = {
  on_click?: (index: number) => void;
};

export default function Buttons(props: ButtonsProps) {
  const { on_click } = props;

  const clickHandler = async (index: number) => {
    if (on_click) {
      on_click(index);
    }
  };

  const rows = Array(3).fill(0);
  const buttons = Array(5).fill(0);

  return (
    <Box>
      <TableContainer>
        <Table size="small">
          <TableBody>
            {rows.map((_, i1) => (
              <TableRow
                key={i1}
                sx={{
                  "td, th": { border: 0 },
                }}
              >
                {buttons.map((_, i2) => (
                  <TableCell key={`${i1}-${i2}`} align="center" sx={{ p: 1 }}>
                    <Button
                      sx={{ minWidth: 35 }}
                      size="small"
                      variant="contained"

                      // onClick={() => clickHandler(i1 * 5 + i2)}
                    >
                      {i1 * 5 + i2 + 1}
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
