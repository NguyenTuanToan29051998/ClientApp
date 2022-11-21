import { FC } from "react";
import styles from "../../../styles/components/atoms/titles/TabTitle.module.scss";

type PropsType = {
  title: string;
};

const TabTitle: FC<PropsType> = (props) => {
  const { title } = props;

  return (
    <p className={styles.wrapper}>{title}</p>
  );
};

export default TabTitle;
