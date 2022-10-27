'use client';

import React, {useEffect, useState} from 'react';
import TextInput from '../../components/text-input';

const OTP_LENGTH = 6;

const verifyOtpAPI = () => {
  console.log('Verifying OTP...');
};

const Example2 = () => {
  const [otp, setOTP] = useState('');

  const handleChange = (value: string) => {
    setOTP(value);
  };

  useEffect(() => {
    if (otp.length === OTP_LENGTH) {
      verifyOtpAPI();
    }
  }, [otp]);

  return (
    <div>
      <TextInput
        name="otp"
        label="OTP (6 digit)"
        value={otp}
        onChange={handleChange}
        disabled={otp.length === OTP_LENGTH}
      />
    </div>
  );
};

export default Example2;

// const handleChange = (value: string) => {
//   setOTP(value);
//   if (value.length === OTP_LENGTH) {
//     verifyOtpAPI();
//   }
// };
