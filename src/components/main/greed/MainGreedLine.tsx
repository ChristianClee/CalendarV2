import React from 'react';
import { getScrollPosition, width, asideBlokWidth } from '../../../displayUtilits/stopScroll'
import Greed from './../greed/Greed';
import type { MonthDate, Week } from '../../../dateUtilits/dates'

const MainGreedLine: React.FC<{ weeks: Week[], func: (child: { current: HTMLDivElement }) => void }> = ({ weeks, func }) => {
  return (
    <div
      className="main__greed-line"
    >
      <div style={{ backgroundColor: 'rgba(150,100,100,0.3)', flex: `0 0 ${asideBlokWidth}px` }}></div>
      {weeks.map((item, index) => <Greed key={item.key} refdate={item.key} func={func} />)}
      <div style={{ backgroundColor: 'rgba(150,100,100,0.3)', flex: `0 0 ${asideBlokWidth}px` }}></div>
    </div>
  );
}
export default MainGreedLine;