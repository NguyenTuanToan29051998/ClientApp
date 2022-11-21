import { FC, useEffect, useRef, useState } from 'react';
import Title from '../atoms/titles/Title';
import SubTitle from '../atoms/titles/SubTitle';
import Card from '../molecules/Card';
import BackButton from '../atoms/buttons/BackButton';
import { useRouter } from 'next/router';
import useTrans from '../../hooks/useTrans';
import SupportPackages from '../molecules/SupportPackages';
import styles from '../../styles/components/templates/GetSupportSIB.module.scss';
import { angleLeftIcon, angleRightIcon } from '../../public/icons';
import { SupportPackageType } from '@/models/support-package';

const CARD_MIN_WIDTH = 470;
const CARD_SPACE = 32;
const GAP_CARD = 16;
const BORDER_SIZE = 1;

type PropTypes = {
  isFromSIBHubs?: boolean,
  supportPackages: SupportPackageType[],
}

const GetSupportSIB: FC<PropTypes> = (props) => {
  const { isFromSIBHubs, supportPackages } = props;
  const router = useRouter();
  const trans = useTrans();
  const horizontalContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [currentPackageSelected, setCurrentPackageSelected] = useState<number>(0);

  useEffect(() => {
    if (!horizontalContainerRef?.current) return;
    const containerWidth = (horizontalContainerRef.current as any)?.offsetWidth || 0;
    setCardWidth(containerWidth > CARD_MIN_WIDTH ? containerWidth / 2 - GAP_CARD - BORDER_SIZE : containerWidth);
  }, []);

  const isDisableNextCard = () => {
    const containerWidth = (horizontalContainerRef.current as any)?.offsetWidth || 0;
    const cardCount = containerWidth > CARD_MIN_WIDTH ? 2 : 1;
    return (+(Math.abs(translateValue) / cardWidth).toFixed(0) === supportPackages.length - cardCount);
  };

  const handleBackCard = () => {
    if (translateValue >= 0) return;
    setTranslateValue(translateValue + cardWidth + CARD_SPACE);
  };

  const handleNextCard = () => {
    if (isDisableNextCard()) return;
    setTranslateValue(translateValue - cardWidth - CARD_SPACE);
  };

  const scrollAreaStyle = {
    transform: `translate(${translateValue}px)`,
    justifyContent: supportPackages.length < 2 ? 'center' : 'unset',
  };

  const handleBack = () => {
    if (isFromSIBHubs) {
      router.push({ pathname: '/home', query: { isScrollToSupportCenterSection: 'true' } }, undefined, { scroll: false });
      return;
    };
    router.back();
  };

  return (
    <div className={styles.wrapper}>
      {!supportPackages.length ? (
        <div>{trans.supportPackageEmpty}</div>
      ) : (
        <>
          <div className={styles.head}>
            {!isFromSIBHubs && (
              <>
                <div className="mb-4 pb-1">
                  <Title name={trans.getSupport.title} />
                </div>
                <div className="mb-4 pb-1">
                  <SubTitle name={trans.getSupport.subTitle} />
                </div>
              </>
            )}

            <div className={styles.cards}>
              {supportPackages.length > 2 && (
                <button
                  className={styles.icon}
                  onClick={handleBackCard}
                  disabled={translateValue >= 0}
                  aria-label="Quay lại"
                >
                  {angleLeftIcon}
                </button>
              )}
              <div ref={horizontalContainerRef} className={styles.horizontalContainer}>
                <div style={scrollAreaStyle} className={styles.scrollArea}>
                  {supportPackages.map((val, index) => (
                    <div
                      key={Math.random()}
                      className={styles.card}
                      style={{ minWidth: `${cardWidth}px` }}
                      onClick={() => setCurrentPackageSelected(index)}
                      onKeyDown={() => setCurrentPackageSelected(index)}
                      role="presentation"
                    >
                      <SupportPackages supportPackage={val} isSelected={currentPackageSelected === index} showPopup={isFromSIBHubs} />
                    </div>
                  ))}
                </div>
              </div>
              {supportPackages.length > 2 && (
                <button
                  className={styles.icon}
                  onClick={handleNextCard}
                  disabled={isDisableNextCard()}
                  aria-label="Tiếp theo"
                >
                  {angleRightIcon}
                </button>
              )}
            </div>
          </div>
          <div className={styles.detailSection}>
            <hr className="my-5" />
            <div className="mb-4">
              <SubTitle name={trans.getSupport.desc} />
            </div>
            <Card image={supportPackages[currentPackageSelected].image} subTitle={supportPackages[currentPackageSelected].description} titleSize={'small'} />
            <div className="mt-5">
              <BackButton content={trans.back} onClick={handleBack} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GetSupportSIB;
