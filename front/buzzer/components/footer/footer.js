import styles from './footer.module.css';
import footerImage from '@/public/images/footer.png';
import Image from 'next/image';
import FooterSocialButtons from './social-buttons/social-buttons';
import Logo from '../logo/logo';
import ContactInfo from './contact-info/contact-info';
import LabeledLink from '../labeled-link/labeled-link';
import GradientInput from '../gradient-input/gradient-input';
import LabeledButton from '../labeled-button/labeled-button';

export default function Footer() {
	return (
		<div className={styles['footer-container']}>
			<div className={styles.footer}>
				<Image
					src={footerImage}
					alt='footer'
					style={{
						objectFit: 'cover',
					}}
				/>
				<div className={styles['black-layer']} />
				<div className={styles['footer-content']}>
					<div className={styles.sections}>
						<div className={styles['section-info']}>
							<Logo />
							<p>
								These guys have been absolutely outstanding. When I needed them
								they came through in a big way! I know that if you buy this
								theme.
							</p>
							<ContactInfo />
						</div>
						<div className={styles.section}>
							<h3>Account</h3>
							<LabeledLink link='/' label='Home' />
							<LabeledLink link='/' label='About us' />
							<LabeledLink link='/' label='Contact us' />
						</div>
						<div className={styles.section}>
							<h3>Legals</h3>
							<LabeledLink link='/' label='Privacy Policy' />
							<LabeledLink link='/' label='Terms & Condition' />
						</div>
						<div className={styles['section-subscribe']}>
							<h3>Subscribe</h3>
							<GradientInput placeholder='Enter Your Email' />
							<div className={styles['subscribe-button']}>
								<LabeledButton color='dark' label='Subscribe' />
							</div>
						</div>
					</div>
					<div>
						<hr />
						<div className={styles['footer-bottom']}>
							<div style={{ width: '1px' }}></div>
							<FooterSocialButtons />
							<p>@2023 For Salone All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
