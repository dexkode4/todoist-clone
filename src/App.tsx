import React from 'react';
import { Content } from './Components/Layout/Content/Content';
import Header from './Components/Layout/Header/Header';
import { ProjectContextProvider, SelectedProjectContextProvider } from './context'
export const App = () => {
  return (
    <SelectedProjectContextProvider>
      <ProjectContextProvider>
        <Header />
        <Content />
      </ProjectContextProvider>
    </SelectedProjectContextProvider>
  );
}

