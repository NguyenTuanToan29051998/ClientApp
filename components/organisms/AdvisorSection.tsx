import { FC, useState } from 'react';
import Label from '../atoms/labels/Label';
import AdvisorCard from '../molecules/AdvisorCard';
import TransparentButton from '../atoms/buttons/TransparentButton';
import useTrans from '../../hooks/useTrans';
// import AdviserModal from './AdviserModal';
import { useRouter } from 'next/router';
import styles from '../../styles/components/organisms/AdvisorSection.module.scss';
import { ModalType } from '@/models/sibhub';
import SibModal from './SibModal';
import { AdvisorType } from '@/models/advisor';

type PropTypes = {
  advisors: AdvisorType[],
}

const AdvisorSection: FC<PropTypes> = (props) => {
  const { advisors } = props;
  const trans = useTrans();
  const router = useRouter();
  // const [showModalAppointment, setShowModalAppointment] = useState<boolean>(false);
  const [currentAdvisor, setCurrentAdvisor] = useState<AdvisorType | null>(null);
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });

  const handleConnectAdvisor = (advisor: AdvisorType) => {
    setCurrentAdvisor(advisor);
    // if (advisor.isFreeConnect) {
    //   setShowModalAppointment(true);
    //   return;
    // }
    setModalConfig({ show: true, mode: 'confirm' });
  };

  return (
    <div className={styles.wrapper}>
      <div className="section-container pt-5">
        <Label title={trans.home.projectAdvisor} />
      </div>
      <div className={styles.cards}>
        {(advisors.slice(0, 3) || []).map((advisor, index) => (
          <AdvisorCard
            key={advisor.id}
            advisorValue={advisor}
            index={index}
            onClick={() => handleConnectAdvisor(advisor)}
          />
        ))}
      </div>
      <div className={styles.buttonArea}>
        <TransparentButton name={trans.home.seeMoreAdvisor} onClick={() => router.push('/home/advisors')} isRouter />
      </div>

      <SibModal
        title={modalConfig.mode === 'confirm' ? `${trans.sibModal.advisor.title} ${currentAdvisor?.name}` : trans.requestSuccess}
        verifyRequest={`${trans.sibModal.advisor.verifyRequestStart} ${currentAdvisor?.name} ${trans.sibModal.advisor.verifyRequestEnd}`}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />

      {/* <AdviserModal showModalAppointment={showModalAppointment} setShowModalAppointment={setShowModalAppointment} isHomePage /> */}
    </div>
  );
};

export default AdvisorSection;
