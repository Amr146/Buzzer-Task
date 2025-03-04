import Star from '@/components/rating-stars/star/star';
import styles from './rating-stars.module.css';
export default function RatingStars({ rating }) {
	const stars = [];
	let $rating = rating;
	if (rating === undefined || rating === null) {
		$rating = 0;
	}
	for (let i = 0; i < 5; i++) {
		if (i < $rating) {
			stars.push(
				<div key={i} className={styles.star}>
					<Star filled />
				</div>
			);
		} else {
			stars.push(
				<div key={i} className={styles.star}>
					<Star />
				</div>
			);
		}
	}
	return <div className={styles.stars}>{stars}</div>;
}
