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

const NotStarted = () => {
  const status = useSelector(selectStatusTasks);
  const tasks = useGetAllTasks(status);
  console.log(tasks);
  return (
    <List>
      {tasks.tasks.length > 0 &&
        tasks.tasks.map((task) => {
          return (
            <ListItem
              sx={{ border: "1px solid red", alignItems: "flex-start", my: 2 }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={`${task.userId.firstName}`}
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${task.taskName}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
    </List>
  );
};

export default NotStarted;
