import styles from './contact-info.module.css';
import phoneIcon from '@/public/images/phone-icon.png';
import emailIcon from '@/public/images/email-icon.png';
import Image from 'next/image';
export default function ContactInfo() {
	const phoneNumber = '+91 1234567891';
	const email = 'munasbas007@gmail.com';
	return (
		<div className={styles['contact-info']}>
			<h2>Contact info</h2>
			<div className={styles['contact-info__item']}>
				<Image src={phoneIcon} alt='phone icon' />
				<p>{phoneNumber}</p>
			</div>
			<div className={styles['contact-info__item']}>
				<Image src={emailIcon} alt='email icon' />
				<p>{email}</p>
			</div>
		</div>
	);
}
