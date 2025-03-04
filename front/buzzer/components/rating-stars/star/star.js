import Image from 'next/image';

import star from '@/public/images/star.png';
import filledStar from '@/public/images/star-filled.png';

export default function Star({ filled }) {
	return (
		<Image
			src={filled ? filledStar : star}
			alt={filled ? 'filled star' : 'empty star'}
		/>
	);
}
