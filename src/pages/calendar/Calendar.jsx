import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import MainCard from "../../components/MainCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Modal, Collapse } from "antd";
import AddEvent from "./AddEvent";
import { useSelector } from "react-redux";
import {
  selectClientsEvents,
  selectStatus,
} from "redux/store/reducers/clients";
import { useGetEvents } from "hooks/useGetEvents";
const Calendar = () => {
  const { Panel } = Collapse;
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [setModalText] = useState("Content of the modal");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [eventDisplay, setEventDisplay] = useState({});
  const status = useSelector(selectStatus);
  useGetEvents(status);
  const dnm = useSelector(selectClientsEvents);
  const final = dnm.flat();
  const modifiedArray = final.map((obj) => {
    return {
      ...obj,
      start: obj.startDate,
      end: obj.endDate,
    };
  });

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.on("dateClick", handleDateClick);
    }
  }, []);

  function handleDateClick(info) {
    setSelectedDate(info.dateStr);
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

  const handleCheckboxChange = (event) => {
    const eventId = event.target.id;
    const newDisplay = event.target.checked ? "block" : "none";
    setEventDisplay((prevDisplay) => ({
      ...prevDisplay,
      [eventId]: newDisplay,
    }));
  };

  const getEventDisplay = (eventId) => {
    return eventDisplay[eventId] || "block";
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
            {modifiedArray.map((event) => {
              return (
                <>
                  <Collapse
                    defaultKey={event.id}
                    key={event.id}
                    size="small"
                    style={{ margin: "10px 0" }}
                  >
                    <Panel key={event.id} header={event.title}>
                      <label>
                        <h4>{event.title}</h4>
                        <input
                          type="checkbox"
                          id={event.id}
                          onChange={handleCheckboxChange}
                          checked={getEventDisplay(`${event.id}`) === "block"}
                        />
                      </label>
                    </Panel>
                  </Collapse>
                </>
              );
            })}
          </Grid>
          <Grid item xs={9}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={modifiedArray}
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
          <AddEvent selectedDate={selectedDate} />
        </MainCard>
      </Modal>
    </MainCard>
  );
};

export default Calendar;
