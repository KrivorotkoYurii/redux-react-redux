import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { TestingPage } from './pages/TestingPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TestingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
