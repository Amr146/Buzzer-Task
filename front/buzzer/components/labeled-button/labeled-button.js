import Link from 'next/link';
import styles from './labeled-button.module.css';
export default function LabeledButton({
	label,
	onClick,
	isLink,
	link,
	color = 'light',
	...props
}) {
	return (
		<div className={styles['labeled-button'] + ' ' + styles[color]}>
			{isLink ? (
				<Link href={link} {...props}>
					<p>{label}</p>
				</Link>
			) : (
				<button
					className={styles['labeled-button-button']}
					onClick={onClick}
					{...props}
				>
					<p>{label}</p>
				</button>
			)}
		</div>
	);
}
