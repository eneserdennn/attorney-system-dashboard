import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import clients, {
  selectAllClients,
  selectStatus,
} from "redux/store/reducers/clients";
import { DataGrid } from "@mui/x-data-grid";
import { dispatch } from "redux/store/index";
import { fetchClients } from "redux/store/reducers/fetchClients";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
const Client = () => {
  const status = useSelector(selectStatus);
  const clients = useSelector(selectAllClients);
  console.log(clients);
  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchClients());
    }
  }, [status]);

  const columns = [
    { field: "_id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "surname", headerName: "Surname" },
    { field: "email", headerName: "E Mail", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    {
      field: "actions",
      headerName: "Edit/Delete",
      type: "actions",
      flex: 1,
      renderCell: (params) => (
        <EditIcon
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            console.log(params);
          }}
        />
      ),
    },
  ];
  return (
    <Box height="75vh">
      <DataGrid getRowId={(row) => row._id} columns={columns} rows={clients} />
    </Box>
  );
};

export default Client;
