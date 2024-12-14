import { useState } from "react";
import styled from "styled-components";

function Title() {
  let year = "2024";
  let month = "12";

  return (
    <div className="py-10 border-2">
      {year}년 {month}월 Diary
    </div>
  );
}

function DitectButton() {
  return (
    <div className="columns-7 border-2">
      <div>왼</div>
      <div>오늘</div>
      <div>오</div>
    </div>
  );
}

function Calendar() {
  return (
    <>
      <div>
        <div className="columns-7">
          <div className="text-red-500">일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>

        <div className="columns-7">
          <div className="text-red-500">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>
    </>
  );
}

function DiaryUI() {
  return (
    <>
      <div className="columns-2">
        <Title />
        <DitectButton />
      </div>
      <Calendar />
    </>
  );
}

export default DiaryUI;
