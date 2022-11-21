import Link from 'next/link';
import { FC } from 'react';
import useTrans from '../../hooks/useTrans';
import { linkIcon } from '../../public/icons';
import styles from '../../styles/components/molecules/SupportCenterCard.module.scss';

type PropsType = {
  image: string,
  title: string,
  length: number,
  isHover?: boolean,
};

const SupportCenterCard: FC<PropsType> = (props) => {
  const { image, title, length, isHover } = props;
  const trans = useTrans();

  const styleImage = {
    backgroundImage: `url("${image}")`,
    paddingBottom: length === 2 ? '40%' : '75%',
  };

  return (
    <div className={isHover ? `${styles.wrapper} ${styles.hoverArea}` : styles.wrapper}>
      <div className={styles.image} style={styleImage} role="img" aria-label={title} />
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.subTitle}>
        <li>
          <Link href={'/sibhubs/connects'} passHref>
            <a href="replace">{linkIcon}Kết nối SIB & SIB</a>
          </Link>
        </li>
        <li>
          <Link href={'/sibhubs/supports'} passHref>
            <a href="replace">{linkIcon}Kết nối với dự án</a>
          </Link>
        </li>
        <li>
          <Link href={'/sibhubs/experts'} passHref>
            <a href="replace">{linkIcon}{trans.connectExperts}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SupportCenterCard;
