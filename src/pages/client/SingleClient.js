import MainCard from "components/MainCard";
import useGetClient from "hooks/useGetClient";
import React, { useEffect } from "react";
import { Col, Row, Space } from "antd";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
const SingleClient = () => {
  const { client } = useGetClient(window.location.pathname);
  console.log(client);
  return (
    <MainCard>
      <MainCard>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Space>
            <h2>
              {client.name} {client.surname}
            </h2>
          </Space>
          <Space>
            <CreateIcon />
            <DeleteIcon />
          </Space>
        </div>
      </MainCard>
    </MainCard>
  );
};

export default SingleClient;
