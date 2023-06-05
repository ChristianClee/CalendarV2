export const asideBlokWidth = 300
export const width = 740



//getScrollCenter gives the start elemRef's coordinates; it depends on was it scroled more than an half element or not
export function givesScrollCenter(pos: number, weeks: number): number {
  const widthBoby = width * (weeks - 1) + asideBlokWidth * 2

  if (pos < 0 + 2 ) { // it set up scrol to right side
    return 0
  } 
  if (pos > widthBoby - 2) { //it set up scrol to left side
    return widthBoby
  }
    const result = Math.round((pos - asideBlokWidth) / width) * width + asideBlokWidth
  
  return result
}

// getScrollPosition calculates position of elemRef, and scrolles elemRef   !! this function makes two action at once
export function getScrollPosition(tm: NodeJS.Timer, elemRef: { current: HTMLDivElement }, pos: number, weeks: number) {
  if (pos == elemRef.current.scrollLeft) { 
    const homePosition = givesScrollCenter(pos, weeks) // calculate amoung of px for exstra scrolling after the touch
    scrollToHome(elemRef, homePosition) 
    clearInterval(tm) // close setInterval
    return pos
  } else {
    pos = elemRef.current.scrollLeft
    return pos 
  }
}

// scrollToHome makes smooth scrol to zero's coordinates 
function scrollToHome( elemRef: { current: HTMLDivElement }, zero:number) {
  elemRef.current.scrollTo({ top: 0, left: zero, behavior: "smooth" })
}





