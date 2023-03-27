import DataGridCreater from "components/DgCreater/DataGridCreater";
import React, { useEffect, useState } from "react";
import MainCard from "../../components/MainCard";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";
const Folders = () => {
  const [folder, setFolder] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setFolder(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(folder);
  const columns = [
    { field: "id", headerName: "Id" },
    { field: "name", headerName: "Name" },
    { field: "username", headerName: "Username" },
    { field: "currency", headerName: "currency" },
  ];
  return (
    <MainCard title={"Folders"}>
      <DataGrid columns={columns} rows={folder} />
    </MainCard>
  );
};

export default Folders;
