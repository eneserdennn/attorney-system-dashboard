import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusTasks, updateTasks } from "redux/store/reducers/tasks";
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
import { useGetAllClients } from "hooks/useGetAllClients";
import { options, statusOptions } from "../Const/index";
import axios from "../../../../node_modules/axios/index";
import { useGetAllTasks } from "hooks/useGetAllTasks";
const NotStarted = ({ notStartedTasks }) => {
  const status = useSelector(selectStatusTasks);
  const dispatch = useDispatch();
  const user = useGetAllUsers(status);
  useGetAllClients("idle");
  useGetAllTasks(status);

  const userId = user.users.map((u) => {
    const { firstName, _id } = u;
    return { firstName, _id };
  });
  const token = localStorage.getItem("token");

  const handleStatusChange = async (e, _id, userId) => {
    const response = await axios.put(
      `http://localhost:8000/api/tasks/${userId}/${_id}`,
      {
        status: e,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      dispatch(updateTasks("idle"));
    }
  };

  const handlePriorityChange = async (e, _id, userId) => {
    const response = await axios.put(
      `http://localhost:8000/api/tasks/${userId}/${_id}`,
      {
        priority: e,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(updateTasks("idle"));
    }
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
  function getStatusColor(status) {
    switch (status) {
      case "high":
        return "red";
      case "low":
        return "green";
      default:
        return "gray";
    }
  }
  console.log(notStartedTasks);
  return (
    <List>
      {notStartedTasks.length > 0 &&
        notStartedTasks.map((task) => {
          const lastUser = userId.find((user) => user._id === task.userId);

          return (
            <ListItem
              sx={{
                border: `1px solid ${getStatusColor(task.priority)}`,
                alignItems: "flex-start",
                my: 2,
              }}
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
                  onChange={(e) =>
                    handlePriorityChange(e, task._id, task.userId)
                  }
                  onSearch={onSearch}
                  options={options}
                  defaultValue={task.priority}
                />
                <Select
                  showSearch
                  placeholder="Status"
                  optionFilterProp="children"
                  onChange={(e) => handleStatusChange(e, task._id, task.userId)}
                  onSearch={onSearch}
                  options={statusOptions}
                  defaultValue={task.status}
                />
              </Box>
            </ListItem>
          );
        })}
    </List>
  );
};

export default NotStarted;
