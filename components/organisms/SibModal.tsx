import { ModalType } from '@/models/sibhub';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Modal } from 'react-bootstrap';
import useTrans from '../../hooks/useTrans';
import useValidate from '../../hooks/useValidate';
import { docsIcon } from '../../public/icons';
import styles from '../../styles/components/organisms/SibModal.module.scss';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputField from '../atoms/inputs/InputField';
import RadioButton from '../atoms/radiobuttons/RadioButton';

const MAX_LENGHT = 50;

type PropTypes = {
  title: string;
  verifyRequest: string;
  modalConfig: ModalType;
  setModalConfig: Dispatch<SetStateAction<ModalType>>;
  pathFile?: string;
  nameFile?: string;
};

const SibModal: FC<PropTypes> = (props) => {
  const { title, verifyRequest, modalConfig, setModalConfig, pathFile, nameFile } = props;
  const router = useRouter();
  const trans = useTrans();
  const { isEmailInvalid } = useValidate();
  const [memberTypeSelecter, setMemberTypeSelecter] = useState<string>('');
  const [connectForm, setConnectForm] = useState({
    companyName: '',
    email: '',
  });
  const [showError, setShowError] = useState<boolean>(false);

  const handleChangeForm = (event: any) => {
    const { name, value } = event.target;
    if (name.includes('companyName') && value.length > MAX_LENGHT) return;
    setConnectForm({ ...connectForm, [name]: value });
  };

  const isEmailAdressInvalid = () => {
    return !connectForm.email || isEmailInvalid(connectForm.email);
  };

  const handleCloseModal = () => {
    setModalConfig({ show: false, mode: '' });
    setConnectForm({ companyName: '', email: '' });
    setMemberTypeSelecter('');
    setShowError(false);
  };

  const handleSubmitModal = () => {
    setShowError(true);
    if (memberTypeSelecter.includes('member')) {
      if (isEmailAdressInvalid()) return;
      setModalConfig({ show: true, mode: 'result' });
      setConnectForm({ companyName: '', email: '' });
      setMemberTypeSelecter('');
      setShowError(false);
      return;
    };
    router.push('/sibhubs/register');
  };

  return (
    <Modal show={modalConfig.show} size="lg" centered dialogClassName={styles.sibModal}>
      <div className={styles.wrapper}>
        <p
          className={styles.close}
          onClick={handleCloseModal}
          onKeyDown={handleCloseModal}
          role="presentation"
        >
          {trans.close}
        </p>
        <h2 className={styles.title}>{title}</h2>
        {modalConfig.mode === 'confirm' ? (
          <div>
            <div className={`${pathFile ? styles.boxFile : 'd-none'} d-flex gap-3 align-items-center mt-4`} key={Math.random()}>
              {docsIcon}
              <u className={styles.nameFile}>{nameFile}</u>
            </div>
            <p className="my-4 py-2">{trans.sibModal.question}</p>
            <div className="mb-3 pb-3">
              <div className="mb-3">
                <RadioButton label={trans.sibModal.isMember} onClick={() => setMemberTypeSelecter('member')} checked={memberTypeSelecter === 'member'} ariaLabel="Tôi đã là thành viên" />
                {memberTypeSelecter === 'member' && (
                  <form className={styles.form}>
                    <div className="mb-3">
                      <InputField
                        label={trans.sibModal.companyName}
                        placeholder={trans.sibModal.placeholderCompanyName}
                        name={'companyName'}
                        value={connectForm.companyName}
                        type={'text'}
                        onChange={(event) => handleChangeForm(event)}
                        ariaLabel="Tên công ty"
                      />
                    </div>
                    <div className="mb-3">
                      <InputField
                        label={trans.sibModal.emailAddress}
                        required
                        placeholder={trans.sibModal.placeholderEmailAddress}
                        name={'email'}
                        value={connectForm.email}
                        type={'text'}
                        isError={showError && isEmailAdressInvalid()}
                        errorText={!connectForm.email ? trans.requiredTextError : trans.emailTextError}
                        onChange={(event) => handleChangeForm(event)}
                        ariaLabel="email"
                      />
                    </div>
                  </form>
                )}
              </div>
              <RadioButton label={trans.sibModal.notMember} onClick={() => setMemberTypeSelecter('notMember')} checked={memberTypeSelecter === 'notMember'} ariaLabel="Tôi chưa là thành viên" />
            </div>
            {memberTypeSelecter && (
              <SecondaryButton
                name={memberTypeSelecter.includes('member') ? trans.continue : trans.sibModal.register}
                onClick={handleSubmitModal}
                ariaLabel={`${memberTypeSelecter.includes('member') ? 'Tiếp tục' : 'Đăng ký làm thành viên của SIB'}`}
              />
            )}
          </div>
        ) : (
          <div>
            <p className="my-4 py-2">{verifyRequest}</p>
            <div className={`${pathFile ? styles.boxFile : 'd-none'} d-flex gap-3 align-items-center mt-4 mb-4`} key={Math.random()}>
              {docsIcon}
              <u className={styles.nameFile}>{nameFile}</u>
            </div>
            <SecondaryButton name={trans.complete} onClick={() => setModalConfig({ show: false, mode: '' })} ariaLabel="Hoàn thành" />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SibModal;
