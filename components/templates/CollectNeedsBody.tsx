import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import useValidate from '../../hooks/useValidate';
import { closeFileIcon, docsIcon } from '../../public/icons';
import styles from '../../styles/components/templates/CollectNeedsBody.module.scss';
import BackButton from '../atoms/buttons/BackButton';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputField from '../atoms/inputs/InputField';
import InputUpLoadFile from '../atoms/inputs/InputUploadFile';
import TextAreaField from '../atoms/inputs/TextAreaField';
import Title from '../atoms/titles/Title';
import CompleteRegistration from '../organisms/CompleteRegistration';

type CollectNeeds = {
  name: string,
  email: string,
  needsOfUnit: string,
  documentList?: File,
}

type UploadFile = {
  isErrorFormat: boolean,
  isErrorSize: boolean,
}

const COMMENT_CONTENT_MAX_LENGTH = 1000;
const UNIT_NAME_MAX_LENGTH = 50;

const CollectNeedsBody: NextPage = () => {
  const router = useRouter();
  const trans = useTrans();
  const { isEmailInvalid } = useValidate();
  const [collectNeeds, setCollectNeeds] = useState<CollectNeeds>({
    name: '',
    email: '',
    needsOfUnit: '',
    documentList: undefined,
  });
  const [showValidate, setShowValidate] = useState<boolean>(false);
  const [file, setFile] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [showErrorFile, setShowErrorFile] = useState<UploadFile>({
    isErrorFormat: false,
    isErrorSize: false,
  });

  const changeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'needsOfUnit' && value.length > COMMENT_CONTENT_MAX_LENGTH) return;
    if (name === 'name' && value.length > UNIT_NAME_MAX_LENGTH) return;
    setCollectNeeds({ ...collectNeeds, [name]: value });
  };

  const onChangeFile = (e: any) => {
    const fileName = e.target.value.split(/(\\|\/)/g).pop();
    if (e.target.files && e.target.files[0].size / 1024 / 1024 >= 10) {
      setShowErrorFile({ ...showErrorFile, isErrorSize: true });
      return;
    }
    if (fileName.includes('.doc') || fileName.includes('.docx') || fileName.includes('.pptx') || fileName.includes('.pdf')) {
      setShowErrorFile({ ...showErrorFile, isErrorSize: false, isErrorFormat: false });
      setFile(e.target.value.split(/(\\|\/)/g).pop());
      setCollectNeeds({ ...collectNeeds, documentList: e.target.files[0] });
    } else setShowErrorFile({ ...showErrorFile, isErrorFormat: true });
  };

  const hanldeDeleteFile = () => {
    setFile('');
    setCollectNeeds({ ...collectNeeds, documentList: undefined });
  };

  const handleSubmitForm = (event: any) => {
    if (event) event.preventDefault();
    setShowValidate(true);
    if (!collectNeeds.name.trim() || !collectNeeds.email.trim() || !collectNeeds.needsOfUnit.trim() || isEmailInvalid(collectNeeds.email)) {
      return;
    }
    setIsComplete(true);
  };

  return (
    <div className={styles.wrapper}>
      {!isComplete ? (
        <>
          <Title name={trans.collectNeeds.titleCollectNeeds} size={'large'} />
          <div className="mt-3" />
          <i className={styles.note}>{trans.collectNeeds.note}</i>
          <hr className="mb-4 pb-2" />
          <form action="">
            <div className="mb-4 pb-2">
              <InputField
                label={trans.collectNeeds.unitName}
                placeholder={trans.collectNeeds.placeholderUnitName}
                required
                value={collectNeeds.name}
                type={'text'}
                name={'name'}
                onChange={(event) => changeForm(event)}
                isError={showValidate && !collectNeeds.name.trim()}
                errorText={trans.requiredTextError}
                ariaLabel="Tên đơn vị"
              />
            </div>
            <div className="mb-4 pb-2">
              <InputField
                label={trans.collectNeeds.emailAddress}
                placeholder={trans.collectNeeds.placeholderEmailAddress}
                required
                value={collectNeeds.email}
                type={'text'}
                name={'email'}
                onChange={(event) => changeForm(event)}
                isError={showValidate && (!collectNeeds.email.trim() || isEmailInvalid(collectNeeds.email))}
                errorText={!collectNeeds.email ? trans.requiredTextError : trans.emailTextError}
                ariaLabel="Địa chỉ email"
              />
            </div>
            <div className="mb-4">
              <TextAreaField
                label={trans.collectNeeds.needsOfUnit}
                placeholder={trans.collectNeeds.placeholderNeedsOfUnit}
                value={collectNeeds.needsOfUnit}
                type={'text'}
                maxLenght={COMMENT_CONTENT_MAX_LENGTH}
                name={'needsOfUnit'}
                onChange={(event) => changeForm(event)}
                isError={showValidate && !collectNeeds.needsOfUnit.trim()}
                errorText={trans.requiredTextError}
                required
              />
            </div>
            <div>{trans.collectNeeds.otherDocs}</div>
            {file &&  (
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
            <div className="d-flex justify-content-between">
              <div className={styles.btnBack} >
                <BackButton content={trans.back} onClick={() => router.push({ pathname: '/home', query: { isScrollToPolicySection: 'true' } })} />
              </div>
              <div className={styles.btnNext}>
                <SecondaryButton size="large" type="submit" aria-label="Gửi" name={trans.collectNeeds.send} onClick={(event: void) => handleSubmitForm(event)} />
              </div>
            </div>
            <div className={styles.distanceFooter} />
          </form>
        </>
      ) : (
        <CompleteRegistration
          pageName={trans.collectNeeds.titleCollectNeeds}
          completeSubTitle={trans.collectNeeds.submitRequest}
          completeDesc={trans.collectNeeds.requestContent}
        />
      )}
    </div>
  );
};

export default CollectNeedsBody;
