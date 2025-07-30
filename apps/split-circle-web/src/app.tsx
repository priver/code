import * as React from 'react';
import { Button } from '@priver/ui/button';

function App(): React.ReactNode {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-medium tracking-tight text-gray-950">Split Circle</h1>
      <Button
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        count is {count}
      </Button>
    </div>
  );
}

export default App;
