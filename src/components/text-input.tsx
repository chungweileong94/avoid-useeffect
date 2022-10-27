import React from 'react';

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const TextInput: React.FC<Props> = ({
  name,
  label,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-2"
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
