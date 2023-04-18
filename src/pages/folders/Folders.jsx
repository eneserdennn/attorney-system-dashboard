import React, { useState } from "react";
import MainCard from "../../components/MainCard";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Tabs, Button, Tooltip } from "antd";
import { useGetAllFolders } from "hooks/useGetAllFolders";
import AddIcon from "@mui/icons-material/Add";

const Folders = () => {
  const { folders } = useGetAllFolders("idle");
  const [active, setActive] = useState(false);
  console.log(folders);
  const operations = <Button onClick={() => setActive(false)}>Close</Button>;
  const columns = [
    { field: "_id", headerName: "Id", flex: 1 },
    {
      field: "folderName",
      headerName: "Folder Name",
      flex: 1,
    },

    { field: "userId", headerName: "User", flex: 1 },
    { field: "clientId", headerName: "Client", flex: 1 },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Documents`,
      children: "Document List",
    },
    {
      key: "2",
      label: `Client`,
      children: "Client Table",
    },
    {
      key: "3",
      label: `User`,
      children: "User",
    },
    {
      key: "4",
      label: `E-mail`,
      children: "mails",
    },
  ];
  return (
    <MainCard title={"Folders"}>
      <Grid container spacing={2}>
        <Grid item xs={active ? 8 : 12}>
          <MainCard>
            <Box height="75vh">
              <Link to="/add/folders">
                <Tooltip title="Add a Folder">
                  <Button type="primary" shape="circle" icon={<AddIcon />} />
                </Tooltip>
              </Link>
              <DataGrid
                getRowId={(row) => row._id}
                columns={columns}
                rows={folders}
                onRowClick={() => setActive(true)}
              />
            </Box>
          </MainCard>
        </Grid>
        {active ? (
          <Grid item xs={4}>
            <MainCard>
              <Tabs
                tabBarExtraContent={operations}
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
              />
            </MainCard>
          </Grid>
        ) : null}
      </Grid>
    </MainCard>
  );
};

export default Folders;
