import { useSelector } from "react-redux"
import { useActions } from "../redux/reduxHooks"
import { selectDate } from "../redux/slices/dateSlice"
import { kMaxLength } from "buffer";



// type Child = { current: HTMLDivElement }
// type Func = (num: number) => void
type CheckNew = {
  entries: any;
  child: { current: HTMLDivElement };
  previousWeek: number;
  changeCurrentWeek: (num: number) => void
}

export const checkNewWeek = ({entries,child,previousWeek,changeCurrentWeek}:CheckNew):void =>  {
  const newDate = Number(child.current.dataset.key)
  // console.log(newDate)
  const [entry] = entries
  if (entry.isIntersecting ) {
    // console.log(previousWeek)
    // changeCurrentWeek(newDate)
    changeCurrentWeek(newDate)
    console.log("newDate",typeof newDate)
    console.log("previousWeek", previousWeek)
    
  }

}

// export class UtilitsDate{

//   static useCheckNewWeek(entries: any) {
//     const {} = useSelector(selectDate)
//     const [entry] = entries
//     if(entry.isIntersecting) return true
//     return false
//   }
  
// }