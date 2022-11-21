import { FC, useEffect } from 'react';
import useTrans from '../../hooks/useTrans';
import Title from '../atoms/titles/Title';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import { useRouter } from 'next/router';
import styles from '../../styles/components/organisms/CompleteRegistration.module.scss';

type PropTypes = {
  pageName: string;
  completeSubTitle: string;
  completeDesc?: string;
  textCenter?: boolean;
};

const CompleteRegistration: FC<PropTypes> = (props) => {
  const { pageName, completeSubTitle, completeDesc, textCenter } = props;
  const router = useRouter();
  const trans = useTrans();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title name={pageName} size={'large'} isUpperCase />
      <hr className="mb-4 pb-2" />
      <h4 className={`${styles.title} ${textCenter ? styles.textCenter : ''}`}>{completeSubTitle}</h4>
      <p className={styles.desc}>{completeDesc}</p>
      <div className={styles.btnArea}>
        <SecondaryButton name={trans.registerSIBHub.returnToHome} onClick={() => router.push('/home')} ariaLabel={'Quay lại trang chủ'} />
      </div>
    </div>
  );
};

export default CompleteRegistration;
