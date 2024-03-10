import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import '../css/Main.css';
const Main = () => {
  const container = document.getElementById('calendar');
  const options = {
    defaultView: 'month',
    timezone: {
      zones: [
        {
          timezoneName: 'Asia/Seoul',
          displayLabel: 'Seoul',
        },
        {
          timezoneName: 'Europe/London',
          displayLabel: 'London',
        },
      ],
    },
    calendars: [
      {
        id: 'cal1',
        name: '개인',
        backgroundColor: '#03bd9e',
      },
      {
        id: 'cal2',
        name: '직장',
        backgroundColor: '#00a9ff',
      },
    ],
  };
  const calendar = new Calendar(container, options);

  return (
    <>
      <div id="calendar"></div>
    </>
  );
};

export default Main;
