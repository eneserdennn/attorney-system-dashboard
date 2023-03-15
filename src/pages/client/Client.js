import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "redux/store/reducers/clients";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { useGetAllClients } from "hooks/useGetAllClients";
import DataGridCreater from "components/DgCreater/DataGridCreater";
import ModalPage from "components/Modal/index";
import { openModal } from "redux/store/reducers/modal";

const Client = () => {
  const status = useSelector(selectStatus);
  const { clients } = useGetAllClients(status);
  const dispatch = useDispatch();
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
            dispatch(openModal());
            console.log(params.row);
          }}
        />
      ),
    },
  ];
  return (
    <Box height="75vh">
      <ModalPage />
      <DataGridCreater columns={columns} clients={clients} />
    </Box>
  );
};

export default Client;
