import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/OtherPractices.module.scss';
import { useRouter } from 'next/router';
import { angleRightIcon, backIcon, nextIcon } from '../../public/icons';

const OtherPractices: FC = () => {
  const trans = useTrans();
  const router = useRouter();

  return (
    <div className={styles.otherPracticesList}>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-one')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 1: Mô tả tranh</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-two')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 2: Hỏi - Đáp</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-three')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 3: Đoạn hội thoại</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-four')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 4: Bài nói ngắn</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-five')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 5: Hoàn thành câu</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-six')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 6: Hoàn thành đoạn văn</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-seven-single')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 7: Đoạn đơn</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-seven-double')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 7: Đoạn kép</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/part-seven-triple')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Phần 7: Đoạn ba</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/grammar')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Ngữ pháp</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
      <div className={styles.otherPracticesListItem} onClick={() => router.push('/practice/vocabulary')} role="presentation">
        <div className={styles.otherPracticesListItemName}>Từ vựng</div>
        <div className={styles.rightIcon}>{angleRightIcon}</div>
      </div>
    </div>
  );
};

export default OtherPractices;
