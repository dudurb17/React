import React from 'react';

export const Result = function ({ values }) {
  const resultValue = values?.reduce(
    (acc, value) => acc + Number(value ?? 0),
    0
  );
  return <h1>Sua média: {resultValue / 4}</h1>;
};
