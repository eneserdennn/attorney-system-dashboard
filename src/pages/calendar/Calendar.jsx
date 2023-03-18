import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import MainCard from "../../components/MainCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Modal } from "antd";
import AddEvent from "./AddEvent";
const handleChange = () => {};
const Calendar = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [confirmLoading, setConfirmLoading] = useState(false);
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.on("dateClick", handleDateClick);
    }
  }, []);

  function handleDateClick(info) {
    setSelectedDate(info.date);
    setOpen(true);
    console.log(info);
    console.log(selectedDate);
  }

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <MainCard title={"Calendar"}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="">deneme</div>
          </Grid>
          <Grid item xs={9}>
            <FullCalendar
              ref={calendarRef}
              select={(e) => console.log(e)}
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={[
                {
                  id: "1",
                  title: "Örnek etkinlik 1",
                  start: "2023-03-17T10:00:00",
                  display: false,
                  end: "2023-03-17T12:00:00",
                  backgroundColor: "#0277bd",
                  borderColor: "#01579b",
                  textColor: "#fff",
                  extendedProps: {
                    ananin: "ami",
                  },
                },
                {
                  id: "2",
                  title: "Örnek etkinlik 2",
                  start: "2023-03-18T14:30:00",
                  end: "2023-03-18T16:30:00",
                  backgroundColor: "#9c27b0",
                  borderColor: "#6a1b9a",
                  textColor: "#fff",
                },
              ]}
              eventClick={(e) => console.log(e.event.extendedProps)}
            />
          </Grid>
        </Grid>
      </Box>
      <Modal
        title="Add an Event"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <MainCard>
          <AddEvent />
        </MainCard>
      </Modal>
    </MainCard>
  );
};

export default Calendar;
