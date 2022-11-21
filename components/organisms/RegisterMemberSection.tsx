import { FC } from 'react';
import SignupProgramCard from '../molecules/SignupProgramCard';
import styles from '../../styles/components/organisms/RegisterMemberSection.module.scss';
import useTrans from '../../hooks/useTrans';

const RegisterMemberSection: FC = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardArea} style={{ backgroundImage: `url(${trans.home.registerMember.programs.image})` }}>
        <div className={styles.mask} />
        <div className={styles.card}>
          <SignupProgramCard values={trans.home.registerMember.programs} />
        </div>
      </div>
    </div>
  );
};

export default RegisterMemberSection;
