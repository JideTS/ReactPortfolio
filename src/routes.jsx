import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { caseStudies } from './data/caseStudies';
import { CasePage } from './pages/CasePage';
import { ErrorPage } from './pages/ErrorPage';
import { Homepage } from './pages/Homepage';

const caseRoutes = Object.values(caseStudies).flatMap((caseStudy) =>
  caseStudy.paths.map((path) => ({
    path,
    element: <CasePage caseStudy={caseStudy} />,
  })),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      ...caseRoutes,
    ],
  },
]);