import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type InputProps = {
  limit: number;
  valueText: string;
  saveValue: (str: string) => void;
  errorStatus: boolean;
}

const Input: React.FC<InputProps> = ({ limit, valueText, saveValue, errorStatus }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>(valueText)

  // const [error, setError] =



  useEffect(() => {
    //@ts-ignore I don't know how to typing dispatch
    dispatch(saveValue(value))// save it to redux validSlice
  }, [value])

  const onchange = (event: ChangeEvent) => {
    const numbers = event.target.value
    if (isNaN(+numbers)) return // check for letters is string
    if (String(numbers).length > limit) return // check for a length of length of numbers
    setValue(numbers) // save it to useState
  }

  function checkError(): string {
    const inputClass = "eventMessageComponent-form__input"
    let result = (errorStatus)
    return (result) ? inputClass : [inputClass, "active"].join(" ")

  }

  return (
    <input
      value={value}
      onChange={onchange}
      className={checkError()}
      type="text" />
  );
}
export default Input;