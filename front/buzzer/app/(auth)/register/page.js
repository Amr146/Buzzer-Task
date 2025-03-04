'use client';
import styles from './page.module.css';
import AuthHeader from '@/components/auth-header/auth-header';
import LabeledButton from '@/components/labeled-button/labeled-button';
import LabeledLink from '@/components/labeled-link/labeled-link';
import registerImage from '@/public/images/register.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/firebase';
import { useStore } from '@/lib/store';

export default function Register() {
	const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
	const setConfirmationResult = useStore(
		(state) => state.setConfirmationResult
	);
	const redirect = useRouter().push;
	const sendOTP = async (e) => {
		e?.preventDefault();
		const phoneNumber = e.target.phoneNumber.value;
		const fullName = e.target.fullName.value;
		if (!recaptchaVerifier) {
			return;
		}
		try {
			const confirmationResult = await signInWithPhoneNumber(
				auth,
				phoneNumber,
				recaptchaVerifier
			);

			setConfirmationResult(confirmationResult);
			redirect('/otp?phoneNumber=' + phoneNumber + '&fullName=' + fullName);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const recaptchaVerifier = new RecaptchaVerifier(
			auth,
			'recaptcha-container',
			{
				size: 'invisible',
			}
		);
		setRecaptchaVerifier(recaptchaVerifier);
		return () => {
			recaptchaVerifier.clear();
		};
	}, [auth]);
	return (
		<>
			<div id='recaptcha-container' />
			<div className={styles['layout-container']}>
				<div className={styles.layout}>
					<div className={styles['layout-content']}>
						<AuthHeader />
						<div className={styles['content']}>
							<h1 className={styles['content-h1']}>Register</h1>
							<p className={styles['content-p']}>Register now!</p>
							<form onSubmit={sendOTP}>
								<input
									className={styles['content-input']}
									name='phoneNumber'
									placeholder='Phone Number'
								/>
								<input
									className={styles['content-input']}
									name='fullName'
									placeholder='Full Name'
								/>
								<div className={styles['content-button']}>
									<LabeledButton label='Send OTP' />
								</div>
								<p className={styles['content-p']}>
									Already registered?{' '}
									<span className={styles['content-link']}>
										<LabeledLink link='/login' label='Log in' />
									</span>
								</p>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.layout}>
					<div className={styles['layout-image']}>
						<Image src={registerImage} alt='register' />
					</div>
				</div>
			</div>
		</>
	);
}
