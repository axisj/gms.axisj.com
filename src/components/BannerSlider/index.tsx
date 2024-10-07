import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemedImage from '@theme/ThemedImage';
import { useRef } from "react";



import { Button, Divider, ConfigProvider, Flex, Radio, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";

type BannerItem = {
  title: string;
  light: string;
  dark:string;
};

const BannerList: BannerItem[] = [
  {
    title: '대한역도연맹',
    light: "/img/partner_1.png",
    dark: "/img/partner_1_dark.png",
  },
  {
    title: '대한배드민턴협회',
    light: "/img/partner_2.png",
    dark: "/img/partner_2_dark.png",
  },
  {
    title: '대한축구협회',
    light: "/img/partner_3.png",
    dark: "/img/partner_3_dark.png",
  },
  {
    title: '대한자전거연맹',
    light: "/img/partner_4.png",
    dark: "/img/partner_4_dark.png",
  },
  {
    title: '대한민국농구협회',
    light: "/img/partner_5.png",
    dark: "/img/partner_5_dark.png",
  },
  {
    title: '대한탁구협회',
    light: "/img/partner_6.png",
    dark: "/img/partner_6_dark.png",
  },
  {
    title: '대한볼링협회',
    light: "/img/partner_7.png",
    dark: "/img/partner_7_dark.png",
  },
  {
    title: '대한골프협회',
    light: "/img/partner_8.png",
    dark: "/img/partner_8_dark.png",
  },
];

export default function BannerSlider(): JSX.Element {

  const { colorMode } = useColorMode();

  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };


  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="margin-bottom--lg text--center">Partners</h2>
        <h3>
          GMS 도입으로 새로운 스포츠의 미래를 준비하십시오.
        </h3>
        <p>
          운영 측에선 유연한 경기 운영과 비용절감을 얻고, 선수와 관객에 최고의 경험을 선사하세요.
        </p>
        <div className={styles.sliderContainer}>
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
            {BannerList.map((props, idx) => (
              <div key={idx}>
                  <ThemedImage
                  alt={props.title}
                  sources={{
                    light: useBaseUrl(props.light),
                    dark: useBaseUrl(props.dark),
                  }}
                  />
              </div>
            ))}
            </Slider>
          </div>
        <div className={styles.buttonContainer}>
          <ConfigProvider
            theme={{
              algorithm: colorMode === "dark" ? [theme.darkAlgorithm] : [],
              token: {
                // Seed Token
                colorPrimary: '#F84552',
                borderRadius: 4
              },
            }}
          >
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
}
