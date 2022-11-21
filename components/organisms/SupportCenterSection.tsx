import { FC, useState } from 'react';
import Label from '../atoms/labels/Label';
import SupportCenterCard from '../molecules/SupportCenterCard';
import styles from '../../styles/components/organisms/SupportCenterSection.module.scss';
import SibModal from './SibModal';
import useTrans from '../../hooks/useTrans';
import { ModalType } from '@/models/sibhub';
import { useRouter } from 'next/router';

type DataType = {
  name: string,
  image: string,
  href: string,
  type?: number,
};

type PropType = {
  datas: DataType[],
  title: string
};

const SupportCenterSection: FC<PropType> = (props) => {
  const { datas, title } = props;
  const trans = useTrans();
  const router = useRouter();
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });

  const handleEvent = (value: DataType) => {
    switch (value.type) {
      case 1:
        router.push({ pathname: value.href, query: { breadCrumb: value.name } });
        break;
      case 2:
        // router.push(value.href);
        break;
      case 3:
        setModalConfig({ show: true, mode: 'confirm' });
        break;
      case 4:
        router.push({ pathname: value.href, query: { breadCrumb: value.name, typeAccess: 1 } });
        break;
      case 5:
        router.push({ pathname: value.href, query: { breadCrumb: value.name, typeAccess: 2 } });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mask} />
      <div className={styles.contentArea}>
        <Label title={title} />
        <div className={styles.scrollBar}>
          <div className={styles.cards}>
            {(datas || []).map((val) => (
              <div
                key={Math.random()}
                className={datas.length === 2 ? styles.card : styles.cardx}
                onClick={() => handleEvent(val)}
                onKeyDown={() => handleEvent(val)}
                role="presentation"
              >
                <SupportCenterCard isHover={val.type === 2} image={val.image} title={val.name} length={datas.length} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <SibModal
        title={modalConfig.mode === 'confirm' ? trans.sibModal.sibhub.title : trans.requestSuccess}
        verifyRequest={trans.sibModal.sibhub.verifyRequest}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />
    </div>
  );
};

export default SupportCenterSection;
