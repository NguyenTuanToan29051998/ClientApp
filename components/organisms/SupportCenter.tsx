import { FC } from 'react';
import Label from '../atoms/labels/Label';
import styles from '../../styles/components/organisms/SupportCenter.module.scss';
import useTrans from '../../hooks/useTrans';
import Link from 'next/link';

const SupportCenterSIBIntermediaries: FC = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className="section-container">
        <Label title={trans.home.SIBsupportCenter} />
      </div>
      <Link href="/sibhubs" passHref>
        <a className={styles.card} href="replace">
          <div className={`${styles.BannerSib1} ${styles.flexRowReverse}`}>
            <div className={styles.bannerText1}>01</div>
            <div className={styles.bannerText2}>SIB HUB</div>
          </div>
          <div className={styles.BannerTab} />
          <div
            className={styles.BannerSib2}
            style={{ backgroundImage: `url("/assets/sib1.jpg")` }}
            role="img"
            aria-label="sib img"
          />
        </a>
      </Link>
      <Link href="/sibhubs/connects" passHref>
        <a className={`${styles.flexColumn} ${styles.card}`} href="replace">
          <div className={styles.BannerSib1}>
            <div className={styles.bannerText1}>02</div>
            <div className={styles.bannerText2}>{trans.home.connectRequest}</div>
          </div>
          <div className={styles.BannerTab} />
          <div
            className={styles.BannerSib2}
            style={{ backgroundImage: `url("/assets/sib2.png")` }}
            role="img"
            aria-label="sib img"
          />
        </a>
      </Link>
    </div>
  );
};

export default SupportCenterSIBIntermediaries;
