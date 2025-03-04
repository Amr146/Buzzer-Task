'use client';
import styles from './page.module.css';
import AuthHeader from '@/components/auth-header/auth-header';
import LabeledButton from '@/components/labeled-button/labeled-button';
import LabeledLink from '@/components/labeled-link/labeled-link';
import loginImage from '@/public/images/login.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/firebase';
export default function login() {
	const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
	const setConfirmationResult = useStore(
		(state) => state.setConfirmationResult
	);
	const redirect = useRouter().push;
	const sendOTP = async (e) => {
		e?.preventDefault();
		const phoneNumber = e.target.phoneNumber.value;
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
			redirect('/otp?phoneNumber=' + phoneNumber);
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
							<h1 className={styles['content-h1']}>Welcome!</h1>
							<p className={styles['content-p']}>
								Enter you phone number with the region code
							</p>
							<form onSubmit={sendOTP}>
								<input
									className={styles['content-input']}
									name='phoneNumber'
									placeholder='Phone Number'
								/>
								<div className={styles['content-button']}>
									<LabeledButton label='Send OTP' />
								</div>
								<p className={styles['content-p']}>
									Don’t have an Account?{' '}
									<span className={styles['content-link']}>
										<LabeledLink link='/register' label='Register' />
									</span>
								</p>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.layout}>
					<div className={styles['layout-image']}>
						<Image src={loginImage} alt='login' />
					</div>
				</div>
			</div>
		</>
	);
}
