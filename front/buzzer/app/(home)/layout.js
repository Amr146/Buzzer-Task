import Footer from '@/components/footer/footer';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{children}
				<Footer />
			</div>
		</div>
	);
}
