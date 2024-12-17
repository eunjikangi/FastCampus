import { useState } from "react";
import styled from "styled-components";
import { buildCalendarData } from "./buildCalendarData";
import "../src/Calendar.css";

function Header() {
  return (
    <>
      <div className="headerUI">
        <Title />
        <DitectButton />
      </div>
    </>
  );
}

function Title() {
  let year = "2024";
  let month = "12";

  return (
    <div className="titlebar">
      {year}년 {month}월 Diary
    </div>
  );
}

function DitectButton() {
  return (
    <div className="nav">
      <div className="nav-item">왼</div>
      <div className="nav-item">오늘</div>
      <div className="nav-item">오</div>
    </div>
  );
}

function Calendar() {
  const calendarDataArr = buildCalendarData("2024", "12");
  let weeks = [["일", "월", "화", "수", "목", "금", "토"]];

  calendarDataArr.map((arr) => {
    weeks.push(arr);
  });

  return (
    <>
      <div className="card-container">
        {weeks.map((week) => (
          <div className="day-group">
            {week.map((day, index) => {
              if (day == "0") return <div></div>;
              if (index === 0) {
                return (
                  <div key={day} className="day-cell">
                    {day}
                  </div>
                );
              }
              return (
                <div key={day} className="day-cell">
                  {day}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function InspireSentence() {
  let sentence = "내면의 목소리를 듣고 싶다면, 일기를 쓰기 시작하라. - 웅디캉";

  return (
    <div className="maxims">
      <div>{sentence}</div>
    </div>
  );
}

function DiaryUI() {
  return (
    <>
      <div>
        <Header />
        <Calendar />
        <InspireSentence />
      </div>
    </>
  );
}

export default DiaryUI;
