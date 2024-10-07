import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Canvas, extend } from "@react-three/fiber";
import styles from './index.module.css';
import Layout from "@theme/Layout";
import AXBLogo from "@theme/ThemedImage";
import clsx from "clsx";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerSlider from "@site/src/components/BannerSlider";
import HomeHero from "@site/src/components/HomeHero";
import HomeFeatures from "@site/src/components/HomeFeatures";
import SportsItem from "@site/src/components/SportsItem";
import HomeCaseStudy from "@site/src/components/HomeCaseStudy";

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  // const { debug } = useControls({ debug: false })

  return (
    <Layout title={`Home`} description='Description will go into a meta tag in <head />'>

      <HomeHero />
      <main>
        <div className="container">
            <div className={styles.defBox}>
              <div className={styles.defBoxLayer}>
                <h2>What is GMS?</h2>
              </div>
              <div className={styles.defBoxLayer}>
                <p>
                  <strong>GMS(Game Management System)</strong>는 경기 운영 전반을 통합적으로 관리하는 혁신적인 솔루션입니다.
                  종목별로 최적화된 시스템을 제공해 경기 준비와 진행을 간소화하며, 운영 효율성을 극대화합니다.
                  대회 운영 시 시간과 비용을 절감할 수 있을 뿐만 아니라, 기술적 안정성과 유연성을 통해 사용자 요구사항에 빠르게 대응할 수 있습니다.
                  모든 규모의 스포츠 대회에 적합하며, 높은 호환성을 자랑하는 GMS는 경기를 보다 전문적이고 매끄럽게 운영하는 데 필요한 모든 기능을 제공합니다.
                </p>
              </div>
            </div>
        </div>

        <HomeFeatures />

        <HomeCaseStudy />

        <SportsItem />

        <BannerSlider />

      </main>
    </Layout>
);
}
