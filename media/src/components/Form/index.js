import React, { useState } from 'react';
import { Input } from '../Input';
import { Result } from '../Result';

export const Form = () => {
  const [values, setValues] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
  });
  return (
    <>
      <h1>Informe as suas 4 notas</h1>
      <Input
        label="Nota 1"
        placeholder="Informe a nota"
        value={values[0]}
        type="number"
        onChange={({ target }) => setValues({ ...values, 0: target.value })}
      />
      <Input
        label="Nota 2"
        placeholder="Informe a nota"
        value={values[1]}
        type="number"
        onChange={({ target }) => setValues({ ...values, 1: target.value })}
      />
      <Input
        label="Nota 3"
        placeholder="Informe a nota"
        value={values[2]}
        type="number"
        onChange={({ target }) => setValues({ ...values, 2: target.value })}
      />
      <Input
        label="Nota 4"
        placeholder="Informe a nota"
        value={values[3]}
        type="number"
        onChange={({ target }) => setValues({ ...values, 3: target.value })}
      />
      <Result values={Object.values(values)} />
    </>
  );
};
