import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridCreater = ({ columns, clients }) => {
  return (
    <DataGrid getRowId={(row) => row._id} columns={columns} rows={clients} />
  );
};

export default DataGridCreater;
