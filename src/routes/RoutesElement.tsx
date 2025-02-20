import { Route, Routes } from 'react-router';

import Home from '@pages/Home';
import NotFoundPage from '@pages/NotFound';
import DefaultLayout from '@components/layouts/DefaultLayout';

function RoutesElement() {
  const DEFAULT_ROUTES = [
    {
      path: '/home',
      element: <Home />,
    },
  ];

  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />}></Route>
      <Route path='/' element={<DefaultLayout />}>
        {DEFAULT_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default RoutesElement;
