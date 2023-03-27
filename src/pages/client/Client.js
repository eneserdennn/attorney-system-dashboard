import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "redux/store/reducers/clients";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { useGetAllClients } from "hooks/useGetAllClients";
import { DataGrid } from "@mui/x-data-grid";
import ModalPage from "components/Modal/index";
import { Button, Tooltip } from "antd";
import AddIcon from "@mui/icons-material/Add";
import {
  openModal,
  setModalRowInfo,
  setModalType,
} from "redux/store/reducers/modal";
import { EditFormProvider } from "context/EditFormContext";
import { Link } from "react-router-dom";
import MainCard from "components/MainCard";

const Client = () => {
  const status = useSelector(selectStatus);
  const { clients } = useGetAllClients(status);
  const dispatch = useDispatch();

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <Link to={`/clients/${params.row._id}`}>{params.row.name}</Link>
      ),
    },
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
            dispatch(setModalRowInfo(params.row));
            dispatch(setModalType("client"));
            dispatch(openModal());
          }}
        />
      ),
    },
  ];

  return (
    <MainCard>
      <EditFormProvider>
        <Link to="/add/clients">
          <div style={{ marginTop: 50, marginLeft: 10 }}>
            <Tooltip title="Add a Client">
              <Button type="primary" shape="circle" icon={<AddIcon />} />
            </Tooltip>
          </div>
        </Link>
        <Box height="75vh">
          <ModalPage />
          <DataGrid
            getRowId={(row) => row._id}
            columns={columns}
            rows={clients}
          />
        </Box>
      </EditFormProvider>
    </MainCard>
  );
};

export default Client;
