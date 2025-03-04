import styles from './input-checkbox.module.css';
export default function InputCheckbox({ label, checked, onChange }) {
	return (
		<div className={styles['input-checkbox']}>
			<label>{label}</label>
			<input type='checkbox' checked={checked} onChange={onChange} />
		</div>
	);
}
