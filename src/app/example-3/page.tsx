'use client';

import React, {useState} from 'react';
import ListView from './list-view';

type Item = React.ComponentProps<typeof ListView>['items'][number];

const Example3 = () => {
  const [items, setItems] = useState<Item[]>([
    {id: 1, value: 'Item 1'},
    {id: 2, value: 'Item 2'},
    {id: 3, value: 'Item 3'},
    {id: 4, value: 'Item 4'},
  ]);

  const changeList = () => {
    setItems((prev) =>
      prev.map((i) => {
        const v = i.id + 100;
        return {id: v, value: `Item ${v}`};
      }),
    );
  };

  return (
    <div>
      <ListView items={items} />
      <button onClick={changeList} className="mt-4 border-2">
        Change List
      </button>
    </div>
  );
};

export default Example3;
