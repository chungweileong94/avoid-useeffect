import React, {useEffect, useState} from 'react';
import {mixClassName} from '../../utils/styles';

type Item = {id: number; value: string};

type Props = {
  items: Item[];
};

const ListView: React.FC<Props> = ({items}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setSelectedId(null);
  }, [items]);

  return (
    <div className="flex flex-col gap-2">
      <span>
        Selected: <u>{selectedId}</u>
      </span>
      <ul>
        {items.map((i) => (
          <li
            key={i.id}
            className={mixClassName(
              'border-b-2 p-2',
              selectedId === i.id ? 'bg-blue-700 text-white' : undefined,
            )}
            onClick={() => setSelectedId(i.id)}
          >
            {i.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;

// const [prevItems, setPrevItems] = useState<Item[]>(items);
//   if (prevItems !== items) {
//     setPrevItems(items);
//     setSelectedId(null);
//   }
