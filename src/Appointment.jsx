import React from "react";
export default function Appointment(props) {
  return <div>{`${props.customer.firstName}`}</div>;
}

export const AppointmentDayView = ({ appointments }) => {
  const appointmentTimeOfDay = (startsAt) => {
    const [h, m] = new Date(startsAt).toTimeString().split(":");
    return `${h}:${m}`;
  };
  return (
    <div id="appointmentDayView">
      <ol>
        {appointments.map((appointment) => (
          <li key={appointment.startsAt}>{appointmentTimeOfDay(appointment.startsAt)}</li>
        ))}
      </ol>
    </div>
  );
};
