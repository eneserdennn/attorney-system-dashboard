import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridCreater = ({ columns, dataSource }) => {
  return (
    <DataGrid getRowId={(row) => row._id} columns={columns} rows={dataSource} />
  );
};

export default DataGridCreater;
