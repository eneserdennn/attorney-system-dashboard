import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridCreater = ({ columns, dataSource }) => {
  console.log(dataSource);
  return (
    <DataGrid
      sx={{ height: 225, maxHeight: 350 }}
      columns={columns}
      rows={dataSource}
    />
  );
};

export default DataGridCreater;
