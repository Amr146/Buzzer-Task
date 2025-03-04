import Image from 'next/image';
import styles from './social-button.module.css';

export default function FooterSocialButton({ logo, link, alt }) {
	return (
		<div className={styles['social-button']}>
			<a href={link} target='_blank'>
				<Image src={logo} alt={alt} />
			</a>
		</div>
	);
}
