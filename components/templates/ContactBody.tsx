import type { NextPage } from 'next';
import Image from 'next/image';
import { emailIcon, facebookIcon, locationIcon, phoneIcon } from '../../public/icons';
import Title from '../atoms/titles/Title';
import useValidate from '../../hooks/useValidate';
import { ContactType } from '@/models/contact';
import useTrans from '../../hooks/useTrans';
import CustomTooltip from '../atoms/tooltips/CustomTooltip';
import styles from '../../styles/components/templates/ContactBody.module.scss';

type PropType = {
  contacts: ContactType[];
  footer: ContactType;
};

const ContactBody: NextPage<PropType> = (props) => {
  const { contacts, footer } = props;
  const { isEmailInvalid } = useValidate();
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftArea}>
        <Image src="/assets/contact-logo.svg" alt="main-logo" width={403} height={265} />
        <div className={styles.leftAreaContent}>
          <Title name={trans.contact.follow} size="medium" />
          <a href={footer.facebook} target="__blank" className={styles.fbIcon}>
            {facebookIcon}
          </a>
        </div>
      </div>
      <div className={styles.rightArea}>
        <Title name={trans.contact.title} size="medium" />
        {(contacts || []).map((contact) => (
          <div key={contact?.id}>
            <h5 className={styles.title}>{contact?.name}</h5>
            <CustomTooltip tooltipValue={contact?.address}>
              <div className="d-flex align-items-center gap-3 mb-2">
                {locationIcon}
                <span className={styles.address}>{contact?.address}</span>
              </div>
            </CustomTooltip>
            <div className="d-flex align-items-center gap-3 mb-2">
              {emailIcon}
              <div>
                <span>{contact?.email_1}</span>
                <br/>
                {contact.email_2 ? <span> {contact?.email_2} </span> : ''}
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              {phoneIcon}
              <span>
                {contact?.phone_1}
                {contact.phone_2 ? <><span> {trans.footer.number} </span> {contact?.phone_2}</>: ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactBody;
