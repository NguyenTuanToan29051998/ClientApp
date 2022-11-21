import { useRouter } from 'next/router';
import { FC } from 'react';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/molecules/BreadCrumb.module.scss';

type PropsType = {
  firstLayer: string;
  firstPath?: string;
  secondLayer?: string;
  secondPath?: string;
  lastLayer: string;
};

const BreadCrumb: FC<PropsType> = (props) => {
  const { firstLayer, lastLayer, secondLayer, firstPath, secondPath } = props;
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollArea}>
        <span
          onClick={firstPath ? (() => router.push(firstPath, undefined, { shallow: true })) : (() => router.back())}
          onKeyDown={firstPath ? (() => router.push(firstPath, undefined, { shallow: true })) : (() => router.back())}
          role="presentation"
        >
          {firstLayer}
        </span>
        <span>{angleRightIcon}</span>
        {secondPath && secondLayer && (
          <>
            <span onClick={() => router.push(secondPath)} onKeyDown={() => router.push(secondPath)} role="presentation">{secondLayer}</span>
            <span>{angleRightIcon}</span>
          </>
        )}
        <span>{lastLayer}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
