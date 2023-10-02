import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export const Icons = {
  Feather,
};

const Icon = ({type, name, color, size = 24, style}) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag stroke={color} strokeWidth={size} width={30} height={30} />
      )}
    </>
  );
};

export default Icon;
