import MainCard from "components/MainCard";
import useGetClient from "hooks/useGetClient";
import React from "react";
import { Col, Row, Space, Progress } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs/";
import IconButton from "@mui/material/IconButton";

const SingleClient = () => {
  const client = useGetClient(window.location.pathname);
  const percent = 99.9;

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
              {client.client.name} {client.client.surname}
            </h2>
          </Space>
          <Space>
            <EditIcon />
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
                <Space>email: {client.client.email}</Space>
                <Space>phone: {client.client.phone}</Space>
                <Space>city: {client.client.city}</Space>
                <Space>address: {client.client.address}</Space>
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
                <Space>Currency: {client.client.currency}</Space>
                <Space>Vat Rate: </Space>
                <Space>Hour Rate:</Space>
                <Space style={{ width: "100%", display: "block" }}>
                  <Progress
                    percent={percent}
                    status={`${percent === 100 ? null : "active"}`}
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                  />
                </Space>
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
