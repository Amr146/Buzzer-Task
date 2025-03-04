import whiteLogo from '@/public/images/logo-white.png';
import blackLogo from '@/public/images/logo-black.png';
import Image from 'next/image';
import styles from './logo.module.css';

export default function Logo({ color = 'white' }) {
	return (
		<Image
			className={styles.logo}
			src={color === 'black' ? blackLogo : whiteLogo}
			alt='logo'
		/>
	);
}
