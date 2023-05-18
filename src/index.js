import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';
import Comment from './chapter_05/Comment';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Notification from './chapter_06/Notification';
import useCounter from './chapter_07/useCounter';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import Toolbar from './chapter_09/Toolbar';
import LandingPage from './chapter_09/LandingPage';
import Calculator from './chapter_12/Calculator';
import Card from './chapter_14/Card';
import ProfileCard from './chapter_14/ProfileCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
