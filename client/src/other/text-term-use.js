import { useTranslation } from 'react-i18next';

export default () => {
  const [t, i18n] = useTranslation('term-use');
  return [
    {
      text1: [
        {
          head: t('step1.info2.text1.head'),
          body: t('step1.info2.text1.head'),
          iter: 1
        },
        {
          head: t('step1.info2.text2.head'),
          body: t('step1.info2.text2.body'),
          iter: 2
        },
        {
          head: t('step1.info2.text3.head'),
          body: t('step1.info2.text3.body'),
          iter: 3
        },
      ],
    },
    {
      text2: [
        {
          head: t('step1.info1.text1.head'),
          body: t('step1.info1.text1.body'),
          iter: 4
        },
        {
          head: t('step1.info1.text2.head'),
          body: t('step1.info1.text2.body'),
          iter: 5
        },
        {
          head: t('step1.info1.text3.head'),
          body: t('step1.info1.text3.body'),
          iter: 6
        },
      ],
    },
  ];
};
