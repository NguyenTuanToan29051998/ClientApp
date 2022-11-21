import type { NextPage } from 'next';
import Header from '../organisms/Header';
import styles from '../../styles/MasterPage.module.scss';
import { useRouter } from 'next/router';
import useTrans from '../../hooks/useTrans';

const MasterPage: NextPage = () => {
  const router = useRouter();
  const trans = useTrans();

  const handleChooseTypeUser = (type: string) => {
    localStorage.setItem('type-user', type || '');
    router.push('/home');
  };

  return (
    <>
      <div className="container mt-4 pt-1">
        <Header isMasterPage />
        <div className={`row ${styles.wrap}`}>
          <div className={`col-sm-9 col-md-8 mx-auto text-center ${styles.imgWrapper}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/LOGO-PARTNER-01.svg" width="180" height="130" alt="main-logo" />
            <div className={styles.wrapIntro}>
              <p className={styles.introduce}>{trans.master.title_1}</p>
              <p className={styles.introduce}>{trans.master.title_2}</p>
              <p className={styles.introduce}>{trans.master.title_3}</p>
            </div>
          </div>
          <div className="mb-4">
            <div className={styles.typeUser}>{trans.master.youAre}&nbsp;<span className={styles.text}>{trans.master.who}</span>?</div>
            <div className="mt-2 text-center">{trans.master.desc}</div>
            <div className={styles.contentClassify}>
              <div className={`${styles.box} ${styles.classifyEnterprise}`} onClick={() => handleChooseTypeUser('0')} onKeyDown={() => {}} role="link" tabIndex={0} aria-label={trans.SIB}>
                <div className={styles.title}>{trans.SIB}</div>
                <div className={styles.numericalOrder} />
              </div>
              <div className={`${styles.box} ${styles.classifyUnit}`} onClick={() => handleChooseTypeUser('1')} onKeyDown={() => {}} role="link" tabIndex={0} aria-label={trans.intermediaries}>
                <div className={styles.title}>{trans.intermediaries}</div>
                <div className={styles.numericalOrder} />
              </div>
              <div className={`${styles.box} ${styles.classifyOrgan}`} onClick={() => handleChooseTypeUser('2')} onKeyDown={() => {}} role="link" tabIndex={0} aria-label={trans.policyMaker}>
                <div className={styles.title}>{trans.policyMaker}</div>
                <div className={styles.numericalOrder} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterPage;
