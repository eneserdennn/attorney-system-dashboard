import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import MainCard from "../../components/MainCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Modal } from "antd";
import AddEvent from "./AddEvent";
const Calendar = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [setModalText] = useState("Content of the modal");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [eventDisplay, setEventDisplay] = useState({});
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.on("dateClick", handleDateClick);
    }
  }, []);

  function handleDateClick(info) {
    setSelectedDate(info.date);
    setOpen(true);
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
  const events = [
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
        associatedTo: "sdsd",
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
      editable: true,
      extendedProps: {
        associatedTo: "sdjsdj",
      },
    },
  ];

  const handleCheckboxChange = (event) => {
    const eventId = event.target.id;
    const newDisplay = event.target.checked ? "block" : "none";
    setEventDisplay((prevDisplay) => ({
      ...prevDisplay,
      [eventId]: newDisplay,
    }));
  };

  const getEventDisplay = (eventId) => {
    return eventDisplay[eventId] || "auto";
  };

  const eventContent = (eventInfo) => {
    const eventId = eventInfo.event.id;
    return (
      <div style={{ display: getEventDisplay(eventId) }}>
        {eventInfo.timeText} - {eventInfo.event.title}
      </div>
    );
  };

  const eventDidMount = (eventInfo) => {
    const eventId = eventInfo.event.id;
    eventInfo.el.style.display = getEventDisplay(eventId);
  };
  return (
    <MainCard title={"Calendar"}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {events.map((event) => {
              return (
                <>
                  <div key={event.id}>
                    <label>
                      {event.title}
                      <input
                        type="checkbox"
                        id={event.id}
                        onChange={handleCheckboxChange}
                        checked={getEventDisplay(`${event.id}`) === "block"}
                      />
                    </label>
                  </div>
                </>
              );
            })}
          </Grid>
          <Grid item xs={9}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventContent={eventContent}
              eventDidMount={eventDidMount}
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
