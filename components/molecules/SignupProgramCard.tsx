import { useRouter } from 'next/router';
import { FC } from 'react';
import useTrans from '../../hooks/useTrans';
import { checkIcon } from '../../public/icons';
import styles from '../../styles/components/molecules/SignupProgramCard.module.scss';
import WhileButton from '../atoms/buttons/WhileButton';

type PropsType = {
  values: { title: string, subTitles: string[], href: string },
  background?: string;
};

const SignupProgramCard: FC<PropsType> = (props) => {
  const router = useRouter();
  const { values, background } = props;
  const { title, subTitles, href } = values;
  const trans = useTrans();

  return (
    <div className={styles.wrapper} style={{ backgroundColor: background }}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subTitle}>
        {subTitles.map((subTitle) => (
          <p key={subTitle}>{checkIcon}&nbsp;&nbsp;{subTitle}</p>
        ))}
      </div>
      <div className={styles.buttonArea}>
        <WhileButton name={trans.home.register} onClick={() => router.push(href)} />
      </div>
    </div>
  );
};

export default SignupProgramCard;
