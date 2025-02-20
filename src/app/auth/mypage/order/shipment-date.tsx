'use client'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isBefore, isAfter, getDay } from "date-fns";

const disabledDates = [new Date(2025, 1, 20), new Date(2025, 1, 22)]; // 출고 불가일
const allowedWeekdays = [1, 2, 3, 4]; // 월(1) ~ 목(4) 출고 가능
const today = new Date();
const maxDate = addDays(today, 14); // 2주 이내만 선택 가능

const isDateSelectable = (date: Date) => {
  return (
    !disabledDates.some((d) => d.toDateString() === date.toDateString()) &&
    allowedWeekdays.includes(getDay(date)) &&
    isBefore(date, maxDate) &&
    isAfter(date, today)
  );
};

const ShipmentDatePicker = ({ date, setDate }: { date: Date | null, setDate: React.Dispatch<React.SetStateAction<Date | null>> }) => {
  return (
    <div className="w-72">
      <h2 className="">출고일 선택</h2>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        filterDate={isDateSelectable}
        minDate={today}
        maxDate={maxDate}
        dateFormat="yyyy-MM-dd"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default ShipmentDatePicker;
