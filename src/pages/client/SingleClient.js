import MainCard from "components/MainCard";
import { Form, Input } from "antd";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import useGetClient from "hooks/useGetClient";
import React, { useRef, useState } from "react";
import { Col, Row, Space, Progress } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs/";
import IconButton from "@mui/material/IconButton";
import DataGridCreater from "components/DgCreater/DataGridCreater";
import { Link } from "react-router-dom";
import { dataSource } from "./Consts/Consts";
const SingleClient = () => {
  const client = useGetClient(window.location.pathname);
  const [isEditing, setIsEditing] = useState(false);
  const percent = 99.9;
  const calendarRef = useRef(null);

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
    { field: "surname", headerName: "Surname", flex: 1 },
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
        />
      ),
    },
  ];
  return (
    <MainCard>
      <Form
        labelCol={{
          span: 8,
        }}
        layout="horizontal"
        disabled={!isEditing}
      >
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
              <IconButton
                color={isEditing ? "success" : "secondary"}
                onClick={() => setIsEditing((prev) => !prev)}
              >
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Space>
          </div>
        </MainCard>
        <div style={{ marginTop: "20px" }}>
          <Row gutter={16}>
            <Col span={12}>
              <MainCard title="Contact info">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Space>
                    <Form.Item
                      label="Email"
                      name="email"
                      initialValue={`${client.client.email}`}
                    >
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space>
                    <Form.Item
                      label="Phone"
                      name="phone"
                      initialValue={`${client.client.phone}`}
                    >
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space>
                    <Form.Item
                      label="City"
                      name="city"
                      initialValue={`${client.client.city}`}
                    >
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space>
                    <Form.Item
                      label="Address"
                      name="address"
                      initialValue={`${client.client.address}`}
                    >
                      <Input />
                    </Form.Item>
                  </Space>
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
                  <Space>
                    <FullCalendar
                      ref={calendarRef}
                      plugins={[dayGridPlugin, interactionPlugin]}
                      initialView="dayGridMonth"
                    />
                  </Space>
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
                  <Space>
                    <Form.Item
                      label="Currency"
                      name="currency"
                      initialValue={`${client.client.currency}`}
                    >
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space>
                    <Form.Item
                      label="Vat Rate"
                      name="vatRate"
                      initialValue="18%"
                    >
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space>
                    <Form.Item
                      label="Hour Rate"
                      name="hourRate"
                      initialValue="10"
                    >
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space style={{ width: "100%", display: "block" }}>
                    <Progress
                      percent={percent}
                      status={`${percent === 100 ? null : "active"}`}
                      style={{ height: "50px" }}
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
            <Col span={24}>
              <MainCard title="Folders">
                <DataGridCreater columns={columns} dataSource={dataSource} />
              </MainCard>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={24}>
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
          </Row>
        </div>
      </Form>
    </MainCard>
  );
};

export default SingleClient;
