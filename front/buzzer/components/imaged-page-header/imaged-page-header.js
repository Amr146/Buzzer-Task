import Image from 'next/image';
import styles from './imaged-page-header.module.css';

export default function ImagedPageHeader({ title, imageSrc, alt, label }) {
	return (
		<header className={styles.header}>
			<Image src={imageSrc} alt={alt} fill />
			<div className={styles['black-layer']} />
			<div>
				<h1>{title}</h1>
				<p>{label}</p>
			</div>
		</header>
	);
}
