import { EventTypes } from '@/models/event';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import useFormat from '../../hooks/useFormat';
import useTrans from '../../hooks/useTrans';
import useValidate from '../../hooks/useValidate';
import { PHONE_NUMBER_REG } from '../../public/const';
import { datepickerIcon1, locationIcon1 } from '../../public/icons';
import styles from '../../styles/components/templates/MediaEventBodyDetail.module.scss';
import BackPreviousPage from '../atoms/BackPreviousPage';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputField from '../atoms/inputs/InputField';

const ENTERPRISE_NAME_MAX_LENGTH = 50;

type registerEventInfo = {
  enterpriseName: string;
  email: string;
  phoneNumber: string;
};

type ModalType = {
  isOpen: boolean,
  mode: 'register' | 'confirm' | '',
};

type PropTypes = {
  event: EventTypes,
};

const MediaEventBodyDetail: NextPage<PropTypes> = (props) => {
  const { event } = props;
  const router = useRouter();
  const trans = useTrans();
  const { formatDate, formatShortDate } = useFormat();
  const { isEmailInvalid, isPhoneNumberInvalid, isNumberInvalid } = useValidate();
  const { page } = router.query;

  const [registerEventInfo, setRegisterEventInfo] = useState<registerEventInfo>({
    enterpriseName: '',
    email: '',
    phoneNumber: '',
  });
  const [showValidate, setShowValidate] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalType>({
    isOpen: false,
    mode: '',
  });

  const handleEnterpriseName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  };

  const handleChangeForm = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.includes('enterpriseName') && value.length > ENTERPRISE_NAME_MAX_LENGTH) return;
    if (name.includes('phoneNumber') && isNumberInvalid(value)) return;
    setRegisterEventInfo({ ...registerEventInfo, [name]: value });
  };

  const handleCloseModal = () => {
    setRegisterEventInfo({
      enterpriseName: '',
      email: '',
      phoneNumber: '',
    });
    setShowValidate(false);
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  const handleRegister = () => {
    setShowValidate(true);
    if (
      !registerEventInfo.enterpriseName.trim() ||
      !registerEventInfo.email ||
      !registerEventInfo.phoneNumber ||
      isEmailInvalid(registerEventInfo.email) ||
      isPhoneNumberInvalid(registerEventInfo.phoneNumber)
    ) {
      return;
    }
    if (modalConfig.mode === 'confirm') router.push('/home');
    setModalConfig({ ...modalConfig, mode: 'confirm' });
  };

  return (
    <div className="mt-4">
      <div className={styles.wrapper}>
        <div>
          <div className={styles.date}>{formatDate(event.startDate)}</div>
          <div className={styles.title}>{event.title}</div>
          <div>
            <div className={styles.image}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={event.thumbnail} alt={event.altImage} width="100%" />
            </div>
            <div className={styles.content}>
              {event.content}
            </div>
            <div className={styles.infoEvents}>
              <p className={styles.title}>{trans.informationEvents}</p>
              <div className={styles.timeWrapper}>
                <div>{datepickerIcon1}</div>
                <div className={styles.time}>{trans.time}: {formatShortDate(event.startDate)} - {formatShortDate(event.finishDate)}</div>
              </div>
              <div className={styles.addressWrapper}>
                <div>{locationIcon1}</div>
                <div className={styles.address}>{trans.location}: {event.location}</div>
              </div>
              <div className={styles.btnArea}>
                <SecondaryButton name={trans.registerEvent} onClick={() => setModalConfig({ ...modalConfig, isOpen: true, mode: 'register' })} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.back}>
          <BackPreviousPage title={trans.back} onClick={() => router.push(`${page === 'Trang chủ' ? '/home?isScrollToEvents=true' : '/media/events'}`)} />
        </div>
      </div>
      <Modal show={modalConfig.isOpen} centered dialogClassName={styles.sibModal}>
        <div className={`d-flex flex-row-reverse ${styles.close}`} onClick={handleCloseModal} role="presentation">Đóng</div>
        <div className={styles.formRegister}>
          {modalConfig.mode === 'register' && (
            <>
              <div className={styles.title}>{trans.sibhubs.fillInfo}</div>
              <div className={styles.inpWrap}>
                <InputField
                  label={trans.sibhubs.companyName}
                  placeholder={trans.sibhubs.placeholderCompanyName}
                  required
                  value={registerEventInfo.enterpriseName}
                  type={'text'}
                  name={'enterpriseName'}
                  onChange={(event) => handleChangeForm(event)}
                  isError={showValidate && !registerEventInfo.enterpriseName.trim()}
                  errorText={trans.requiredTextError}
                  ariaLabel="Tên doanh nghiệp"
                />
              </div>
              <div className="mt-3">
                <InputField
                  label={trans.sibModal.emailAddress}
                  placeholder={trans.sibhubs.placeholderEmailAddress}
                  required
                  value={registerEventInfo.email}
                  type={'text'}
                  name={'email'}
                  onChange={(event) => handleChangeForm(event)}
                  isError={showValidate && (!registerEventInfo.email || isEmailInvalid(registerEventInfo.email))}
                  errorText={!registerEventInfo.email ? trans.requiredTextError : trans.emailTextError}
                  ariaLabel="Địa chỉ email"
                />
              </div>
              <div className="mt-3">
                <InputField
                  label={trans.sibhubs.phoneNumber}
                  placeholder={trans.sibhubs.placeholderPhoneNumber}
                  required
                  value={registerEventInfo.phoneNumber}
                  type={'text'}
                  name={'phoneNumber'}
                  onChange={(event) => handleChangeForm(event)}
                  isError={showValidate && (!registerEventInfo.phoneNumber || !PHONE_NUMBER_REG.test(registerEventInfo.phoneNumber))}
                  errorText={!registerEventInfo.phoneNumber ? trans.requiredTextError : trans.phoneTextError}
                  ariaLabel="Số điện thoại"
                />
              </div>
            </>
          )}
          {modalConfig.mode === 'confirm' && (
            <>
              <div className={styles.title}>{trans.sibhubs.regisSuccess}</div>
              <div className={styles.inpWrap}>
                {trans.sibhubs.verifyRequest}
              </div>
            </>
          )}
          <div className={styles.btnRegister} >
            <SecondaryButton name={modalConfig.mode === 'register' ? trans.register : trans.sibhubs.backToHomePage} onClick={handleRegister} />
          </div>
        </div>

      </Modal>
      <div className={styles.distanceFooter} />
    </div>
  );
};

export default MediaEventBodyDetail;
