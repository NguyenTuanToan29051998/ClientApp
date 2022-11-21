import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import ProjectAdvisorCard from '../molecules/ProjectAdvisorCard';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import BackButton from '../atoms/buttons/BackButton';
import SibModal from '../organisms/SibModal';
import { useState } from 'react';
import styles from '../../styles/components/templates/AdvisorsBody.module.scss';
import useTrans from '../../hooks/useTrans';
// import AdviserModal from '../organisms/AdviserModal';
import { AdvisorType } from '@/models/advisor';

type PropsType = {
  advisors: AdvisorType[],
  isAdvisor?: boolean,
};

type ModalType = {
  show: boolean,
  mode: string,
}

const AdvisorBody: NextPage<PropsType> = (props) => {
  const { advisors, isAdvisor } = props;
  const router = useRouter();
  const trans = useTrans();
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });
  // const [showModalAppointment, setShowModalAppointment] = useState<boolean>(false);
  const [currentAdvisor, setCurrentAdvisor] = useState<AdvisorType | null>(null);

  const handleConnectAdvisor = (advisor: AdvisorType) => {
    setCurrentAdvisor(advisor);
    // if (advisor.isFreeConnect && isAdvisor) {
    //   setShowModalAppointment(true);
    //   return;
    // }
    setModalConfig({ show: true, mode: 'confirm' });
  };

  const viewDetail = (id: number) => {
    router.push(isAdvisor ? `/home/advisors/${id}` : `/sibhubs/experts/${id}`);
  };

  return (
    <>
      <div className="row">
        {(advisors || []).map((advisor) => (
          <div key={advisor.id} className={`col-lg-4 col-md-6 ${styles.advisor}`}>
            <div
              className="mb-4 w-100"
              onClick={() => viewDetail(advisor.id)}
              onKeyDown={() => viewDetail(advisor.id)}
              role="presentation"
            >
              <ProjectAdvisorCard
                image={advisor.avatar}
                title={advisor.name}
                subTitle={advisor.profession}
                textAlign={'text-left'}
              />
            </div>
            <div className={styles.button}>
              <SecondaryButton onClick={() => handleConnectAdvisor(advisor)} name={'Kết nối'} ariaLabel="Kết nối" />
            </div>
          </div>
        ))}
        <div className={styles.distanceFooter} />
      </div>

      <div className={styles.btnArea}>
        <BackButton onClick={() => router.push({ pathname: '/home', query: isAdvisor ? { isScrollAdvisorSection: 'true' } : { isScrollToSupportCenterSection: 'true' } }, undefined, { scroll: false })} content={trans.back} />
      </div>

      <SibModal
        title={modalConfig.mode === 'confirm' ? `${trans.sibModal.advisor.title} ${currentAdvisor?.name}` : trans.requestSuccess}
        verifyRequest={`${trans.sibModal.advisor.verifyRequestStart} ${currentAdvisor?.name} ${trans.sibModal.advisor.verifyRequestEnd}`}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />

      {/* <AdviserModal showModalAppointment={showModalAppointment} setShowModalAppointment={setShowModalAppointment} /> */}
    </>
  );
};

export default AdvisorBody;
