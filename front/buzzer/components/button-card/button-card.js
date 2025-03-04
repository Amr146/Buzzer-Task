import LabeledButton from '../labeled-button/labeled-button';
import styles from './button-card.module.css';
import RatingStars from '@/components/rating-stars/rating-stars';

export default function ButtonCard({
	onCLick,
	price,
	salePrice,
	title,
	onSale,
	label,
	rating,
	isLink,
	link,
}) {
	if (!price) {
		price = 0;
	}
	if (!salePrice) {
		salePrice = 0;
	}
	if (!rating) {
		rating = 0;
	}
	if (!onSale) {
		onSale = 0;
	}
	if (typeof price === 'string') {
		price = parseFloat(price);
	}
	if (typeof salePrice === 'string') {
		salePrice = parseFloat(salePrice);
	}
	if (typeof onSale === 'string') {
		onSale = parseFloat(onSale);
	}
	return (
		<div className={styles['card']}>
			<div className={styles.stars}>
				<RatingStars rating={rating} />
			</div>
			<h1>{title}</h1>
			<div className={styles['price']}>
				<h2>SAR {price}</h2>
				{onSale !== 0 && <h3>SAR {salePrice}</h3>}
			</div>
			<LabeledButton
				label={label}
				onClick={onCLick}
				isLink={isLink}
				link={link}
			/>
		</div>
	);
}
