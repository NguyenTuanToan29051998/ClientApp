import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/components/templates/FeedbackBody.module.scss';
import InputField from '../atoms/inputs/InputField';
import useTrans from '../../hooks/useTrans';
import TextAreaField from '../atoms/inputs/TextAreaField';
import BackButton from '../atoms/buttons/BackButton';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputUpLoadFile from '../atoms/inputs/InputUploadFile';
import { closeFileIcon, docsIcon } from '../../public/icons';
import useValidate from '../../hooks/useValidate';
import CompleteRegistration from '../organisms/CompleteRegistration';
import { REGEX_EMAIL, TEXT_REG } from '../../public/const';
interface feedbackFrom {
  name: string,
  email: string,
  feedback: string,
  documentList?: File,
}
type UploadFile = {
  isErrorFormat: boolean,
  isErrorSize: boolean,
}
const MAX_LENGHT = 50;
const FeedbackBody: FC = (props) => {
  const router = useRouter();
  const trans = useTrans();
  const [showValidate, setShowValidate] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [file, setFile] = useState<string>('');
  const { isEmailInvalid } = useValidate();
  const [feedbackFrom, setFeedbackInfo] = useState<feedbackFrom>({
    name: '',
    email: '',
    feedback: '',
    documentList: undefined,
  });
  const [showErrorFile, setShowErrorFile] = useState<UploadFile>({
    isErrorFormat: false,
    isErrorSize: false,
  });
  const onChangeFile = (e: any) => {
    const fileName = e.target.value.split(/(\\|\/)/g).pop();
    if (e.target.files && e.target.files[0].size / 1024 / 1024 >= 10) {
      setShowErrorFile({ ...showErrorFile, isErrorSize: true });
      return;
    }
    if (fileName.includes('.doc') || fileName.includes('.docx') || fileName.includes('.pptx') || fileName.includes('.pdf')) {
      setShowErrorFile({ ...showErrorFile, isErrorSize: false, isErrorFormat: false });
      setFile(e.target.value.split(/(\\|\/)/g).pop());
      setFeedbackInfo({ ...feedbackFrom, documentList: e.target.files[0] });
    } else setShowErrorFile({ ...showErrorFile, isErrorFormat: true });
  };

  const hanldeDeleteFile = () => {
    setFile('');
    setFeedbackInfo({ ...feedbackFrom, documentList: undefined });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowValidate(true);
    if (!feedbackFrom.email.trim() || !feedbackFrom.feedback.trim() || isEmailInvalid(feedbackFrom.email.trim())) {
      return;
    }
    setIsComplete(true);
  };
  const handleName = (event: any) => {
    if (event.target.value.length > MAX_LENGHT) {
      setFeedbackInfo({ ...feedbackFrom, name: event.target.value.substring(0, 50) });
      return;
    }
    setFeedbackInfo({ ...feedbackFrom, name: event.target.value.replace(/[&\/\\#,+()$~%.'":;`|*?<>{}0-9]/g, '') });
  };
  return (
    <div className={styles.wrapper}>
      {!isComplete ? (
        <>
          <h1 className={styles.feedbackTitle}>{trans.feedback.title}</h1>
          <hr className={styles.tabTitle} />
          <form onSubmit={handleSubmit}>
            <div className="mb-4 pb-2">
              <InputField
                label={trans.feedback.fullname}
                placeholder={trans.feedback.fullnameRequired}
                value={feedbackFrom.name}
                type={'text'}
                name={'name'}
                ariaLabel={'Họ và tên '}
                onChange={handleName}
              />
            </div>
            <div className="mb-4 pb-2">
              <InputField
                label={trans.feedback.email}
                placeholder={trans.feedback.example}
                required
                value={feedbackFrom.email}
                type={'text'}
                name={'email'}
                ariaLabel={'Địa chỉ email'}
                onChange={(e) => setFeedbackInfo({ ...feedbackFrom, email: e.target.value })}
                isError={showValidate && (!feedbackFrom.email || !REGEX_EMAIL.test(feedbackFrom.email.trim()))}
                errorText={!feedbackFrom.email.trim() ? trans.requiredTextError : trans.emailTextError}
              />
            </div>
            <div className="mb-4 pb-2">
              <TextAreaField
                label={trans.feedback.feedbackText}
                placeholder={trans.feedback.feedbackRequired}
                required
                value={feedbackFrom.feedback}
                type={'text'}
                maxLenght={1000}
                name={'feedback'}
                ariaLabel={'Góp ý'}
                onChange={(e) => setFeedbackInfo({ ...feedbackFrom, feedback: e.target.value })}
                isError={showValidate && !feedbackFrom.feedback.trim()}
                errorText={trans.requiredTextError}
              />
            </div>
            <div className="mb-4 pb-2">
              <div>{trans.collectNeeds.otherDocs}</div>
              {file && (
                <div className="d-flex gap-3 align-items-center mt-4" key={Math.random()}>
                  {docsIcon}
                  <u className={styles.nameFile}>{file}</u>
                  <div className={styles.closeFileIcon} role="presentation" onClick={hanldeDeleteFile}>{closeFileIcon}</div>
                </div>
              )}
              {showErrorFile.isErrorFormat && (
                <p className={styles.errorFile}>{trans.collectNeeds.errorFileFormat}</p>
              )}
              {showErrorFile.isErrorSize && (
                <p className={styles.errorFile}>{trans.collectNeeds.errorFileSize}</p>
              )}
              <InputUpLoadFile onChange={onChangeFile} disabled={file ? true : false} />
            </div>
            <div className="d-flex my-4">
              <div
                className="d-flex flex-fill gap-2 align-self-center"
                role="presentation"
              >
                <BackButton onClick={() => router.back()} content={trans.back} />
              </div>
              <div className="d-flex flex-row gap-2 justify-content-end gap-3">
                <SecondaryButton
                  size="large"
                  name={trans.send}
                  ariaLabel="Gửi"
                  type={'submit'}
                />
              </div>
            </div>
          </form>
        </>
      ) : (
        <CompleteRegistration
          pageName={trans.feedback.title}
          completeSubTitle={trans.feedback.sendSuccess}
          textCenter
        />
      )}
    </div>
  );
};

export default FeedbackBody;
