import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import MainCard from "../../components/MainCard";

const handleChange = () => {
};
const Calendar = () => {
    return (
        <MainCard title={"Calendar"}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
            />
        </MainCard>
    );
};

export default Calendar;
