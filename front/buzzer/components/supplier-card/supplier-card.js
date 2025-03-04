import styles from './supplier-card.module.css';
import Image from 'next/image';
import addressIcon from '@/public/images/address-icon.png';
import RatingStars from '../rating-stars/rating-stars';
export default function SupplierCard({
	horizontal,
	imageSrc,
	name,
	type,
	address,
	rating,
}) {
	return (
		<div
			className={horizontal ? styles['horizontal'] : styles['supplier-card']}
		>
			<div
				className={
					horizontal
						? styles['horizontal-image']
						: styles['supplier-card-image']
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
				<h3>{type}</h3>
				<div className={styles['address']}>
					<div className={styles['address-icon']}>
						<Image src={addressIcon} alt='address icon' />
					</div>
					<p>{address}</p>
				</div>
			</div>
		</div>
	);
}
