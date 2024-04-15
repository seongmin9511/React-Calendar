import React, { useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/ko'; // moment에 한국어 locale 추가.
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/MainCalendar.css";

moment.locale('ko')// moment와 함께 한국어 로케일 설정
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

// 컴퍼넌트 생성 {S} ======================
const MainCalendar = () => {
  // 옵션 값 정리
  const messages = {
    today : '오늘'
    , previous : '<'
    , next : '>'
    , month : '월'
    , week : '주'
    , day : '일'
    , agenda : '일정'
    , allDay : '종일'
    , date : '날짜'
    , time : '시간'
    , event : '이벤트'
  }

  // 달력 바인딩할 데이터
  const [events, setEvents] = useState([
    {
      title : '아팩 퇴사 정리 기간'
      , allDay : true
      , start : moment( '2024-04-20' ).toDate()
      , end : moment( '2024-04-20' ).add(1, 'week').toDate()
    }
  ])

  // 데이터 일자 이동 시킬 때 이벤트
  const moveEvent = useCallback( ({event, start, end}) => {
    const idx = events.findIndex( evt => evt === event )
    const updateEvent = { ...event, start, end }
    const nextEvents = [...events]

    nextEvents.splice( idx, 1, updateEvent )
    setEvents(nextEvents)
  }, [events])

  /**
   * React-big-calendar 간단 정리
   * DnDCalendar = drag and drop 기능을 지원하는 확장 컴퍼넌트
   * defaultDate = 달력이 처음 로드될 때 표시될 날짜를 설정. 
   *  ㄴ 현 코드에서는 moment().toDate()로 현재날짜로 설정
   * defaultView = 달력이 처음 로드될 때 보여줄 뷰의 종류. "week", "month" 등 다양하게 있음. 
   *  ㄴ 달력형으로 개발 진행할거라 "month" 설정
   * startAccessor, endAccessor = 이벤트의 시작과 끝을 결정하는 필드 이름 지정. 
   *  ㄴ 현 코드에서는 시작은 "start", 끝은 "end"로 지정
   * localizer = 날짜와 시간을 형식화하기 위해 사용.
   *  ㄴ import moment from "moment"; import 'moment/locale/ko';를 토대로 한국 기준의 날짜와 시간 정보로 형식화.
   * resizable = 이벤트의 시작 또는 끝을 드래그하여 크기 조절 가능 여부
   *  ㄴ true로 설정하면 사용, false로 설정하면 사용하지 않는 걸로 설정.
   * style = 컴포넌트의 스타일을 지정. 
   * events = 달력에 표시될 이벤트 목록이라고 하는데 쉽게 생각하면 달력에 바인딩 될 데이터라고 생각하면 될 듯.
   *  ㄴ title = 바인딩 되는 데이터의 제목
   *  ㄴ allday = 종일인지 아닌지에 대한 여부
   *  ㄴ start = 시작일
   *  ㄴ end = 종료일
   */
  return (
    <main className="main-calendar">
      <DnDCalendar
        localizer={localizer}
        defaultDate={moment().toDate()}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        onEventDrop={ moveEvent }
        style={{ height: "100vh" }}
        messages={ messages }
        views={ ['month'] }
        resizable
        selectable
        events={ events }
      />
    </main>
  );
}
// 컴퍼넌트 생성 {E} ======================

export default MainCalendar;