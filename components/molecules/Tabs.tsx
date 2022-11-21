import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from '../../styles/components/molecules/Tabs.module.scss';

type PropsType = {
  tabNames: string[];
  numberSelected: number;
  setNumberSelected: Dispatch<SetStateAction<number>>;
};

const Tabs: FC<PropsType> = (props) => {
  const { tabNames, numberSelected, setNumberSelected } = props;
  const router = useRouter();

  const handleSelected = (index: number) => {
    setNumberSelected(index);
    router.push({ pathname: router.pathname, query: { tabId: index } });
  };

  return (
    <div className={styles.btnScroll}>
      <div className="row">
        <div className={styles.newsCategory}>
          {tabNames.map((item, index) => {
            return (
              <div
                className={`${styles.news} ${numberSelected === index ? styles.isSelected : ''}`}
                role="button"
                onClick={() => handleSelected(index)}
                onKeyDown={() => handleSelected(index)}
                key={Math.random()}
                tabIndex={0}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
