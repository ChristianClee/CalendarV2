import React, { useState, useEffect, useRef } from 'react';
import Greed from './greed/Greed';
import { getScrollPosition, width, asideBlokWidth } from '../../displayUtilits/stopScroll'
import { Scroll } from '../../displayUtilits/scroll'
// @ts-ignore
import { CSSTransition } from 'react-transition-group';
import NewMonth from '../popUpMessages/NewMonth';
import { selectDate } from '../../redux/slices/dateSlice';
import { useSelector } from 'react-redux';
import MainGreedLine from './greed/MainGreedLine';
import type { MonthDate } from '../../dateUtilits/dates'
import { useActions } from '../../redux/reduxHooks';
import { checkNewWeek } from '../../dateUtilits/addition'

const MainGreed: React.FC = () => {
  const greedRef = useRef<HTMLDivElement>(null!)


  const { currentMonthDate, currentDate, currentWeek, previousWeek } = useSelector(selectDate)
  const { changeCurrentWeek } = useActions()  
  // console.log(previousWeek) const { previousWeek } = useSelector(selectDate)
  // const { previousWeek } = useActions()
  
  // console.log('currentWeek ', currentWeek)
  const weeks = currentMonthDate.weeks
  // console.log(currentMonthDate)

  // console.log(weeks) // delete

  
  function useMyObserver( child: { current: HTMLDivElement }): void {
    // it keep track for the weeks on display and if the week changes the function says it
   

    useEffect(() => {
      
      const options = {
        root: greedRef.current, // parant 
        rootMargin: "0px",
        threshold: 1,
      }
      const callBack = (entries: any, observe: any) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          console.log(child.current.dataset.key)
        }
        // const data = { entries, child, previousWeek, changeCurrentWeek }
        // checkNewWeek(data)
        // if (chech) {
        //   console.log(child.current.dataset.key) // main
        // }
        // console.log(child.current.dataset)
      }
      const observer = new IntersectionObserver(callBack, options)
      if (child.current) observer.observe(child.current) // child
      return () => {
        if (child.current) observer.observe(child.current)
      }

    }, [child])
      
  }


  function ontouchend() {
    const weeksCount: number = weeks.length
    let pos = greedRef.current.scrollLeft
    const tm = setInterval(() => {
      pos = getScrollPosition(tm, greedRef, pos, weeksCount)
    }, 100)
  }
  function onscroll() {
    const scroll = new Scroll(greedRef, asideBlokWidth)

    if (scroll.isTouchleftSide()) {
      setStopScroll('stopScroll') // it stops scroll via className by overflow:hidden 
      setPopUp(true)
      setTimeout(() => { scroll.goToFinishScroll() }, 500)
      setTimeout(() => {
        setPopUp(false)
        setStopScroll('') // it allows you to scroll again
      }, 1000)  
    }

    if (scroll.isTouchRightSide()) {
      setStopScroll('stopScroll') // it stops scroll via className by overflow:hidden 
      setPopUp(true)
      setTimeout(() => { scroll.goToStartScroll() }, 500)
      setTimeout(() => {
        setPopUp(false)
        setStopScroll('') // it allows you to scroll again
      }, 1000)  
    }
  }


  useEffect(() => {
  // set up scroll position by first the run of app
    const positionCurrentWeek = currentDate.weekInMonth
    const amountWeeks = weeks.length
    const result = (width * (amountWeeks - positionCurrentWeek)) + asideBlokWidth
    greedRef.current.scrollLeft = greedRef.current.scrollWidth - result
  }, [])
  



  
  const [popUp, setPopUp] = useState<boolean>(false)
  const [stopScroll, setStopScroll] = useState("")




  return (
    <>
    <CSSTransition
        in={popUp}
        timeout={400}
        classNames="newMonthMessage"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <NewMonth/>
      </CSSTransition>

      <div className={["main__greed", stopScroll].join(" ")}
        ref={greedRef}
        onTouchEnd={ontouchend}
        onScroll={onscroll}
      >
        <MainGreedLine weeks={weeks} func={useMyObserver} />
        
      </div>
    </>
    
  );
}
export default MainGreed;