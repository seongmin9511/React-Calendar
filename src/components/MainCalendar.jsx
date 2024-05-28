import React, { useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/ko'; // moment에 한국어 locale 추가.
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/MainCalendar.css";
import PopupModal from './PopupModal'; // 팝업 컴포넌트 임포트

moment.locale('ko') // moment와 함께 한국어 로케일 설정
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const MainCalendar = () => {
  const messages = {
    today: '오늘',
    previous: '〈',
    next: '〉',
    month: '월',
    week: '주',
    day: '일',
    agenda: '일정',
    allDay: '종일',
    date: '날짜',
    time: '시간',
    event: '이벤트'
  };

  const [events, setEvents] = useState([
    {
      title: '개같은 아팩... 미치겠음 ㅠ',
      allDay: true,
      start: moment('2024-05-20').toDate(),
      end: moment('2024-05-28').add(1, 'week').toDate()
    }
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  const moveEvent = useCallback(({ event, start, end }) => {
    const idx = events.findIndex(evt => evt === event);
    const updatedEvent = { ...event, start, end };
    const nextEvents = [...events];

    nextEvents.splice(idx, 1, updatedEvent);
    setEvents(nextEvents);
  }, [events]);

  const handleEventClick = (event, e) => {
    console.log('Clicked event:', event);

    setPopupData({
      title: event.title,
      category: '분류',
      start: moment(event.start).format('YYYY.MM.DD'),
      end: moment(event.end).format('YYYY.MM.DD'),
      description: '이벤트 설명',
      x: e.clientX,
      y: e.clientY - 110,
    });

    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="main-calendar">
      <DnDCalendar
        localizer={localizer}
        defaultDate={moment().toDate()}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        onEventDrop={moveEvent}
        style={{ height: "100vh" }}
        messages={messages}
        views={['month']}
        resizable
        selectable
        onSelectEvent={handleEventClick} // 이벤트 클릭 핸들러 연결
        events={events}
      />
      {showPopup && (
        <PopupModal
          title={popupData.title}
          category={popupData.category}
          start={popupData.start}
          end={popupData.end}
          description={popupData.description}
          onClose={closePopup}
          x={popupData.x}
          y={popupData.y}
        />
      )}
    </main>
  );
};

export default MainCalendar;
