import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/SubTopic.module.scss';
import { useRouter } from 'next/router';
import { backIcon, nextIcon } from '../../public/icons';

const SubTopic: FC = () => {
	const trans = useTrans();
	const router = useRouter();

	return (
		<div className={styles.subTopic}>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 1: PHOTOS</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 2: QUESTION- RESPONSE</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 3: CONVERSATIONS</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 4: SHORT TALKS </div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 5: INCOMPLETE SENTENCES</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 6: TEXT COMPLETION </div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 7: SINGLE PASSAGES</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 7: DOUBLE PASSAGES</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
			<div className={styles.subTopicItem}>
				<div className={styles.subTopicItemName}>PART 7: TRIPLE PASSAGES</div>
				<div className={styles.subTopicItemProgress}>
					<div className={styles.subTopicItemProgressBar}>
						<div className={styles.colorPercentBar} />
					</div>
					<div className={styles.subTopicItemProgressPercent}>5%</div>
				</div>
			</div>
		</div>
	);
};

export default SubTopic;
