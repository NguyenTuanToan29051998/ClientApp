import { Menu } from '@/models/menu';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, FC, MouseEvent, SetStateAction, useContext, useState } from 'react';
import { CustomContext } from '../../AppContext';
import useTrans from '../../hooks/useTrans';
import { checkBlueIcon, searchIcon, angleDownIcon } from '../../public/icons';
import styles from '../../styles/components/organisms/Navigations.module.scss';

type PropsType = {
  navMenus: Menu[];
  showNavBar: boolean;
  setShowNavBar: Dispatch<SetStateAction<boolean>>;
};

const Navigations: FC<PropsType> = (props) => {
  const { navMenus, showNavBar, setShowNavBar } = props;
  const router = useRouter();
  const { pathname, query, locale } = useRouter();
  const trans = useTrans();
  const { language } = useContext(CustomContext);

  const [isEnglish, setIsEngLish] = useState<boolean>(false);
  const [showDropdownLanguage, setShowDropdownLanguage] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [subMenu, setSubMenu] = useState<string>('');
  const [tabMenu, setTabMenu] = useState<string>('Trang chủ');

  const handleSelectedNav = (path: string) => {
    if (path.includes('/home')) {
      return pathname.includes('sibhubs')
        || pathname.includes('home')
        || pathname.includes('register')
        || pathname.includes('questions')
        || pathname.includes('collect')
        || pathname.includes('policy')
        || pathname.includes('story')
        || pathname.includes('about')
        || pathname.includes('sibIntermediaries/programSupport');
    }
    if (path.includes('/media')) {
      return pathname.includes('/media');
    }
    return pathname.includes(path);
  };

  const changeLang = (lang: string) => {
    setShowDropdownLanguage(false);
    setIsEngLish(lang === "en");
    router.push({ pathname, query }, pathname, { locale: lang });
  };

  const handleSearch = (event: any) => {
    setInputSearch(event.target.value);
    if (event.key === 'Enter') {
      setInputSearch('');
      router.push(`/search?searchInput=${event.target.value}`);
    }
  };

  const handleSearchIcon = () => {
    if (!inputSearch) return;
    setInputSearch('');
    router.replace(`/search?searchInput=${inputSearch}`);
  };

  const handleHoverMenu = (menu: string) => {
    setSubMenu(menu);
  };

  const handleSubmenu = (urlPage: string, event: any) => {
    if (event) event.stopPropagation();
    setSubMenu('');
    router.push(urlPage);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={`d-flex flex-fill ${styles.navbar} ${showNavBar && styles.display}`}>
        {navMenus.map(nav => {
          return (
            <li
              key={nav.menuName}
              className={`${styles.dropdownMenu}`}
              onClick={() => setShowNavBar(false)}
              onKeyDown={() => setShowNavBar(false)}
              role="presentation"
            >
              <Link
                href={nav.menuUrl}
                passHref
              >
                <div>
                <a className={handleSelectedNav(nav.menuUrl) && styles.selected || ''} href="replace" onMouseEnter={() => handleHoverMenu(nav.menuName)}>{language.includes("vi") ? nav.menuName : nav.englishName}</a>
                <div className={styles.selectMenu} onMouseLeave={() => setSubMenu('')}>
                  {(subMenu === nav.menuName && nav.subMenus?.length !== 0) && (
                    <div className="d-flex flex-column mt-3">
                      {nav.subMenus?.map(subMenus => {
                        return (
                          <p className={styles.subMenu} key={Math.random()} onClick={(e) => handleSubmenu(subMenus.url, e)} role="presentation">{subMenus.name}</p>
                        );
                      })}
                    </div>
                  )}
                </div>
                </div>
              </Link>
            </li>
          );
        })}
        <div className={styles.language}>
          <p>{trans.language}</p>
          <div className={styles.flagArea}>
            <div className={styles.flagAreaContent} onClick={() => setShowDropdownLanguage(!showDropdownLanguage)} role="presentation">
              <div className={styles.lang}>
                <Image
                  src={`${isEnglish ? '/assets/english-flag.svg' : '/assets/vietnam-flag.svg'}`}
                  width={26}
                  height={26}
                  alt={`${isEnglish ? 'English flag icon' : 'Viet Nam flag icon'}`}
                  className={styles.image}
                />
                {isEnglish ? trans.English : trans.Vietnamese}
                <span className={styles.checked}>{angleDownIcon}</span>
              </div>
            </div>
          </div>
          {showDropdownLanguage && (
            <div className={styles.languageList}>
              <div className={styles.flagArea}>
                <div className={styles.flagAreaContent}>
                  <div
                    className={styles.lang}
                    onClick={() => changeLang("en")}
                    onKeyDown={() => changeLang("en")}
                    role="presentation"
                  >
                    <Image
                      src="/assets/english-flag.svg"
                      width={26}
                      height={26}
                      alt="English flag icon"
                      className={styles.image}
                    />
                    {trans.English}
                    {isEnglish && (
                      <span className={styles.checked}>{checkBlueIcon}</span>
                    )}
                  </div>
                  <div className="mt-3">
                    <div
                      className={styles.lang}
                      onClick={() => changeLang("vi")}
                      onKeyDown={() => changeLang("vi")}
                      role="presentation"
                    >
                      <Image
                        src="/assets/vietnam-flag.svg"
                        width={26}
                        height={26}
                        alt="Viet Nam flag icon"
                        className={styles.image}
                      />
                      {trans.Vietnamese}
                      {!isEnglish && (
                        <span className={styles.checked}>{checkBlueIcon}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ul>
      <div className={styles.search} role="search">
        <input className={styles.inpSearch} value={inputSearch} type="text" name="" id="" placeholder={trans.search} aria-label="Tìm kiếm" onKeyDown={(e) => handleSearch(e)} onChange={(e) => handleSearch(e)} />
        <div className={styles.searchIcon} onClick={handleSearchIcon} role="presentation">{searchIcon}</div>
      </div>
    </div>
  );
};

export default Navigations;
