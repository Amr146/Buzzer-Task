import styles from './input.module.css';
export default function Input({ label, textarea, ...props }) {
	return (
		<div>
			<p className={styles.p}>
				<label className={styles.label}>{label}</label>
				{textarea ? (
					<textarea className={styles.input} {...props} />
				) : (
					<input className={styles.input} {...props} />
				)}
			</p>
		</div>
	);
}
