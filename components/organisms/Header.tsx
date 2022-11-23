import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import { checkBlueIcon, searchIcon1, searchIcon, angleLeftIcon, closeIcon1, angleDownIcon } from '../../public/icons';
import Navigations from './Navigations';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/Header.module.scss';
import MenuIcon from '../atoms/icons/MenuIcon';
import { Menu } from '@/models/menu';
import { CustomContext } from '../../AppContext';

type PropsType = {
  isMasterPage?: boolean,
  menus?: Menu[],
  userType?: string,
};

const currentColor = ['#A4C955', '#E88E49', '#2D6AAA'];

const HEADER_HEIGTH = '83px';

const Header: FC<PropsType> = (props) => {
  const { isMasterPage, menus, userType } = props;
  const trans = useTrans();
  const router = useRouter();
  const { language, changeLanguage, changeCurrentSite } = useContext(CustomContext);

  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [showLangChoice, setShowLangChoice] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [clickedSearch, setClickedSearch] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<string>('');
  const [isEnglish, setIsEngLish] = useState<boolean>(false);
  const [showDropdownLanguage, setShowDropdownLanguage] = useState<boolean>(false);

  const showHeader = () => {
    setShowNavBar(!showNavBar);
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
  }, [scrollDirection]);

  const changeLang = (lang: string) => {
    setShowLangChoice(false);
    setIsEngLish(lang === "en");
    setShowDropdownLanguage(false);
  };

  const nameTypeUser = () => {
    switch (userType) {
      case '0':
        changeCurrentSite('forSib');
        return trans.SIB;
      case '1':
        changeCurrentSite('forInter');
        return trans.intermediaries;
      case '2':
        changeCurrentSite('forPolicy');
        return trans.policyMaker;
      default:
        return '';
    }
  };

  const handleHiddenSeacrch = () => {
    setClickedSearch(false);
    setSearchContent('');
  };

  return (
    <>
      <header
        className={scrollDirection === 'up' ? `${styles.wrapper} ${styles.stiky}` : styles.wrapper}
        style={{ top: scrollDirection === 'up' ? '0' : `-${HEADER_HEIGTH}` }}
      >
        {clickedSearch ? (
          <div className={styles.search}>
            <div className={styles.angleLeftIcon} onClick={handleHiddenSeacrch} role="presentation">{angleLeftIcon}</div>
            <div className={styles.inpWrapper}>
              <input className={styles.inpSearch} type="text" name="" id="" placeholder={trans.search} aria-label="Tìm kiểm" value={searchContent} onChange={(e) => setSearchContent(e.target.value)} />
              {searchContent ? (
                <div className={styles.closeIcon} onClick={() => setSearchContent('')} role="presentation">{closeIcon1}</div>
              ) : (
                <div className={styles.searchIcon}>{searchIcon}</div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.header}>
            <div className={styles.leftArea}>
              <div
                className="d-flex"
                onClick={() => router.push('/home')}
                role="presentation"
              >
                <div className={styles.leftAreaMainlogo}>
                  <Image
                    src="/assets/logo-toeic.webp"
                    width={210}
                    height={70}
                    alt="main-logo"
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightArea}>
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
          </div>
        )}
      </header>
      <div className={styles.navContainer} style={{ top: scrollDirection === 'up' ? HEADER_HEIGTH : '0' }}>
        <div className={styles.nav}>
          {!isMasterPage && (
            <>
              <Navigations
                showNavBar={showNavBar}
                setShowNavBar={setShowNavBar}
                navMenus={userType?.includes('3') ? (menus || []).filter(menu => menu.menuUrl !== '/network') : menus!}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
