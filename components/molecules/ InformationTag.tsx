import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from '../../styles/components/molecules/InformationTag.module.scss';

type PropsType = {
  title: string;
  icon: JSX.Element;
  color: string;
  href: string;
  id: number;
};

const InformationTag: FC<PropsType> = (props) => {
  const { title, icon, color, href, id } = props;

  return (
    <Link href={{ pathname: href, query: { tabId: id } }} passHref>
      <a href="replace" className={styles.wrapper}>
        <div className={styles.icon}>
          {icon}
        </div>
        <h5 className={styles.name}>{title}</h5>
      </a>
    </Link>
  );
};

export default InformationTag;
