import styles from './input.module.css';
export default function Info({ label, value, ...props }) {
	return (
		<div>
			<p className={styles.p}>
				<label className={styles.label}>{label}</label>
				<span className={styles.value}>{value}</span>
			</p>
		</div>
	);
}
