import React, { useEffect } from 'react';
// import { useGetDay } from '../../../ulilits/time'
import Input from './input/Input'
import { useSelector, useDispatch } from 'react-redux';
// import { selectDate } from '../../../redux/slices/date2Slice'
// import {
//   saveYears,
//   saveMonths,
//   saveDays,
//   saveHours,
//   saveMinutes,
// } from '../../../redux/slices/date2Slice'



const Form: React.FC = () => {
  const dispatch = useDispatch()
  // const { year, month, day } = useGetDay()
  // const { validDate } = useSelector(selectDate)
  // const {
  //   errorYears,
  //   errorMonths,
  //   errorDays,
  //   errorHours,
  //   errorMinutes
  // } = validDate

  // useEffect(() => { 
  //   dispatch(saveYears())
  //   // dispatch()
  //   // dispatch()
  //   // dispatch()
  //   // dispatch()
  // }, [
  //   errorYears,
  //   errorMonths,
  //   errorDays,
  //   errorHours,
  //   errorMinutes])

  return (

    <div
      className='eventMessageComponent-form'
    >
      {/* <Input limit={4} valueText={year} saveValue={saveYears} errorStatus={errorYears} />
      <p> . </p>
      <Input limit={2} valueText={month} saveValue={saveMonths} errorStatus={errorMonths} />
      <p> . </p>
      <Input limit={2} valueText={day} saveValue={saveDays} errorStatus={errorDays} />

      <Input limit={2} valueText={""} saveValue={saveHours} errorStatus={errorHours} />
      <p> : </p>
      <Input limit={2} valueText={""} saveValue={saveMinutes} errorStatus={errorMinutes} /> */}
    </div>
  );
}
export default Form;