import { useGetAllTasks } from "hooks/useGetAllTasks";
import React from "react";
import { useSelector } from "react-redux";
import { selectStatusTasks } from "redux/store/reducers/tasks";
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
import { selectOptions } from "redux/store/reducers/clients";
import { useGetAllClients } from "hooks/useGetAllClients";
const NotStarted = ({ notStartedTasks }) => {
  console.log(notStartedTasks);
  const status = useSelector(selectStatusTasks);
  const user = useGetAllUsers(status);
  const tasks = useGetAllTasks(status);
  useGetAllClients("idle");
  const clients = useSelector(selectOptions);
  const userId = user.users.map((u) => {
    const { firstName, _id } = u;
    return { firstName, _id };
  });

  const onChange = (value) => {
    // console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
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
    <List>
      {notStartedTasks.length > 0 &&
        notStartedTasks.map((task) => {
          const lastUser = userId.find((user) => user._id === task.userId);

          return (
            <ListItem
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
                  onChange={onChange}
                  onSearch={onSearch}
                  options={options}
                  defaultValue={task.priority}
                />
                <Select
                  showSearch
                  placeholder="Status"
                  optionFilterProp="children"
                  onChange={onChange}
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
