import { useRouter } from 'next/router';
import { ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import useTrans from '../../hooks/useTrans';
import useValidate from '../../hooks/useValidate';
import { closeFileIconDark, datepickerIcon } from '../../public/icons';
import styles from '../../styles/components/organisms/AdviserModal.module.scss';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputField from '../atoms/inputs/InputField';
import TextAreaField from '../atoms/inputs/TextAreaField';

const DEFAULT_VALUE = {
  enterpriseName: '',
  email: '',
  phoneNumber: '',
  consultationTime: '',
  consultingContent: '',
};

type PropTypes = {
  showModalAppointment: boolean,
  isHomePage?: boolean,
  setShowModalAppointment: Dispatch<SetStateAction<boolean>>,
};

type BookingInfor = {
  enterpriseName: string,
  email: string,
  phoneNumber: string,
  consultationTime: string,
  consultingContent: string,
}

const COMMENT_CONTENT_MAX_LENGTH = 300;

const NAME_MAX_LENGTH = 50;

const AdviserModal: FC<PropTypes> = (props) => {
  const { showModalAppointment, isHomePage, setShowModalAppointment } = props;
  const router = useRouter();
  const trans = useTrans();
  const inputDateRef = useRef<any>(null);
  const { isEmailInvalid, isPhoneNumberInvalid, isNumberInvalid } = useValidate();
  const [showValidate, setShowValidate] = useState<boolean>(false);
  const [bookingInfor, setBookingInfor] = useState<BookingInfor>(DEFAULT_VALUE);
  const [showModalCompleted, setShowModalCompleted] = useState<boolean>(false);

  const changeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name.includes('phoneNumber') && isNumberInvalid(value)) return;
    if (['enterpriseName'].includes(name) && value.length > NAME_MAX_LENGTH) return;
    if (name === 'consultingContent' && value.length > COMMENT_CONTENT_MAX_LENGTH) return;
    setBookingInfor({ ...bookingInfor, [name]: value });
  };

  const isDisableSubmit = () => {
    return !bookingInfor.enterpriseName.trim()
      || !bookingInfor.email
      || !bookingInfor.phoneNumber
      || isEmailInvalid(bookingInfor.email)
      || isPhoneNumberInvalid(bookingInfor.phoneNumber);
  };

  const handleSubmitForm = (event: any) => {
    if (event) event.preventDefault();
    setShowValidate(true);
    if (isDisableSubmit()) return;

    //TODO: submit form
    setShowModalCompleted(true);
    setShowValidate(false);
    setBookingInfor(DEFAULT_VALUE);
    setShowModalAppointment(false);
  };

  const onDateChange = (e: any) => {
    if (inputDateRef && inputDateRef?.current) {
      inputDateRef.current?.showPicker();
    }
    // setBookingInfor({...bookingInfor, consultationTime: inputDateRef.current!.value});
  };

  const toTimestamp = (strDate: string) => {
    var datum = Date.parse(strDate);
    return datum;
  };

  const isDateInvalid = () => {
    return toTimestamp(inputDateRef.current?.value) + 24 * 60 * 60 * 1000 < Date.now();
  };

  const handleCloseModal = () => {
    setBookingInfor(DEFAULT_VALUE);
    setShowModalAppointment(false);
    setShowValidate(false);
  };

  const handleClosePopup = () => {
    setShowModalCompleted(false);
    if (!isHomePage) router.push('/home');
  };

  return (
    <>
      {showModalAppointment ? (
        <Modal
          show={showModalAppointment}
          size="xl"
          centered
        // onHide={handleCloseModal}
        >
          <div className={styles.wrapperModal}>
            <p
              className={styles.close}
              onClick={handleCloseModal}
              role="presentation"
              aria-label="Đóng"
            >
              {trans.close}
            </p>
            <div className={styles.contentWrap}>
              <div className={styles.appointmentInfo}>
                {trans.sibhubs.appointmentInfo}
              </div>
              <form className="row mt-2">
                <div className="col-xxl-6 col-12 col-lg-6 mt-4">
                  <InputField
                    label={trans.sibhubs.companyName}
                    placeholder={trans.sibhubs.placeholderCompanyName}
                    required
                    value={bookingInfor.enterpriseName}
                    type={'text'}
                    name={'enterpriseName'}
                    onChange={(event) => changeForm(event)}
                    isError={showValidate && !bookingInfor.enterpriseName.trim()}
                    errorText={trans.requiredTextError}
                    ariaLabel="Tên doanh nghiệp"
                  />
                </div>
                <div className="col-xxl-6 col-12 col-lg-6 mt-4">
                  <InputField
                    label={trans.sibModal.emailAddress}
                    placeholder={trans.sibhubs.placeholderEmailAddress}
                    required
                    value={bookingInfor.email}
                    type={'text'}
                    name={'email'}
                    onChange={(event) => changeForm(event)}
                    isError={showValidate && (!bookingInfor.email || isEmailInvalid(bookingInfor.email))}
                    errorText={!bookingInfor.email ? trans.requiredTextError : trans.emailTextError}
                    ariaLabel="địa chỉ email"
                  />
                </div>
                <div className="col-xxl-6 col-12 col-lg-6 mt-4">
                  <InputField
                    label={trans.sibhubs.phoneNumber}
                    placeholder={trans.sibhubs.placeholderPhoneNumber}
                    required
                    value={bookingInfor.phoneNumber}
                    type={'text'}
                    name={'phoneNumber'}
                    onChange={(event) => changeForm(event)}
                    isError={showValidate && (!bookingInfor || isPhoneNumberInvalid(bookingInfor.phoneNumber))}
                    errorText={!bookingInfor.phoneNumber ? trans.requiredTextError : trans.phoneTextError}
                    ariaLabel="số điện thoại"
                  />
                </div>
                <div className="col-xxl-6 col-12 col-lg-6 mt-4">
                  <label htmlFor="consultationTime">
                    {trans.sibhubs.consultationTime}
                  </label>
                  <div className={styles.dateContainer}>
                    <input
                      className={isDateInvalid() ? `${styles.dateField} ${styles.errorField}` : styles.dateField}
                      value={bookingInfor.consultationTime}
                      placeholder={trans.sibhubs.chooseDate}
                      aria-label="Chọn thời gian"
                    />
                    <input
                      className={styles.dateMask}
                      type="date"
                      ref={inputDateRef}
                      onChange={() => setBookingInfor({ ...bookingInfor, consultationTime: inputDateRef.current!.value })}
                    />
                    <div className={styles.iconArea}>
                      <div className={styles.iconPicker}>{datepickerIcon}</div>
                      <div
                        className={styles.iconClose}
                        onClick={() => setBookingInfor({ ...bookingInfor, consultationTime: '' })}
                        role="presentation"
                      >
                        {closeFileIconDark}
                      </div>
                    </div>
                  </div>
                  {isDateInvalid() && (<span className={styles.errorText}>{trans.dateInvalid}</span>)}
                </div>
                <div className="col-12 mt-4">
                  <TextAreaField
                    label={trans.sibhubs.consultingContent}
                    placeholder={trans.sibhubs.fillDescription}
                    value={bookingInfor.consultingContent}
                    type={'text'}
                    maxLenght={COMMENT_CONTENT_MAX_LENGTH}
                    name={'consultingContent'}
                    onChange={(event) => changeForm(event)}
                  />
                </div>
                <div className={styles.btnArea}>
                  <SecondaryButton
                    name={trans.register}
                    ariaLabel="Đăng ký"
                    onClick={(event: void) => handleSubmitForm(event)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal
          show={showModalCompleted}
          size="lg"
          dialogClassName={styles.sibModal}
          centered>
          <div className={styles.wrapperModal}>
            <p
              className={styles.close}
              onClick={() => setShowModalCompleted(false)}
              role="presentation"
              aria-label="Đóng"
            >
              {trans.close}
            </p>
            <div className={styles.contentWrap}>
              <div className={styles.appointmentInfo}>
                {trans.sibhubs.completeRegisterTitle}
              </div>
              <p className={styles.content}>{trans.sibhubs.completeRegister}</p>
              <div className={styles.btnArea}>
                <SecondaryButton name={isHomePage ? trans.complete : trans.sibhubs.backToHomePage} onClick={handleClosePopup} ariaLabel="Quay lại trang chủ" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AdviserModal;
