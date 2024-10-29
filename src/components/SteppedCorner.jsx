import React from 'react';
/** 계단형 테두리 컴포넌트
 * ProductOverview의 내부 장식. 기능은 없음.
 * CSS in JS로 통합: 스타일을 포함해도 크지 않으므로 단일 코드로 관리.
 * section.product-info(위)와 section.popular-opinions(아래)의
 * 오른쪽 코너(우하단, 우상단)를 동시에 꾸밈.
 * 한 step당 24px
 * 16px 요소 추가: 두 section의 gap인 40px을 표현하기 위해 필요.
 */

const SteppedCorner = () => {
  const cellStyle = {
    width: '24px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: 'white'
  };

  const h16 = {
    height: '16px'
  };

  const h24 = {
    height: '24px'
  };

  const borderTL = {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderTopLeftRadius: '4px'
  };

  const borderR = {
    borderRight: '1px solid black'
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: 'none'
  };

  const tableStyle = {
    display: 'flex',
    position: 'absolute',
    right: 0,
    top: '248px'
  };

  return (
    <div style={tableStyle} className="border-grid">
      {/* 첫 번째 열 */}
      <div style={colStyle} className="border-col">
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTL }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h16 }} className="cell h16"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTL }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
      </div>
      {/* 두 번째 열 */}
      <div style={colStyle} className="border-col">
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTL }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h16 }} className="cell h16"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTL }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
      </div>
      {/* 세 번째 열 */}
      <div style={colStyle} className="border-col">
        <div style={{ ...cellStyle, ...h24, ...borderTL }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h16 }} className="cell h16"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTL, ...borderR }} className="cell border-tl border-r"></div>
        <div style={{ ...cellStyle, ...h24, ...borderR }} className="cell border-r"></div>
        <div style={{ ...cellStyle, ...h24, ...borderR }} className="cell border-r"></div>
        <div style={{ ...cellStyle, ...h24, ...borderR }} className="cell"></div>
      </div>
    </div>
  );
};

export default SteppedCorner;