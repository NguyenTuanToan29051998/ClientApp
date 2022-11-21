import { ContactType } from '@/models/contact';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { contactApiManagement } from '../../api-clients/contact';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import ContactBody from '../../components/templates/ContactBody';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const Contact: NextPageWithLayout = () => {
  const [contacts, setContacts] = useState<ContactType[] | null>(null);
  const [footer, setFooter] = useState<ContactType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.all([
      contactApiManagement.getContact(),
      contactApiManagement.getContactFooter(),
    ])
      .then(axios.spread((contactRes, footerRes) => {
        setFooter(footerRes.data);
        setContacts(contactRes.data);
        setLoading(false);
      }))
      .catch((err) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {contacts && <ContactBody contacts={contacts} footer={footer!} />}
    </CustomContainer>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Contact;
