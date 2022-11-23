import { FC } from 'react';
import InformationTag from '../molecules/ InformationTag';
import styles from '../../styles/components/organisms/SupportInformationSection.module.scss';
import useTrans from '../../hooks/useTrans';

type PropTypes = {
  informations: { title: string, icon: JSX.Element, href?: string }[];
  isPolicyMaker?: boolean;
}

const SupportInformationSection: FC<PropTypes> = (props) => {
  const { informations, isPolicyMaker } = props;
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Luyện tập TOEIC miễn phí 2022</h2>
      <div className={styles.cards}>
        {(informations || []).map((val, index) => (
          <InformationTag
            key={val.title}
            title={val.title}
            icon={val.icon}
            color={isPolicyMaker ? '#0D4989' : '#80A618'}
            href={val.href || ''}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SupportInformationSection;
