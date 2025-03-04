import FooterSocialButton from '../social-button/social-button';

import styles from './social-buttons.module.css';

import facebookImage from '@/public/images/facebook.png';
import twitterImage from '@/public/images/twitter.png';
import instagramImage from '@/public/images/instagram.png';
import linkedinImage from '@/public/images/linkedin.png';
import youtubeImage from '@/public/images/youtube.png';
export default function FooterSocialButtons() {
	return (
		<div className={styles['social-buttons']}>
			<FooterSocialButton logo={facebookImage} link='' alt='facebook image' />
			<FooterSocialButton logo={twitterImage} link='' alt='twitter image' />
			<FooterSocialButton logo={youtubeImage} link='' alt='youtube image' />
			<FooterSocialButton logo={instagramImage} link='' alt='instagram image' />
			<FooterSocialButton logo={linkedinImage} link='' alt='linkedin image' />
		</div>
	);
}
