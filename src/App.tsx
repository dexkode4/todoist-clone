import React from 'react';
import './App.css';
import { Content } from './Components/Layout/Content/Content';
import Header from './Components/Layout/Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

