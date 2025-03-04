import ButtonCard from '@/components/button-card/button-card';
import styles from './page.module.css';
import ImagedPageHeader from '@/components/imaged-page-header/imaged-page-header';
import SupplierCard from '@/components/supplier-card/supplier-card';
export default async function productDetails({ params }) {
	const { productSlug } = await params;

	let product;

	try {
		const res = await fetch(`${process.env.API_HOST}/products/${productSlug}`);
		if (!res.ok) {
			return (
				<header className={styles.header}>
					<p>Product Details</p>
					<p>Product not found</p>
				</header>
			);
		}
		product = await res.json();
	} catch (error) {
		console.log(error);
		return (
			<header className={styles.header}>
				<p>Product Details</p>
				<p>Product not found</p>
			</header>
		);
	}
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<ImagedPageHeader
					title='Products Details'
					imageSrc={product.image}
					alt={product.name}
					label='Home / Product Details'
				/>
				<div className={styles['content-container']}>
					<div className={styles['content']}>
						<div>
							<h2 className={styles['content-h2']}>Supplier</h2>
							<SupplierCard
								horizontal
								imageSrc={product.supplierImage}
								name={product.supplierName}
								type={product.supplierType}
								address={product.supplierAddress}
								rating={product.supplierRating}
							/>
						</div>
						<div>
							<h2 className={styles['content-h2']}>Description</h2>
							<p className={styles['content-p']}>{product.description}</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.card}>
				<ButtonCard
					price={product.price}
					title={product.name}
					onSale={product.onSale}
					salePrice={product.salePrice}
					rating={product.rating}
					label='ADD TO BASKET'
				/>
			</div>
		</div>
	);
}
