import React, { useState } from 'react';
import { useGetDay } from '../../../ulilits/time'
import Input from './input/Input'
import { useSelector } from 'react-redux';
import { selectValid } from '../../../redux/slices/validSlice'
import {
  saveYears,
  saveMonths,
  saveDays,
  saveHours,
  saveMinutes,
} from '../../../redux/slices/validSlice'



const Form: React.FC = () => {
  const { year, month, day } = useGetDay()
  const { errorYears, errorMonths, errorDays, errorHours, errorMinutes } = useSelector(selectValid)
  // console.log(errorMinutes)


  return (

    <div
      className='eventMessageComponent-form'
    >
      <Input limit={4} valueText={year} saveValue={saveYears} errorStatus={errorYears} />
      <p> . </p>
      <Input limit={2} valueText={month} saveValue={saveMonths} errorStatus={errorMonths} />
      <p> . </p>
      <Input limit={2} valueText={day} saveValue={saveDays} errorStatus={errorDays} />

      <Input limit={2} valueText={""} saveValue={saveHours} errorStatus={errorHours} />
      <p> : </p>
      <Input limit={2} valueText={""} saveValue={saveMinutes} errorStatus={errorMinutes} />
    </div>
  );
}
export default Form;