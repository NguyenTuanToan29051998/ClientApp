import { ModalType } from '@/models/sibhub';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useTrans from '../../hooks/useTrans';
import {
  bagIcon,
  emailIconBlue,
  locationIcon,
  phoneIconBlue,
} from '../../public/icons';
import BackButton from '../atoms/buttons/BackButton';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import SibModal from '../organisms/SibModal';
import styles from '../../styles/components/templates/SIBAndSIBConnectionBody.module.scss';
import { SIBConnectType } from '@/models/SIB-connect';
import CustomTooltip from '../atoms/tooltips/CustomTooltip';

type PropType = {
  SIBConnectSupports: SIBConnectType[],
  SIBConnectNeedSupports: SIBConnectType[],
};

const MAX_WIDTH_MOBILE = 768;

const SIBAndSIBConnectionBody: NextPage<PropType> = (props) => {
  const { SIBConnectSupports, SIBConnectNeedSupports } = props;
  const router = useRouter();
  const trans = useTrans();
  const [tabSelected, setTabSelected] = useState<number>(0);
  const [resizePhoneNumber, setResizePhoneNumber] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });

  const getPathSendMail = (emailAdress: string) => {
    if (typeof window === 'undefined') return;
    return window.innerWidth < MAX_WIDTH_MOBILE
      ? `mailto:${emailAdress}?subject=${encodeURIComponent('') || ''}&body=${encodeURIComponent('') || ''}`
      : `https://mail.google.com/mail/u/0/?fs=1&to=${emailAdress}&tf=cm`;
  };

  const handlePhoneNumber = (phoneNumber: string) => {
    setResizePhoneNumber(true);
    setPhoneNumber(phoneNumber);
  };

  return (
    <>
      <div className="row">
        <div className="col-6 px-3 mt-4">
          <div
            className={`${styles.tabName} ${tabSelected === 0 ? styles.borderTab : ''}`}
            onClick={() => setTabSelected(0)}
            role="presentation"
          >
            {trans.sibNeedHelp}
          </div>
        </div>
        <div className="col-6 px-3 mt-4">
          <div
            className={`${styles.tabName} ${tabSelected === 1 ? styles.borderTab : ''}`}
            onClick={() => setTabSelected(1)}
            role="presentation"
          >
            {trans.sibCanHelp}
          </div>
        </div>
      </div>
      <div className="row">
        {(tabSelected === 0 ? SIBConnectNeedSupports : SIBConnectSupports || []).map(item => (
          <div className="col-xxl-6 col-12 col-lg-6 px-3 mt-4" key={Math.random()}>
            <div className={styles.posts}>
              <div className="d-flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  className={styles.imgSIBSupport}
                  alt={item.name}
                />
                <div>
                  <div className={styles.title}>{item.name}</div>
                  <div className="d-flex mt-2 gap-3">
                    <div className={styles.icon}>
                      {locationIcon}
                    </div>
                    <div className={styles.textColor}>
                      <CustomTooltip tooltipValue={`${trans.address}: ${item.address}`}>
                        <div className={styles.textTrunCate}>
                          {trans.address}: {item.address}
                        </div>
                      </CustomTooltip>
                    </div>
                  </div>
                  <div className="d-flex mt-2 gap-3">
                    <div className={styles.icon}>
                      {bagIcon}
                    </div>
                    <div className={styles.textColor}>
                      <CustomTooltip tooltipValue={`${trans.profession}: ${item.career}`}>
                        <div className={styles.textTrunCate}>
                          {trans.profession}: {item.career}
                        </div>
                      </CustomTooltip>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`mt-2 ${styles.textColor}`}>
                {tabSelected === 0 ? trans.contentNeedHelp : trans.contentCanHelp}
              </div>
              <div className={styles.contentWrap}>
                <div className={styles.content}>{item.content}</div>
              </div>
              <div className={`mt-4 ${styles.textColor}`}>
                {trans.contactInfo}
              </div>
              <div>
                <div className={`d-flex px-4 py-2 mt-2 gap-3 ${styles.bgColor}`} >
                  {emailIconBlue}
                  <a
                    className={styles.email}
                    target="_blank"
                    href={getPathSendMail(item.email) || ''}
                    rel="noreferrer"
                    aria-label="email"
                  >
                    {item.email}
                  </a>
                </div>
                <div className={`d-flex px-4 py-2 mt-3 gap-3 ${styles.bgColor}`}>
                  {phoneIconBlue}
                  <div
                    className={styles.phoneNumber}
                    onClick={() => handlePhoneNumber(item.phone)}
                    role="presentation"
                    aria-label="số điện thoại"
                  >
                    {item.phone}
                  </div>
                  <div
                    className={styles.phoneNumberMobile}
                    onClick={() => window.open(`tel:${item.phone}`, '_self')}
                    role="presentation"
                    aria-label="Số điện thoại"
                  >
                    {item.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2" />
      <div className="d-flex mt-4 pt-2">
        <div
          className="d-flex flex-fill gap-2 align-self-center"
          role="presentation"
        >
          <BackButton onClick={() => router.push({ pathname: '/home', query: { isScrollToSupportCenterSection: 'true' } }, undefined, { scroll: false })} content={trans.back} />
        </div>
        <div className="d-flex flex-row gap-2 justify-content-end gap-3">
          <SecondaryButton
            size="medium"
            onClick={() => setModalConfig({ show: true, mode: 'confirm' })}
            name={trans.post}
            ariaLabel="Bài viết"
          />
        </div>
      </div>

      <Modal show={resizePhoneNumber} size="lg" centered dialogClassName={styles.sibModal} onHide={() => setResizePhoneNumber(false)}>
        <div className={styles.wrapper}>
          <p
            className={styles.close}
            onClick={() => setResizePhoneNumber(false)}
            role="presentation"
            aria-label="Đóng"
          >
            {trans.close}
          </p>
          <div className={styles.phoneNumber}>{phoneNumber}</div>
        </div>
      </Modal>

      <SibModal
        title={modalConfig.mode === 'confirm' ? trans.sibModal.connection.title : trans.requestSuccess}
        verifyRequest={trans.sibModal.connection.verifyRequest}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />
    </>
  );
};

export default SIBAndSIBConnectionBody;
