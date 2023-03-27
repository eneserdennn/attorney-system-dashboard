import MainCard from "components/MainCard";
import useGetClient from "hooks/useGetClient";
import React, { useEffect } from "react";
import { Col, Row, Space, Grid } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs/";

const SingleClient = () => {
  const client = useGetClient(window.location.pathname);

  return (
    <MainCard>
      <MainCard>
        <div
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
            <DeleteIcon />
          </Space>
        </div>
      </MainCard>
      <div style={{ marginTop: "20px" }}>
        <Row gutter={16}>
          <Col span={18}>
            <MainCard title="Contact info">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Space>email: {client.email}</Space>
                <Space>phone: {client.phone}</Space>
                <Space>city: {client.city}</Space>
                <Space>address: {client.address}</Space>
              </div>
            </MainCard>
          </Col>
          <Col span={6}>
            <MainCard title="Payment Info">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Space>Currency: {client.currency}</Space>
                <Space>Vat Rate: </Space>
                <Space>Hour Rate:</Space>
              </div>
            </MainCard>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={6}>
            <MainCard title="Events">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Space>{client.events}</Space>
              </div>
            </MainCard>
          </Col>
          <Col span={6}>
            <MainCard title="Calender">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Space>Calender: </Space>
              </div>
            </MainCard>
          </Col>
          <Col span={6}>
            <MainCard title="Folders">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Space>Folders: {client.folders}</Space>
                {client.isOrganization === false ? null : (
                  <Space>Organization: {client.organization}</Space>
                )}
                <Space>
                  Created At: {dayjs(client.createdAt).format("DD-MM-YYYY")}
                </Space>
                <Space>Quality: {client.quality}</Space>
              </div>
            </MainCard>
          </Col>
        </Row>
      </div>
    </MainCard>
  );
};

export default SingleClient;
