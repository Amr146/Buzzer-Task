import styles from './auth-header.module.css';
import Logo from '@/components/logo/logo';
export default function AuthHeader() {
	return (
		<div className={styles.logo}>
			<Logo color='black'/>
		</div>
	);
}
