import { Link, useRouteError } from 'react-router-dom';

import { assetPath } from '../data/assets';

export const ErrorPage = () => {
  const error = useRouteError();
  const message = error?.status === 404 ? 'this page could not be found' : 'an unexpected error happened';

  return (
    <main className="page error-page">
      <h1>IT&apos;S NOT YOU, IT&apos;S ME</h1>
      <img src={assetPath('error-page-picture0.png')} alt="" />
      <p>{message}</p>
      <Link to="/">Back to portfolio</Link>
    </main>
  );
};