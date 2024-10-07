import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import {HoloCard} from "../utils/react-holo-card-effect";
//import {HoloCard} from "react-holo-card-effect";
import {useColorMode} from '@docusaurus/theme-common';
import Tilt from "react-parallax-tilt";
import {useState} from "react";

type SportList = {
  title: string;
  title_en: string;
  status: string;
  light: string;
  dark: string;
  star: boolean;
  description: JSX.Element;
};

const SportList: SportList[] = [
  {
    title: "역도",
    title_en: "Weightlifting",
    status:"Now Available",
    light: "/img/sports_1.svg",
    dark: "/img/sports_1.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "배드민턴",
    title_en:"Badminton",
    status:"Now Developing",
    light: "/img/sports_2_gray.svg",
    dark: "/img/sports_2_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "축구",
    title_en:"Soccer",
    status:"Now Developing",
    light: "/img/sports_3_gray.svg",
    dark: "/img/sports_3_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "로드사이클",
    title_en:"Road Cycling",
    status:"Now Developing",
    light: "/img/sports_4_gray.svg",
    dark: "/img/sports_4_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "농구",
    title_en: "Basketball",
    status:"Now Available",
    light: "/img/sports_5_gray.svg",
    dark: "/img/sports_5_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "탁구",
    title_en:"Table Tennis",
    status:"Now Developing",
    light: "/img/sports_6_gray.svg",
    dark: "/img/sports_6_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "볼링",
    title_en:"Balling",
    status:"Now Developing",
    light: "/img/sports_7_gray.svg",
    dark: "/img/sports_7_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
  {
    title: "Golf",
    title_en:"Road Cycling",
    status:"Now Developing",
    light: "/img/sports_8_gray.svg",
    dark: "/img/sports_8_gray.svg",
    star: true,
    description: (
      <></>
    ),
  },
];


function SportCard({title, title_en, status, light, dark, star, description}: SportList) {

  const { colorMode } = useColorMode();
  const [scale, setScale] = useState(1);

  return (
    <div className={clsx("col col--3") + " " + styles.sportsContainer}>
      <div className={styles.sportsBox}>
        <div className={styles.sbImgWrap}>
          <Tilt
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            transitionSpeed={1000}
            scale={scale}
            glareEnable={true}
            glareMaxOpacity={0.9}
            glareColor={colorMode === 'dark' ? '#1a1a1b' : '#fff'}
            glarePosition="all"
            glareBorderRadius="20px"
            gyroscope={true}
            onEnter={() => setScale(1.2)} // 마우스 오버 시 scale 값 1.2
            onLeave={() => setScale(1)}
            style={{
              width:'300px',
              height:'200px',
              position:'relative',
              transformStyle: 'preserve-3d',
              transform: 'perspective(100px)',
            }}
          >
            <img src={colorMode === 'dark'? dark : light}
                 alt="hero"
                 style={{
                   position:'absolute',
                 }}
            />
          </Tilt>
        </div>
      </div>
      <div className="text--center">
        <Heading as="h3" className={styles.sportItemTitle}><strong>{title}</strong><span>{title_en}</span></Heading>
        <p className={styles.sportItemDesc}>{description}</p>
        <a href={"#"} className={styles.sportItemButton}>{status}</a>
      </div>
    </div>
  );
}


export default function SportsItem(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="margin-bottom--lg text--center">종목별 관리 시스템</h2>
        <div className="row">
          {SportList.map((props, idx) => (
            <SportCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
