import Link from 'next/link';
import styles from './page.module.css';
import ImagedPageHeader from '@/components/imaged-page-header/imaged-page-header';
import productsImage from '@/public/images/products.png';
import InputCheckbox from '@/components/input-checkbox/input-checkbox';
import ProductCard from '@/components/product-card/product-card';
export default async function Home() {
	const products = await fetch(`${process.env.API_HOST}/products`);
	const categories = await fetch(`${process.env.API_HOST}/categories`);
	const productsData = await products.json();
	const categoriesData = await categories.json();
	console.log(productsData);
	console.log(categoriesData);
	return (
		<>
			<ImagedPageHeader
				title='products'
				imageSrc={productsImage.src}
				alt='home'
				// label='Welcome to our website!'
			/>
			<div className={styles['content-container']}>
				<div className={styles['filters']}>
					<h1>Category</h1>
					{categoriesData.map((category) => (
						<div key={category.id} className={styles['checkboxes']}>
							<InputCheckbox label={category.name} />
						</div>
					))}
				</div>
				<div className={styles['products']}>
					{productsData.map((product) => (
						<div key={product.id} className={styles['product']}>
							<Link href={`/products/${product.id}`}>
								<ProductCard
									name={product.name}
									rating={product.rating}
									imageSrc={product.image}
									price={product.price}
									supplierName={product.supplierName}
									supplierType={product.supplierType}
									onSale={product.onSale}
									salePrice={product.salePrice}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
