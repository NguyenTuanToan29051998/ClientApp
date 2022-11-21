import { FC } from 'react';
import styles from '../../../styles/components/atoms/icons/Icon.module.scss';

type PropsType = {
  iconClose: boolean;
  onClick: () => Promise<boolean | void> | void;
};
const MenuIcon: FC<PropsType> = (props) => {
  const { onClick, iconClose } = props;
  let className = `${styles.iconmeunu} `;
  className += iconClose && styles.iconclose;

  return (
    <div onClick={onClick} onKeyDown={onClick} role="presentation" className={styles.hamburger}>
      <div className={className} />
      {iconClose && (<div className={styles.line}></div>)}
    </div>
  );
};

export default MenuIcon;
