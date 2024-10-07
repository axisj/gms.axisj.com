import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import { Button, ConfigProvider, Input, Space, theme } from "antd";
import {useColorMode} from '@docusaurus/theme-common';
import { useCallback, useEffect, useState } from "react";
import ThemedImage from "@theme/ThemedImage";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const heroImgs = [
  "/img/gms_hero_1.svg",
  "/img/gms_hero_2.svg",
  "/img/gms_hero_3.svg",
  "/img/gms_hero_4.svg",
  "/img/gms_hero_5.svg",
  "/img/gms_hero_6.svg",
  "/img/gms_hero_7.svg",
  "/img/gms_hero_8.svg",
  "/img/gms_hero_9.svg",
  "/img/gms_hero_10.svg",
  "/img/gms_hero_11.svg",
  "/img/gms_hero_12.svg",
]

export default function HomeHero(): JSX.Element {
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);
  const depthValues = heroImgs.map((_, index) => (isHovered ? index * 50 : index * 10));
  const transitionValues = heroImgs.map((_, index) => `${0.3 + index * 0.05}s ease-out`);

  return (
    <header className={styles.heroContainer}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12") + " " + styles.aligner}>

            <div className={styles.heroTextBox}>
              <h2>
                스포츠의 미래를 다시 쓰다
              </h2>
              <p>
                GMS는 경기 운영의 모든 측면에서 효율성과 유연성을 극대화하며
                스포츠 경기의 미래를 재정의합니다.
              </p>
            </div>
            <div className={styles.heroImgBox}>
              <Tilt
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.2}
                glareEnable={false}
                glareMaxOpacity={0.45}
                gyroscope={true}
                className={styles.heroTilt}
              >
                {heroImgs.map((src, index) => (
                  <img src={src}
                    alt="hero ${index}"
                    style={{
                      position:'absolute',
                      transform: `translateZ(${-20 * index}px) scale(0.8)`,
                    }}
                  />
                ))}
              </Tilt>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
