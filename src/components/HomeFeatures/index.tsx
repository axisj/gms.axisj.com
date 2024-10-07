import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

type FeatureItem = {
  title: string;
  light: string;
  dark: string;
  description: JSX.Element;
  feature:JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '간편한 설치 및 빠른 운영',
    light: "/img/feature_1.svg",
    dark: "/img/feature_1.svg",
    description: (
      <></>
    ),
    feature: (
      <>
        <ul>
          <li>WiFi 기반 통신을 활용해 복잡한 배선 없이 쉽게 설치할 수 있으며, 다양한 환경에서 빠르게 운영 가능합니다.</li>
          <li>시스템 설정 및 운영 시간이 크게 단축되어 대회 준비에 많은 시간을 할애하지 않아도 됩니다.</li>
        </ul>
      </>
    ),
  },
  {
    title: '유연한 경기 운영',
    light: "/img/feature_2.svg",
    dark: "/img/feature_2.svg",
    description: (
      <></>
    ),
    feature: (
      <>
        <ul>
          <li>HTML5 기술을 통해 사용자 요구 사항이나 상황 변화에 신속하게 대응할 수 있어, 경기 중에도 유연한 운영이 가능합니다.</li>
          <li>다양한 디바이스와 플랫폼에서 호환되며, 사용자의 환경에 맞춰 적응할 수 있는 유연성을 제공합니다.</li>
        </ul>
      </>
    ),
  },
  {
    title: '최고의 사용자 경험 제공',
    light: "/img/feature_3.svg",
    dark: "/img/feature_3.svg",
    description: (
      <></>
    ),
    feature: (
      <>
        <ul>
          <li>선수, 심판, 운영자 모두를 위한 직관적이고 현대적인 사용자 인터페이스를 제공하여, 경기 중 빠른 접근과 간편한 조작이 가능합니다.</li>
          <li>관중들에게도 실시간 경기 정보를 제공함으로써 경기의 몰입감을 높입니다.</li>
        </ul>
      </>
    ),
  },
  {
    title: '안정성과 호환성, 효율성',
    light: "/img/feature_4.svg",
    dark: "/img/feature_4.svg",
    description: (
      <></>
    ),
    feature: (
      <>
        <ul>
          <li>다양한 장비와의 호환성을 보장하며, 뛰어난 안정성으로 인해 경기 중 시스템 다운타임 없이 안정적으로 운영할 수 있습니다.</li>
          <li>데이터 저장 및 백업 기능을 통해 경기가 끝난 후에도 기록을 안전하게 보관할 수 있습니다.</li>
          <li>고가의 하드웨어 없이 합리적인 비용으로 설치 및 운영이 가능하며, 중소규모 대회에서도 적용할 수 있는 비용 효율적인 솔루션입니다.</li>
          <li>유지 보수 비용도 절감되어 대회 운영자에게 경제적 부담을 최소화합니다.</li>
        </ul>
      </>
    ),
  },
];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

function Feature({title, light, dark, description, feature}: FeatureItem) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center">
              <ThemedImage
                className={styles.featureImg}
                alt={title}
                sources={{
                  light: useBaseUrl(light),
                  dark: useBaseUrl(dark),
                }}
              />
            </div>
            <div className="text--center">
                <Heading as="h3" className={styles.featureTitle}><span>{title}</span></Heading>
                <p className={styles.featureDesc}>{description}</p>
            </div>
            <div className={styles.featureList}>
                {/*<h3>Features</h3>*/}
                {feature}
            </div>
        </div>
    );
}


export default function HomeFeatures(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="margin-bottom--lg text--center">FEATURES</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
