import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Select } from "antd";
import Box from "@mui/material/Box";
import { useGetAllUsers } from "hooks/useGetAllUsers";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusTasks, updateTasks } from "redux/store/reducers/tasks";
import { options, statusOptions } from "../Const/index";
import axios from "../../../../node_modules/axios/index";
const Completed = ({ completedTasks }) => {
  const status = useSelector(selectStatusTasks);
  const dispatch = useDispatch();
  const user = useGetAllUsers(status);
  const token = localStorage.getItem("token");
  const userId = user.users.map((u) => {
    const { firstName, _id } = u;
    return { firstName, _id };
  });
  const handleStatusChange = async (e, userId, _id) => {
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
    console.log(response);
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

  return (
    <div>
      {completedTasks.map((task) => {
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
                onChange={(e) => handlePriorityChange(e, task.userId, task._id)}
                options={options}
                defaultValue={task.priority}
              />
              <Select
                showSearch
                placeholder="Status"
                optionFilterProp="children"
                onChange={(e) => handleStatusChange(e, task.userId, task._id)}
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

export default Completed;
