import Image from 'next/image';
import { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputField from '../atoms/inputs/InputField';
import styles from '../../styles/components/templates/EventBodyDetail.module.scss';
import BackPreviousPage from '../atoms/BackPreviousPage';
import { useRouter } from 'next/router';
import useTrans from '../../hooks/useTrans';

interface registerEventInfo {
  nameEnterprise: string;
  email: string;
  phoneNumber: string;
}

type PropsType = {
  postData: { id: number, srcImg: string, title: string, content: string, date: string };
};

type ModalType = {
  isOpen: boolean,
  mode: 'register' | 'confirm' | '',
}

const EventBodyDetail: FC<PropsType> = (props) => {
  const { postData } = props;
  const router = useRouter();
  const trans = useTrans();
  const [registerEventInfo, setRegisterEventInfo] = useState<registerEventInfo>({
    nameEnterprise: '',
    email: '',
    phoneNumber: '',
  });
  const [showValidate, setShowValidate] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalType>({
    isOpen: false,
    mode: '',
  });

  const handleRegister = () => {
    setShowValidate(true);
    if (!registerEventInfo.nameEnterprise || !registerEventInfo.email || !registerEventInfo.phoneNumber) {
      return;
    }
    setModalConfig({ ...modalConfig, mode: 'confirm' });

  };
  return (
    <div className="container">
      <div className={styles.body}>
        <div className={styles.title}>
          {postData.title}
        </div>
        <div className={styles.date}>{postData.date}</div>
        <Image src={postData.srcImg} width={800} height={500} alt="main-logo" />
        <div className={styles.content}>
          {postData.content}
        </div>
        <button className={styles.btnRegisterEvent} onClick={() => setModalConfig({ ...modalConfig, isOpen: true, mode: 'register' })}>Đăng ký tham gia sự kiện</button>
        <BackPreviousPage title={trans.back} onClick={() => router.push('/')} />
      </div>

      <Modal show={modalConfig.isOpen} size="lg">
        <div className={`d-flex flex-row-reverse ${styles.close}`} onClick={() => setModalConfig({ ...modalConfig, isOpen: false })} role="presentation">Đóng</div>
        <div className={styles.formRegister}>
          {modalConfig.mode === 'register' && (
            <>
              <div className={styles.title}>Điền thông tin tham gia sự kiện</div>
              <div className={styles.inpWrap}>
                <InputField
                  name={'name'}
                  label="Tên doanh nghiệp (bắt buộc)"
                  required
                  value={registerEventInfo.nameEnterprise}
                  placeholder="Vui lòng điền tên doanh nghiệp "
                  type="text"
                  isError
                  errorText={`${showValidate && !registerEventInfo.nameEnterprise ? trans.requiredTextError : ''}`}
                  onChange={(e) => setRegisterEventInfo({ ...registerEventInfo, nameEnterprise: e.target.value })}
                />
              </div>
              <div className="mt-3">
                <InputField
                  name={'name'}
                  label="Email (bắt buộc)"
                  required
                  value={registerEventInfo.email}
                  placeholder="Vui lòng điền email của bạn"
                  type="text"
                  isError
                  errorText={`${showValidate && !registerEventInfo.email ? trans.requiredTextError : ''}`}
                  onChange={(e) => setRegisterEventInfo({ ...registerEventInfo, email: e.target.value })}
                />
              </div>
              <div className="mt-3">
                <InputField
                  name={'name'}
                  label="Số điện thoại (bắt buộc)"
                  required
                  value={registerEventInfo.phoneNumber}
                  placeholder="Vui lòng điền số điện thoại của bạn"
                  type="text"
                  isError
                  errorText={`${showValidate && !registerEventInfo.phoneNumber ? trans.requiredTextError : ''}`}
                  onChange={(e) => setRegisterEventInfo({ ...registerEventInfo, phoneNumber: e.target.value })}
                />
              </div>
            </>
          )}
          {modalConfig.mode === 'confirm' && (
            <>
              <div className={styles.title}>Bạn đã đăng ký tham gia sự kiện thành công!</div>
              <div className={styles.inpWrap}>
                Chúng tôi đã nhận được đơn đăng ký tham gia sự kiện của bạn. Vui lòng kiểm tra email để nhận được thông tin về sự kiện sớm nhất.
              </div>
            </>
          )}
          <div className={styles.btnRegister} >
            <SecondaryButton name={modalConfig.mode === 'register' ? 'Đăng ký' : 'Đi đến email'} onClick={handleRegister} />
          </div>
        </div>

      </Modal>
    </div>
  );
};

export default EventBodyDetail;
