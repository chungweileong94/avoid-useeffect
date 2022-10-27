'use client';

import React, {useEffect, useState} from 'react';

const Example4 = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('http://localhost:3000/api/hello', {signal: controller.signal})
      .then((response) => response.json())
      .then(setData);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Data fetching</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* <h1 className="mt-8 text-2xl">Solutions:</h1>
      <ul className="list-disc pl-8">
        <li>React Query</li>
        <li>Render-as-you-fetch (suspense)</li>
        <li>SSR (NextJS, Remix)</li>
        <li>Server Component - DEMO</li>
      </ul> */}
    </div>
  );
};

export default Example4;

// const fetchData = async () => {
//   const response = await fetch('http://localhost:3000/api/hello');
//   const json = await response.json();
//   return json;
// };

// const data = use(fetchData());
