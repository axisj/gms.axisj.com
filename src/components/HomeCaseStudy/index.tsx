import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ReactPlayer from 'react-player';
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import ResponsiveEmbed from "react-responsive-embed";

export default function HomeCaseStudy(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="margin-bottom--lg text--center">GMS 도입사례</h2>
        <div className="row">

          <div className={clsx('col col--5')}>
            <div class={styles.youtubeWrap}>
              <ResponsiveEmbed src='https://www.youtube.com/embed/ia9_LKjaEIc?si=UsTnwlx6zfVoyLxV' ratio='16:9' className={styles.youtube} />
            </div>
          </div>
          <div className={clsx('col col--7')}>
            <div className={styles.csDesc}>
              <h2>2024 서천 동앙시아 역도 대회</h2>
              <p>
                서천 동아시아 역도 대회는 GMS 역도 솔루션을 도입하여 경기 운영의 효율성을 극대화하고, 경기 경험을 혁신적으로 개선했습니다. GMS를 통해 선수들의 기록이
                실시간으로 반영되어 대형 디스플레이를 통해 관중들에게 즉각적으로 전달되었으며, 심판과 운영진은 태블릿을 활용해 신속하고 정확하게 경기를 진행할 수 있었습니다. 이러한 실시간 데이터 처리와 운영 간소화로
                대회 진행이 더욱 원활해졌고, 관중들의 경기 몰입도 또한 크게 향상되었습니다.
              </p>
              <p>
                또한, GMS 솔루션은 설치와 유지보수 비용을 줄이면서도 안정적인 시스템 운영을 가능하게 했습니다. 선수와 운영진 모두 높은 만족도를 보였으며, 서천 동아시아 역도 대회는 GMS 도입으로 성공적인 경기
                운영을 선보였습니다.
              </p>
              <a href="#" className={styles.csButton}>사례 자세히 보기 ...</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
