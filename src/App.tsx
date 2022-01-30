import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
