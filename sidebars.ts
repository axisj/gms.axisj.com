import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  baseSidebar: [
    'index',
    {
      type: 'category',
      label: '역도 GMS',
      collapsed: false,
      items: [
        'Weightlifting/introduction',
        {
          type: 'category',
          label: 'GMS 사용법',
          collapsed: false,
          items: [
            'Weightlifting/gms/gms-usage',
            'Weightlifting/gms/scoreboard',
            'Weightlifting/gms/progress-board',
            'Weightlifting/gms/referee-tablet',
            'Weightlifting/gms/timer',
            'Weightlifting/gms/admin'
          ],
        },
        {
          type: 'category',
          label: '역도 기본상식',
          collapsed: false,
          items: [
            'Weightlifting/info/about-weightlifting',
            'Weightlifting/info/wl-story',
            'Weightlifting/info/snatch-clean-jerk',
            'Weightlifting/info/ranking',
            'Weightlifting/info/score-mark',
            'Weightlifting/info/order-of-play',
            'Weightlifting/info/set-weight',
            'Weightlifting/info/plate',
            'Weightlifting/info/color',
            'Weightlifting/info/diameter-thickness',
            'Weightlifting/info/material-marking',
            'Weightlifting/info/tolerance',
            'Weightlifting/info/shoes-and-belt',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: '배드민턴',
    //   items: [
    //     'Badminton/introduction'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '축구',
    //   items: [
    //     'Soccer/introduction'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '로드사이클',
    //   items: [
    //     'Roadcycling/introduction'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '농구',
    //   items: [
    //     'Basketball/introduction'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '탁구',
    //   items: [
    //     'Tabletennis/introduction'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '볼링',
    //   items: [
    //     'Balling/introduction'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '골프',
    //   items: [
    //     'Golf/introduction'
    //   ],
    // },
  ]
};

export default sidebars;
