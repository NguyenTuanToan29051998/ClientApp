import { ModalType } from '@/models/sibhub';
import { SupportPackageType } from '@/models/support-package';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { checkBlueIcon } from '../../public/icons';
import styles from '../../styles/components/molecules/SupportPackages.module.scss';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import CustomTooltip from '../atoms/tooltips/CustomTooltip';
import SibModal from '../organisms/SibModal';

type PropsType = {
  supportPackage: SupportPackageType,
  isSelected?: boolean,
  showPopup?: boolean,
};

const SupportPackages: FC<PropsType> = (props) => {
  const { supportPackage, isSelected, showPopup } = props;
  const { name, benefits, id } = supportPackage;

  const trans = useTrans();
  const router = useRouter();
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });

  const handleSubmit = () => {
    if (showPopup) {
      setModalConfig({ show: true, mode: 'confirm' });
      return;
    }
    router.push(`/register/getSupports/${id}`);
  };

  return (
    <>
      <div className={isSelected ? `${styles.wrapper} ${styles.selected}` : styles.wrapper}>
        <h2 className={styles.title}>{name}</h2>
        <ul>
          {(JSON.parse(benefits.replace(/'/g, '"')) || []).map((subTitle: any) => (
            <CustomTooltip key={subTitle} tooltipValue={subTitle}>
              <li>{checkBlueIcon}&nbsp;&nbsp;{subTitle}</li>
            </CustomTooltip>
          ))}
        </ul>
        <div className={styles.button}>
          <SecondaryButton ariaLabel={'Đăng ký'} name={trans.home.register} onClick={handleSubmit} />
        </div>
      </div>

      <SibModal
        title={modalConfig.mode === 'confirm' ? trans.sibhubs.memberVerificationTitle : trans.requestSuccess}
        verifyRequest={`${trans.sibModal.advisor.verifyRequestStart} ${name} ${trans.sibModal.advisor.verifyRequestEnd}`}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />
    </>
  );
};

export default SupportPackages;
