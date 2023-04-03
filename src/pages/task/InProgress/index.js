import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Select } from "antd";
import Box from "@mui/material/Box";
import { useGetAllUsers } from "hooks/useGetAllUsers";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { selectStatusTasks } from "redux/store/reducers/tasks";

const InProgress = ({ inProgressTasks }) => {
  const status = useSelector(selectStatusTasks);
  const user = useGetAllUsers(status);
  const userId = user.users.map((u) => {
    const { firstName, _id } = u;
    return { firstName, _id };
  });
  console.log(inProgressTasks);
  const onChange = (value) => {
    // console.log(`selected ${value}`);
  };
  const handleChange = (e, userId, taskId) => {
    console.log(e);
    //gelen idlerle degisiklikleri update et
    //console.log(e, taskId, userId);
  };
  const statusOptions = [
    { label: "Not Started", value: "notStarted" },
    { label: "On Hold", value: "onHold" },
    { label: "In Progress", value: "inProgress" },
    { label: "Completed", value: "completed" },
  ];

  const options = [
    {
      value: "low",
      label: "Low",
    },
    {
      value: "normal",
      label: "Normal",
    },
    {
      value: "high",
      label: "High",
    },
  ];
  return (
    <div>
      {inProgressTasks.map((task) => {
        const lastUser = userId.find((user) => user._id === task.userId);
        return (
          <ListItem
            key={task.userId}
            sx={{ border: "1px solid red", alignItems: "flex-start", my: 2 }}
          >
            <ListItemAvatar>
              <Avatar
                alt={`${lastUser.firstName}`}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${task.taskName}`}
              secondary={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingX: 10,
                  }}
                >
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {lastUser.firstName}
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    sad
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {task.taskType}
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {dayjs(task.startDate).format("DD/MM/YY")}
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {dayjs(task.endDate).format("HH:mm")}
                  </Typography>
                </Box>
              }
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Select
                showSearch
                placeholder="Change Priority"
                optionFilterProp="children"
                onChange={(e) => handleChange(e, task.userId, task._id)}
                options={options}
                defaultValue={task.priority}
              />
              <Select
                showSearch
                placeholder="Status"
                optionFilterProp="children"
                onChange={onChange}
                options={statusOptions}
                defaultValue={task.status}
              />
            </Box>
          </ListItem>
        );
      })}
    </div>
  );
};

export default InProgress;
