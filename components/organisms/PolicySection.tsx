import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import TransparentButton from '../atoms/buttons/TransparentButton';
import SectionContainer from '../molecules/SectionContainer';
import Link from 'next/link';
import styles from '../../styles/components/organisms/PolicySection.module.scss';
import useTrans from '../../hooks/useTrans';
import router from "next/router";
import { PolicyType } from '@/models/policy';
import useFormat from '../../hooks/useFormat';

type PropTypes = {
  policyList: PolicyType[],
}
const COUNT_MINI_CARD = 3;

const PolicySection: FC<PropTypes> = (props) => {
  const { policyList } = props;
  const trans = useTrans();
  const { formatDate } = useFormat();
  const buttons = [
    {
      icon: '/assets/policy-1.svg',
      name: trans.policy.question,
      href: '/policyMaker/questions',
    },
    {
      icon: '/assets/policy-2.svg',
      name: trans.policy.form,
      href: '/policyMaker/collect',
    },
  ];
  const [newsValues, setNewsValues] = useState<PolicyType[] | null>(null);
  useEffect(() => {
    const values = [...policyList];
    values.length = policyList.length > COUNT_MINI_CARD ? COUNT_MINI_CARD : policyList.length;
    setNewsValues(values);
  }, [policyList]);

  return (
    <SectionContainer label={trans.policy.title}>
      <div className={styles.wrapper}>
        <div className={styles.leftArea}>
          {(newsValues || []).map((val, index) => (
            <div key={Math.random()} className={styles.content} onClick={() => router.push({ pathname: `/policyMaker/policy/${val.id}`, query: { page: trans.homePage }})} role="presentation">
              <p className={styles.time}>{formatDate(val.createdAt || '')}</p>
              <h5 className={styles.title}>{val.title}</h5>
            </div>
          ))}
          <div className={styles.buttonArea}>
            <TransparentButton name={trans.policy.btn} ariaLabel={'Xem thêm chính sách'} onClick={() => router.push({ pathname: `/policyMaker/policy`, query: { page: trans.homePage, isPolicy: true }})} isRouter />
          </div>
        </div>
        <div className={styles.rightArea}>
          {buttons.map((val) => (
            <Link key={val.href} href={val.href} passHref>
              <a href="replace" className={styles.card}>
                <Image src={val.icon} alt={val.name} width={220} height={120} />
                <h3 className={styles.name}>{val.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PolicySection;
