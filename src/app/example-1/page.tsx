'use client';

import React, {useEffect, useState} from 'react';
import TextInput from '../../components/text-input';

const Example1 = () => {
  const [firstName, setFirstName] = useState('James');
  const [lastName, setLastName] = useState('Bond');

  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName([firstName, lastName].join(' '));
  }, [firstName, lastName]);

  return (
    <div className="flex flex-col gap-4">
      <TextInput
        name="fistName"
        label="First Name"
        value={firstName}
        onChange={setFirstName}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={setLastName}
      />
      <span className="text-xl">
        My Name is <u>{fullName}</u>
      </span>
    </div>
  );
};

export default Example1;

// const fullName = [firstName, lastName].join(' ');
