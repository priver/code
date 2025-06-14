import * as React from 'react';

function App(): React.ReactNode {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-medium tracking-tight text-gray-950">Split Circle</h1>
      <button
        type="button"
        className="rounded-xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800"
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
