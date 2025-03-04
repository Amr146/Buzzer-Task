import styles from './product-card.module.css';
import Image from 'next/image';
import RatingStars from '../rating-stars/rating-stars';
export default function ProductCard({
	horizontal,
	imageSrc,
	name,
	supplierType,
	supplierName,
	rating,
	onSale,
	price,
	salePrice,
}) {
	return (
		<div className={horizontal ? styles['horizontal'] : styles['product-card']}>
			<div
				className={
					horizontal ? styles['horizontal-image'] : styles['product-card-image']
				}
			>
				<Image src={imageSrc} alt={name} fill />
			</div>
			<div
				className={`${styles['info']} ${
					horizontal ? styles['info-horizontal'] : ''
				}`}
			>
				<div
					className={horizontal ? styles['stars-horizontal'] : styles['stars']}
				>
					<RatingStars rating={rating} />
				</div>

				<h2>{name}</h2>
				<p>{supplierName}</p>
				<h3 className={styles['info-h3']}>{supplierType}</h3>
				<div className={styles['price']}>
					<h3
						className={`${styles['price-h3']} ${onSale ? styles.onSale : ''}`}
					>
						SAR {price}
					</h3>
					{onSale !== 0 && <h2>SAR {salePrice}</h2>}
				</div>
			</div>
		</div>
	);
}
