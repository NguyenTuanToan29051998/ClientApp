import { FC, useState } from 'react';
import ProjectAdvisorCard from '../molecules/ProjectAdvisorCard';
import BackButton from '../atoms/buttons/BackButton';
import useTrans from '../../hooks/useTrans';
import { useRouter } from 'next/router';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
// import AdviserModal from '../organisms/AdviserModal';
import styles from '../../styles/components/templates/InformationAdvisorBody.module.scss';
import { AdvisorType } from '@/models/advisor';
import { ModalType } from '@/models/sibhub';
import SibModal from '../organisms/SibModal';

type PropsType = {
  advisor: AdvisorType,
  isAdvisor?: boolean,
};

const InformationAdvisorBody: FC<PropsType> = (props) => {
  const { advisor, isAdvisor } = props;
  const router = useRouter();
  const trans = useTrans();
  // const [showModalAppointment, setShowModalAppointment] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });

  const handleConnectAdvisor = () => {
    // if (isAdvisor && advisor.isFreeConnect) {
    //   setShowModalAppointment(true);
    //   return;
    // }
    setModalConfig({ show: true, mode: 'confirm' });
  };

  return (
    <div className={styles.advisorBody}>
      <div className={styles.advisorImage}>
        <ProjectAdvisorCard
          title={advisor.name}
          subTitle={advisor.profession}
          image={advisor.avatar}
          textAlign={''}
        />
      </div>
      <p className={`mb-5 mt-5 ${styles.advisorContent}`}>{advisor.description}</p>
      <div className="d-flex justify-content-between">
        <div className={styles.btnBack}>
          <BackButton content={trans.back} onClick={() => router.back()} />
        </div>
        <div className={styles.btnNext}>
          <SecondaryButton
            size="medium"
            type="submit"
            aria-label="Gửi"
            name={trans.connect}
            onClick={handleConnectAdvisor}
          />
        </div>
      </div>
      {/* <AdviserModal showModalAppointment={showModalAppointment} setShowModalAppointment={setShowModalAppointment} /> */}
      <SibModal
        title={modalConfig.mode === 'confirm' ? `${trans.sibModal.advisor.title} ${advisor?.name}` : trans.requestSuccess}
        verifyRequest={`${trans.sibModal.advisor.verifyRequestStart} ${advisor?.name} ${trans.sibModal.advisor.verifyRequestEnd}`}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />
    </div>
  );
};
export default InformationAdvisorBody;
