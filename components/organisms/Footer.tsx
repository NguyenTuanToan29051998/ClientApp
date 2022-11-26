/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from 'react';
import { REGEX_EMAIL } from '../../public/const';
import { emailIcon, facebookIcon, phoneIcon } from '../../public/icons';
import InputField from '../atoms/inputs/InputField';
import styles from '../../styles/components/organisms/Footer.module.scss';
import useTrans from '../../hooks/useTrans';
import { useRouter } from 'next/router';
import { sendEmail } from '../../api-clients/footer';

type PropsType = {
}

const Footer: FC<PropsType> = (props) => {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState<string>('');
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [textError, setTextError] = useState<any>();
  const trans = useTrans();
  const changeEmail = (event: any) => {
    const { value } = event.target;
    setEmailValue(value.trim());
  };

  useEffect(() => {
    setEmailValue('');
  }, [router, textError]);

  const handeSubmit = () => {
    if (!REGEX_EMAIL.test(emailValue)) {
      setEmailInvalid(true);
      return;
    }
    sendEmail.send(emailValue)
      .then((res) => {
        setSendSuccess(true);
        setTimeout(() => {
          setSendSuccess(false);
          setEmailValue('');
        }, 4000);
      })
      .catch((error) => {
        if (Object.values(error.response.data.errors)) {
          setTextError(Object.values(error.response.data.errors)[0]);
          setTimeout(() => {
            setTextError('');
          }, 4000);
        }
      });
    setEmailInvalid(false);
    //TODO send email
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.leftArea}>
        <div className={`${styles.lineLogo}`}>
          <img
            src="/assets/logoBox.svg"
            alt="logoBox"
          />
        </div>
        <div className={`${styles.lineContent}`}>
          <div className="d-flex mt-4 mb-4 align-items-center gap-3">
            {emailIcon}
            <div className="d-flex flex-column">
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            {phoneIcon}
            <span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.rightArea}>
        <p className={styles.label}>{trans.footer.register}</p>
        <div className={emailInvalid ? styles.spaceBottom : ''}>
          <InputField
            type="text"
            placeholder={trans.footer.email}
            label={`Email (${trans.footer.required})`}
            required
            value={emailValue}
            onChange={changeEmail}
            name={''}
            ariaLabel={'email'}
            isError={emailInvalid && (!emailValue || !REGEX_EMAIL.test(emailValue) || textError)}
            errorText={!emailValue ? trans.requiredTextError : trans.emailTextError}
            errorSend={textError}
            isSuccess={sendSuccess}
            successText={trans.sendRequest}
          />
        </div>
        <button className={styles.button} onClick={handeSubmit}>
          {trans.footer.send}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
