

export class Scroll {
  elemRef: { current: HTMLDivElement }
  clientWidth: number
  scrollWidth: number
  scrollLeft: number
  asideBlokWidth: number
  

  constructor(elemRef: { current: HTMLDivElement }, asideBlokWidth:number) {
    this.elemRef = elemRef
    this.asideBlokWidth = asideBlokWidth
    this.clientWidth = this._getClientWidth()
    this.scrollLeft = this._getScrollLeft()
    this.scrollWidth = this._getScrollWidth()
  }
  
  isTouchRightSide():boolean {
    return this.scrollLeft > this.scrollWidth - 1
  }
  isTouchleftSide():boolean{
    return this.scrollLeft < 1
  }
  goToStartScroll(): void{
    this.elemRef.current.scrollLeft = this.asideBlokWidth 
  }
  goToFinishScroll(): void{
    // console.log(this.elemRef)
    this.elemRef.current.scrollLeft = this.scrollWidth - this.asideBlokWidth
  }


  _getClientWidth() {
    return this.elemRef.current.clientWidth
  }
  _getScrollWidth() {
    return this.elemRef.current.scrollWidth - this.clientWidth
  }
  _getScrollLeft() {
    return this.elemRef.current.scrollLeft
  }
  
}

