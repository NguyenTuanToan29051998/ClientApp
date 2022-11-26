import { Menu } from '@/models/menu';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { menuApiManagement } from '../api-clients/menu';
import CustomHead from '../components/atoms/headers/CustomHead';
import CustomLoading from '../components/molecules/CustomLoading';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
// import FacebookChatPlugin from '../components/templates/FacebookChatPlugin';
import { navSIB } from '../public/const';

type PropsType = {
  children: any;
}

const Layout: FC<PropsType> = ({ children }) => {
  const [menus, setMenus] = useState<Menu[] | null>(null);
  const [userType, setUserType] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const user = localStorage.getItem('type-user') || '';
    setUserType(user);
    setMenus(navSIB);
    axios.all([
      menuApiManagement.getMenuList(Number(user)),
    ])
      .then(axios.spread((menuRes, footerRes) => {
        setMenus(menuRes.data);
        setLoading(false);
      }))
      .catch((err) => setLoading(false));
  }, [userType]);

  return (
    <>
      <CustomHead />
      {loading && (
        <div className="psa-center">
          <CustomLoading />
        </div>
      )}
      {!loading && (
        <>
          {/* <FacebookChatPlugin /> */}
          {userType && menus && (<Header menus={menus} userType={userType} />)}
          <main style={{backgroundColor: '#f2f3f7'}}>
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
