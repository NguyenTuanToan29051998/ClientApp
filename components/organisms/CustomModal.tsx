import { FC, ReactNode } from 'react';
import { Modal } from 'react-bootstrap';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/CustomModal.module.scss';

type PropTypes = {
  title: string;
  show: boolean;
  setShow: (modalConfig: any) => void;
  children: ReactNode;
};

const CustomModal: FC<PropTypes> = (props) => {
  const { title, show, setShow, children } = props;
  const trans = useTrans();

  return (
    <Modal show={show} size="lg" centered dialogClassName={styles.customModal}>
      <div className={styles.wrapper}>
        <p
          className={styles.close}
          onClick={() => setShow(false)}
          onKeyDown={() => setShow(false)}
          role="presentation"
        >
          {trans.close}
        </p>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
