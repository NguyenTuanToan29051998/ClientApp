import { FC } from "react";
import styles from "../../styles/components/molecules/QuoteBox.module.scss";
import { quote1Icon, quote2Icon } from "../../public/icons";
import useTrans from "../../hooks/useTrans";

const QuoteBox: FC = () => {
  const trans = useTrans();
  return (
    <div className={styles.wrapper}>
      <div className={styles.quoteBox}>
        <span className={styles.quoteLeft}>{quote1Icon}</span>
        <div className={styles.content}>{trans.home.quote}</div>
        <span className={styles.quoteRight}>{quote2Icon}</span>
      </div>
    </div>
  );
};

export default QuoteBox;
