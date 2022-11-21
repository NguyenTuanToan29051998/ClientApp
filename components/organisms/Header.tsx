import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import { checkBlueIcon, searchIcon1, searchIcon, angleLeftIcon, closeIcon1 } from '../../public/icons';
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

  const showHeader = () => {
    setShowNavBar(!showNavBar);
  };

  const handleBtnWhoAreYou = () => {
    localStorage.setItem('type-user', JSON.stringify(''));
    router.push('/');
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
    changeLanguage(lang);
    // router.push({ pathname, query }, pathname, { locale: lang });
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
                onClick={handleBtnWhoAreYou}
                role="presentation"
              >
                {!isMasterPage ? (
                  <div className={styles.leftAreaMainlogo}>
                    <Image
                      src="/assets/LOGO-PARTNER-01.svg"
                      width={50}
                      height={50}
                      alt="main-logo"
                    />
                  </div>
                ) : (
                  <div className={styles.leftAreaSublogo}>
                    <div className="me-4">
                      <Image
                        src="/assets/KHDT.svg"
                        width={38}
                        height={36}
                        alt="main-logo"
                      />
                    </div>
                    <div className="me-3">
                      <Image
                        src="/assets/LOGO-PARTNER-02.svg"
                        width={86}
                        height={30}
                        alt="main-logo"
                      />
                    </div>
                    <Image
                      src="/assets/LOGO-PARTNER-03.svg"
                      width={18}
                      height={36}
                      alt="main-logo"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.rightArea}>
              {!isMasterPage && (
                <>
                  <div className="d-flex gap-5 justify-content-center">
                    <div className="d-flex gap-2 align-items-center">
                      {/* <p className={styles.talkToUs} onClick={changeShowChatPlugin} role="presentation">{trans.chat}</p> */}
                      <div className={styles.searchIcon} onClick={() => setClickedSearch(true)} role="presentation">{searchIcon1}</div>
                      {/* <div className={styles.messageIcon} onClick={changeShowChatPlugin} role="presentation">{messageIcon}</div> */}
                    </div>
                  </div>
                  <div className={styles.bntArea}>
                    <button
                      style={{ backgroundColor: currentColor[+userType!] }}
                      onClick={handleBtnWhoAreYou}
                      className={styles.button}
                    >
                      {`${trans.master.youAre}: ${nameTypeUser()}`}
                    </button>
                  </div>
                </>
              )}
              <div
                className={styles.flg}
                onMouseEnter={() => setShowLangChoice(true)}
                onMouseLeave={() => setShowLangChoice(false)}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={
                      language.includes("vi")
                        ? "/assets/vietnam-flag.svg"
                        : "/assets/english-flag.svg"
                    }
                    width={34}
                    height={34}
                    alt="Đổi ngôn ngữ"
                    className={styles.image}
                  />
                  {isMasterPage && (
                    <span className={styles.langTitle}>{trans.lang}</span>
                  )}
                </div>
                {showLangChoice && (
                  <div className={styles.flagArea}>
                    <div className={styles.flagAreaContent}>
                      <div
                        className={styles.lang}
                        onClick={() => changeLang("vi")}
                        onKeyDown={() => changeLang("vi")}
                        role="presentation"
                      >
                        <Image
                          src="/assets/vietnam-flag.svg"
                          width={40}
                          height={40}
                          alt="Viet Nam flag icon"
                          className={styles.image}
                        />
                        {trans.Vietnamese}
                        {language.includes("vi") && (
                          <span className={styles.checked}>{checkBlueIcon}</span>
                        )}
                      </div>

                      <div
                        className={styles.lang}
                        onClick={() => changeLang("en")}
                        onKeyDown={() => changeLang("en")}
                        role="presentation"
                      >
                        <Image
                          src="/assets/english-flag.svg"
                          width={40}
                          height={40}
                          alt="English flag icon"
                          className={styles.image}
                        />
                        {trans.English}
                        {language.includes("en") && (
                          <span className={styles.checked}>{checkBlueIcon}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!isMasterPage && (
                <div className={styles.hamburgerArea}>
                  <MenuIcon onClick={showHeader} iconClose={showNavBar} />
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
              <div className={styles.bntAreaMobile}>
                <button
                  style={{ backgroundColor: currentColor[+userType! - 1] }}
                  onClick={handleBtnWhoAreYou}
                  className={styles.button}
                >
                  {`${trans.master.youAre}: ${nameTypeUser()}`}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
