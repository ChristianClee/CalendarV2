import { CalendarDay, CalendarWeekDays, CalendarMonthDays } from "../dates"
const WeekList = ["Sund", "Mond", "Tues", "Wedn", "Thur", "Frid", "Satu"]
// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hours = date.getHours()
// const minuets = date.getMinutes()
// const week = WeekList[date.getDay()]


const mydate = "2023-June-06"
const myDays = 19510 // 2023-jun-06 
const daysNow = Math.floor(Date.now() / 1000 / 60 / 60 / 24)
const different = daysNow - myDays


describe(`\n\n\n testing for Calendar classes`, () => {
  
  describe(`\n\n testing for CalendarDay`, () => {
    describe(`\n method getUniqDayNumber - it transforms from string to number`, () => {
      const tasks = [
        {resquest: "2023-04-29-Frid",
        responce: 20230329,},
        {resquest: "2023-01-31-Frid",
          responce: 20230031,},
        {resquest: "2023-01-31-Frid",
          responce: 20230031,}
      ]
      for (let i of tasks) {
        test(`input ${i.resquest} output ${i.responce}`, () => {
        expect(CalendarDay.getUniqDayNumber(i.resquest)).toBe(i.responce)
      })
      }
    })
    describe(`\n method getUniqDay - it returns uniq value for day, input value is days before or after today, different is the correct value it is looking on ${mydate} date, all input values starts from ${mydate} date`, () => {
      const tasks = [
        {resquest: 0 - different,
        responce: {unicDayString: '2023-06-02-Frid', uniqDayNumber: 20230502}},
        {resquest: -2 - different,
        responce: {unicDayString: '2023-05-31-Wedn', uniqDayNumber: 20230431}},
        {resquest: -1 - different,
        responce: {unicDayString: '2023-06-01-Thur', uniqDayNumber: 20230501}},
        {resquest: 29 - different,
        responce: {unicDayString: '2023-07-01-Satu', uniqDayNumber: 20230601}},
      ]
      for(let i of tasks){
      test(`input ${i.resquest} output ${JSON.stringify(i.responce)}`, () => {
        expect(CalendarDay.getUniqDay(i.resquest)).toEqual(i.responce)
      })
      }
    })
    describe(`\n method getDayFromDate - input value is uniq date, outPut is days befor or after today`, () => {
      const tasks = [
        {resquest: 20230502, responce: 0 - different},
        {resquest: 20230504, responce: 2 - different},
        {resquest: 20230429, responce: -4 - different},
        {resquest: 20230512, responce: 10 - different},
        {resquest: 20230601, responce: 29 - different},
        
      ]
      for(let i of tasks){
      test(`input ${i.resquest} output ${JSON.stringify(i.responce)}`, () => {
        expect(CalendarDay.getDayFromDate(i.resquest)).toEqual(i.responce)
      })
      }
    })

  })
  describe(`\n\n testing for CalendarWeekDays`, () => {
    describe(`\n method getFirstDayWeek - input value is days before or after today, output date is a date of monday which is included in input date`, () => {
      const tasks = [
        {resquest: 11 - different,responce: {unicDayString: '2023-06-12-Mond', uniqDayNumber: 20230512}},
        {resquest: 10 - different,responce: {unicDayString: '2023-06-12-Mond', uniqDayNumber: 20230512}},
        {resquest: 9 - different,responce: {unicDayString: '2023-06-05-Mond', uniqDayNumber: 20230505}},
        {resquest: 3 - different,responce: {unicDayString: '2023-06-05-Mond', uniqDayNumber: 20230505}},
        {resquest: 2 - different,responce: {unicDayString: '2023-05-29-Mond', uniqDayNumber: 20230429}},
        {resquest: 1 - different,responce: {unicDayString: '2023-05-29-Mond', uniqDayNumber: 20230429}},
        {resquest: 0 - different,responce: {unicDayString: '2023-05-29-Mond', uniqDayNumber: 20230429}},
        {resquest: -3 - different,responce: { unicDayString: '2023-05-29-Mond', uniqDayNumber: 20230429}},
        {resquest: -4 - different,responce: { unicDayString: '2023-05-29-Mond', uniqDayNumber: 20230429}},
        {resquest: -5 - different,responce: {unicDayString: '2023-05-22-Mond', uniqDayNumber: 20230422}},
        {resquest: -11 - different,responce: {unicDayString: '2023-05-22-Mond', uniqDayNumber: 20230422}},
        {resquest: -12 - different,responce: {unicDayString: '2023-05-15-Mond', uniqDayNumber: 20230415}},
        {resquest: -13 - different,responce: {unicDayString: '2023-05-15-Mond', uniqDayNumber: 20230415}},
      ]
      for (let i of tasks) {
        test(`input ${i.resquest} output ${JSON.stringify(i.responce)}`, () => {
          expect(CalendarWeekDays.getFirstDayWeek(i.resquest)).toEqual(i.responce)
        })
      }
    })
    describe(`\n method getLastDayWeek - input value is days before or after today, output date is a date of friday which is included in input date`, () => {
      const tasks = [
        {resquest: 11 - different,responce: {unicDayString: '2023-06-18-Sund', uniqDayNumber: 20230518}},
        {resquest: 10 - different,responce: {unicDayString: '2023-06-18-Sund', uniqDayNumber: 20230518}},
        {resquest: 9 - different,responce: {unicDayString: '2023-06-11-Sund', uniqDayNumber: 20230511}},
        {resquest: 3 - different,responce: {unicDayString: '2023-06-11-Sund', uniqDayNumber: 20230511}},
        {resquest: 2 - different,responce: {unicDayString: '2023-06-04-Sund', uniqDayNumber: 20230504}},
        {resquest: 1 - different,responce: {unicDayString: '2023-06-04-Sund', uniqDayNumber: 20230504}},
        {resquest: 0 - different,responce: {unicDayString: '2023-06-04-Sund', uniqDayNumber: 20230504}},
        {resquest: -3 - different,responce: { unicDayString: '2023-06-04-Sund', uniqDayNumber: 20230504}},
        {resquest: -4 - different,responce: { unicDayString: '2023-06-04-Sund', uniqDayNumber: 20230504}},
        {resquest: -5 - different,responce: {unicDayString: '2023-05-28-Sund', uniqDayNumber: 20230428}},
        {resquest: -11 - different,responce: {unicDayString: '2023-05-28-Sund', uniqDayNumber: 20230428}},
        {resquest: -12 - different,responce: {unicDayString: '2023-05-21-Sund', uniqDayNumber: 20230421}},
        {resquest: -13 - different,responce: {unicDayString: '2023-05-21-Sund', uniqDayNumber: 20230421}},
      ]
      for (let i of tasks) {
        test(`input ${i.resquest} output ${JSON.stringify(i.responce)}`, () => {
          expect(CalendarWeekDays.getLastDayWeek(i.resquest)).toEqual(i.responce)
        })
      }
    })
    describe(`\n method getDaysWeek - input value is days before or after today, output date is list of week day. Input date is included in oupput`, () => {
      const tasks = [
          {
            resquest: -5 - different, responce: [
              20230422, 20230423, 20230424, 20230425, 20230426, 20230427, 20230428 
          ]
        },
        {
          resquest: -4 - different, responce: [
            20230429, 20230430, 20230431, 20230501, 20230502, 20230503, 20230504 
          ]
        },
        {
          resquest: 0 - different, responce: [
            20230429, 20230430, 20230431, 20230501, 20230502, 20230503, 20230504 
          ]
        },
        {
          resquest: 2 - different, responce: [
            20230429, 20230430, 20230431, 20230501, 20230502, 20230503, 20230504 
          ]
        },
        {
          resquest: 3 - different, responce: [
            20230505, 20230506, 20230507, 20230508, 20230509, 20230510, 20230511 
          ]
        },
      ]
      for (let i of tasks) {
        test(
          `input ${i.resquest}
          expect ${JSON.stringify(i.responce.map(elem => elem.unicDayString))}
          output ${JSON.stringify((CalendarWeekDays.getDaysWeek(i.resquest)).map(elem => elem.unicDayString))} 
          \n`, () => {
          expect(CalendarWeekDays.getDaysWeek(i.resquest)).toEqual(i.responce)
        })
      }
    })
  })
  describe(`\n\n testing for CalendarMonthDays`, () => {
    describe(`\n method getFirstDayMonth - input value is days before or after today, output date is a date of first day of month which is included in input date`, () => {
      const tasks = [
        {resquest: 35 - different,responce: {unicDayString: '2023-07-01-Satu', uniqDayNumber: 20230601}},
        {resquest: 29 - different,responce: {unicDayString: '2023-07-01-Satu', uniqDayNumber: 20230601}},
        {resquest: 28 - different,responce: {unicDayString: '2023-06-01-Thur', uniqDayNumber: 20230501}}, 
        {resquest: 1 - different,responce: {unicDayString: '2023-06-01-Thur', uniqDayNumber: 20230501}},
        {resquest: 0 - different,responce: {unicDayString: '2023-06-01-Thur', uniqDayNumber: 20230501}},
        {resquest: -1 - different,responce: { unicDayString: '2023-06-01-Thur', uniqDayNumber: 20230501}},
        {resquest: -2 - different,responce: { unicDayString: '2023-05-01-Mond', uniqDayNumber: 20230401}},
        {resquest: -5 - different,responce: {unicDayString: '2023-05-01-Mond', uniqDayNumber: 20230401}},
        {resquest: -32 - different,responce: {unicDayString: '2023-05-01-Mond', uniqDayNumber: 20230401}},
        {resquest: -33 - different,responce: {unicDayString: '2023-04-01-Satu', uniqDayNumber: 20230301}},
        {resquest: -34 - different,responce: {unicDayString: '2023-04-01-Satu', uniqDayNumber: 20230301}},
      ]
      for (let i of tasks) {
        test(`input ${i.resquest} output ${JSON.stringify(i.responce)}`, () => {
          expect(CalendarMonthDays.getFirstDayMonth(i.resquest)).toEqual(i.responce)
        })
      }
    })

    describe(`\n getWeekInMonth - input value is days before or after today, output date is a count of weeks in month`, () => {
      const tasks = [
        { resquest: -140 - different, responce: 6 },
        { resquest: -2 - different, responce: 5 },
        { resquest: 0 - different, responce: 5 },
        { resquest: 29 - different, responce: 6 },
        { resquest: 59 - different, responce: 6 },
        { resquest: 60 - different, responce: 5 },
        { resquest: 60 - different, responce: 5 },
      ]
         for (let i of tasks) {
        test(`input ${i.resquest} output ${JSON.stringify(i.responce)}`, () => {
          expect(CalendarMonthDays.getWeekInMonth(i.resquest)).toEqual(i.responce)
        })
      }
    })
  })
})

