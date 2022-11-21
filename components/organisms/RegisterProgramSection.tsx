import { FC } from 'react';
import SignupProgramCard from '../molecules/SignupProgramCard';
import useTrans from '../../hooks/useTrans';
import BreadCrumb from '../molecules/BreadCrumb';
import BackButton from '../atoms/buttons/BackButton';
import styles from '../../styles/components/organisms/RegisterProgramSection.module.scss';
import { useRouter } from 'next/router';

const RegisterProgramSection: FC = () => {
  const trans = useTrans();
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadCrumb}>
        <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={trans.signupSupport} />
      </div>
      <div className={styles.container} style={{ backgroundImage: `url(${trans.home.registerMember.programs.image})` }}>
        <div className={styles.cardArea}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <SignupProgramCard values={trans.home.registerMember.registerForSupport} background={'#E88E49'} />
            </div>
            <div className={styles.card}>
              <SignupProgramCard values={trans.home.registerMember.programs} />
            </div>
          </div>
          <div className={styles.btnArea}>
            <BackButton content={trans.back} onClick={() => router.back()} />
          </div>
        </div>
        <div className={styles.mask} />
      </div>
    </div>
  );
};

export default RegisterProgramSection;
