'use client';

import Link from 'next/link';
import React from 'react';
import {useSelectedLayoutSegment} from 'next/navigation';
import {mixClassName} from '../utils/styles';

type Props = {
  href: string;
  children: string;
};

const NavLink: React.FC<Props> = ({href, children}) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const active = href === `/${selectedLayoutSegment}`;

  return (
    <Link
      href={href}
      className={mixClassName(
        'border-b-2 border-gray-100 border-transparent p-1 transition-all hover:scale-110 hover:border-black active:scale-75',
        active && 'text-blue-700',
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
