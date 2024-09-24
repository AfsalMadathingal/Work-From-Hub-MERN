import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import React, { useState } from "react";

export default function CalendarForBooking() {
  const now = today(getLocalTimeZone());
  const [selectedDate, setSelectedDate] = useState(now); // State to manage selected date

  // Define the range for available booking dates
  const minDate = now;
  const maxDate = now.add({ days: 10 });

  // Function to disable dates
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();

  const isDateUnavailable = (date) => {
    // Disable weekends
    if (isWeekend(date, locale)) return true;

    // Disable specific date ranges
    if (disabledRanges.some(
      (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    )) {
      return true;
    }

    // Disable past dates and dates beyond 10 days from today
    return date.compare(minDate) < 0 || date.compare(maxDate) > 0;
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <label className="block mb-2 font-medium">Select Date:</label>
      <Calendar
        aria-label="Date (Unavailable)"
        isDateUnavailable={isDateUnavailable}
        onChange={setSelectedDate} // Handle date selection
        value={selectedDate} // Set the current value
      />
    </div>
  );
}
