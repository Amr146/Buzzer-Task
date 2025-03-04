import Link from 'next/link';
export default function LabeledLink({ label, link }) {
	return (
		<Link href={link}>
			<span>{label}</span>
		</Link>
	);
}
