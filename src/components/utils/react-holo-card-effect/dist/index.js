import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import sparklesImage from './sparkles.webp';

// 애니메이션 정의
const brightnessAnimation = keyframes`
  0%, 100% { opacity: 0.75; filter: brightness(1.2) contrast(1.25); }
  5%, 8% { opacity: 1; filter: brightness(0.8) contrast(1.2); }
  13%, 16% { opacity: 0.5; filter: brightness(1.2) contrast(0.8); }
  35%, 38% { opacity: 1; filter: brightness(1) contrast(1); }
  55% { opacity: 0.33; filter: brightness(1.2) contrast(1.25); }
`;

const gradientAnimation = keyframes`
  0%, 100% { opacity: 0.5; background-position: 50% 50%; filter: brightness(0.5) contrast(1); }
  5%, 9% { background-position: 100% 100%; opacity: 1; filter: brightness(0.75) contrast(1.25); }
  13%, 17% { background-position: 0% 0%; opacity: 0.88; }
  35%, 39% { background-position: 100% 100%; opacity: 1; filter: brightness(0.5) contrast(1); }
  55% { background-position: 0% 0%; opacity: 1; filter: brightness(0.75) contrast(1.25); }
`;

// Styled component 정의
const StyledCard = styled.div`
  width: ${({ width }) => width || 320}px;
  height: ${({ height }) => height || 446}px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  //border-radius: 5% / 3.5%;
  //box-shadow: -3px -3px 3px 0 rgba(38, 230, 247, 0.3), 3px 3px 3px 0 rgba(247, 89, 228, 0.3), 0 0 6px 2px rgba(255, 231, 89, 0.3), 0 35px 25px -15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 20px 10px;
  transform: rotateX(${({ activeRotation }) => activeRotation.y}deg) rotateY(${({ activeRotation }) => activeRotation.x}deg);

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 300% 300%;
    mix-blend-mode: ${({ blendModeA }) => blendModeA || "color-dodge"};
    opacity: 0.2;
    z-index: 1;
    background-image: linear-gradient(115deg, transparent 0%, #d0431a4D 25%, transparent 47%, transparent 53%, #3582cc4D 75%, transparent 100%);
  }

  ${({ showSparkles }) => showSparkles && css`
    &:after {
      background-image: url(${sparklesImage}), linear-gradient(125deg, #d0431aFF 20%, #e3be4cFF 40%, #abce3aFF 60%, #3581ceFF 80%);
      background-size: 180%;
      mix-blend-mode: ${({ blendModeB }) => blendModeB || "color-dodge"};;
      opacity: 1;
      z-index: 1;
    }
  `}

  ${({ active }) =>
  active &&
  css`
      :before {
        opacity: 1;
        animation: none;
        background-image: linear-gradient(140deg, transparent 25%, #d0431aFF 48%, #3582ccFF 52%, transparent 75%);
        background-position: ${({ activeBackgroundPosition }) => `${activeBackgroundPosition.lp}% ${activeBackgroundPosition.tp}%`};
      }
    `}

  ${({ animated }) =>
  animated &&
  css`
      transition: 1s;
      transform: rotateX(0deg) rotateY(0deg);
      &:before {
        transition: 1s;
        animation: ${gradientAnimation} 12s ease infinite;
      }
      &:after {
        transition: 1s;
        animation: ${brightnessAnimation} 12s ease infinite;
      }
    `}
`;

// HoloCard 컴포넌트 정의
export const HoloCard = ({
                           children,
                           url,
                           height,
                           width,
                           colorMode,
                           showSparkles,
                         }) => {
  const [active, setActive] = useState(false);
  const [animated, setAnimated] = useState(true);
  const [activeBackgroundPosition, setActiveBackgroundPosition] = useState({ tp: 0, lp: 0 });
  const [activeRotation, setActiveRotation] = useState({ y: 0, x: 0 });
  const cardRef = useRef(null);
  // const [backgroundColor, setBackgroundColor] = useState("#fff");
  // const [blendMode, setBlendMode] = useState("color-dodge");



  // 마우스 이동 처리
  const handleMouseMove = (event) => {
    setAnimated(false);
    setActive(true);
    const { offsetX, offsetY } = event.nativeEvent;
    const { clientWidth, clientHeight } = cardRef.current;

    const xPercent = Math.abs(Math.floor(100 / clientWidth * offsetX) - 100);
    const yPercent = Math.abs(Math.floor(100 / clientHeight * offsetY) - 100);

    setActiveBackgroundPosition({
      lp: 50 + (xPercent - 50) / 1.5,
      tp: 50 + (yPercent - 50) / 1.5,
    });
  };

  // 마우스 이동이 카드 밖으로 나갔을 때 처리
  const handleMouseOut = () => {
    setActive(false);
    setAnimated(true);
    setActiveRotation({ y: 0, x: 0 });
  };
  {/*colorMode={ colorMode === 'dark' ? "#1b1b1d" : "#fff"}*/}
  return (
    <Tilt>
      <StyledCard
        url={url}
        ref={cardRef}
        active={active}
        animated={animated}
        activeRotation={activeRotation}
        activeBackgroundPosition={activeBackgroundPosition}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        height={height}
        width={width}
        backgroundColor={colorMode === 'dark' ? "#1b1b1d" : "#fff"}
        blendModeA={colorMode === 'dark' ? "darken" : "color-dodge"}
        blendModeB={colorMode === 'dark' ? "lighten" : "color-dodge"}
        showSparkles={showSparkles}
      >
        {children}
      </StyledCard>
    </Tilt>
  );
};
