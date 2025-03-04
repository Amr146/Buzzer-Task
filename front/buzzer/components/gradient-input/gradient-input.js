import styles from './gradient-input.module.css';
import emailImage from '@/public/images/email-icon.png';
import Image from 'next/image';

export default function GradientInput({ placeholder, type, value, onChange }) {
	return (
		<div className={styles['gradient-input']}>
			<Image src={emailImage} alt='email icon' />
			<input
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
