import { ChangeEvent, FC } from 'react';
import useTrans from '../../../hooks/useTrans';
import { plusIcon } from '../../../public/icons';
import styles from '../../../styles/components/atoms/inputs/InputUpLoadFile.module.scss';

type PropsType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const InputUpLoadFile: FC<PropsType> = (props) => {
  const { onChange, disabled } = props;
  const trans = useTrans();

  return (
    <div className={styles.uploadFile}>
      <label htmlFor="files" className={`${styles.labelUploadFile} ${disabled ? styles.disabled : ''}`}>
        {plusIcon}
        <div>{trans.collectNeeds.moreDocs}</div>
      </label>
      <input className={styles.inputUploadFile} id="files" type="file" accept=".doc, .docx, .pptx, .pdf" aria-label="Tải tệp lên" onChange={onChange} disabled={disabled} />
    </div>
  );
};

export default InputUpLoadFile;
