'use client';
import styles from './page.module.css';
import AuthHeader from '@/components/auth-header/auth-header';
import LabeledButton from '@/components/labeled-button/labeled-button';
import { auth } from '@/firebase';
import OTPImage from '@/public/images/otp.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function OTP() {
	const query = useSearchParams();
	const phoneNumber = query.get('phoneNumber');
	const fullName = query.get('fullName');
	if (!phoneNumber) {
		redirect('/login');
	}

	const redirect = useRouter().push;

	const confirmationResult = useStore((state) => state.confirmationResult);
	const setUserId = useStore((state) => state.setUserId);
	const userId = useStore((state) => state.userId);
	const verifyOTP = async (e) => {
		e?.preventDefault();
		const otp = e.target.otp.value;
		if (otp.length !== 6) {
			return;
		}
		try {
			await confirmationResult.confirm(otp);
			console.log('OTP verified successfully');
			const user = auth.currentUser;
			setUserId(user.uid);
			redirect('/');
		} catch (error) {
			console.log('Invalid OTP');
		}
	};

	return (
		<>
			<div id='recaptcha-container' />
			<div className={styles['layout-container']}>
				<div className={styles.layout}>
					<div className={styles['layout-content']}>
						<AuthHeader />
						<div className={styles['content']}>
							<h1 className={styles['content-h1']}>Login Code</h1>
							<p className={styles['content-p']}>
								Enter the authentication code we sent at {phoneNumber}
							</p>
							<form onSubmit={verifyOTP}>
								<input
									className={styles['content-input']}
									name='phoneNumber'
									placeholder='Phone Number'
									value={phoneNumber}
									disabled
								/>
								<input
									className={styles['content-input']}
									name='otp'
									placeholder='Code'
								/>
								<div className={styles['content-button']}>
									<LabeledButton label='Submit' />
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.layout}>
					<div className={styles['layout-image']}>
						<Image src={OTPImage} alt='otp-image' />
					</div>
				</div>
			</div>
		</>
	);
}
