import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Main from './components/MainCalendar';
import MainCalendar from './components/MainCalendar';
import { useState } from 'react';
// import Test from './components/Test';

function App() {
  //<img src={reactLogo} className="logo" alt="React logo" />
  //<img src={viteLogo} className="logo" alt="Vite logo" />
  //<Test/>
  return (
    <>
      <div>
      <MainCalendar />
      <div className='pop'>
        <div className='top'>
        <h4 className='title'>이벤트 타이틀{useState.title}</h4>
        <div className='group'>
          <span></span>분류</div>
        </div>
        <p className='date'>2024.12.12</p>
        <div className='desc'>아팩 퇴사를 축하합니다~ 귀하의 앞날에 무궁한 영광이 어쩌구..</div>
        <div className='btns'>
          <button>수정</button>
          <button>지우기</button>
        </div>
      </div>
        
      </div>
    </>
  );
}

export default App;
