import Link from 'next/link';
import { FC, useState } from 'react';
import styles from '../../styles/components/molecules/CustomTabs.module.scss';

type PropsType = {
  tabValues: { id: number, name: string, path: string }[],
  selected: number,
};

const CustomTabs: FC<PropsType> = (props) => {
  const { tabValues, selected } = props;

  return (
    <div className={styles.btnScroll}>
      <div className={styles.tabArea}>
        {tabValues.map((item, index) => (
          <Link key={item.id} href={item.path} passHref>
            <a className={`${styles.tab} ${selected === index && styles.selected}`} href="replace">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;
