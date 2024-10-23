import React from 'react';

// @ts-expect-error
const Hello = React.lazy(() => import('provider/Hello').then((module) => ({ default: module.Hello })));

const App = () => (
  <div>
    <h1>Host lazy remote component</h1>
    <React.Suspense fallback="Loading Hello">
      <Hello origin="App" />
    </React.Suspense>
  </div>
);

export default App;
