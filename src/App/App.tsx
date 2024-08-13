import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'utils/route/AppRoute';
import { InnerLayout } from 'components/InnerLayout';
import { PageForm1 } from 'pages/PageForm1';
import { PageForm2 } from 'pages/PageForm2';
import { PageForm3 } from 'pages/PageForm3';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home()} element={<InnerLayout />}>
        <Route index element={<Navigate to={AppRoute.Form1()} />} />
        <Route path={AppRoute.Form1()} element={<PageForm1 />} />
        <Route path={AppRoute.Form2()} element={<PageForm2 />} />
        <Route path={AppRoute.Form3()} element={<PageForm3 />} />
      <Route path="*" element={<Navigate to={AppRoute.Home()} />} />
      </Route>
    </Routes>
  );
};
