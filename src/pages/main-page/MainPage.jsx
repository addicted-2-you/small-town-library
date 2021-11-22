import React from 'react';

import { getCookie } from '~/utils/browser.utils';

function MainPage() {
  React.useEffect(() => {
    getCookie('auth');
  }, []);

  return (
    <div className="min-h-screen">
      <h1>Main Page</h1>
    </div>
  );
}

export default MainPage;
