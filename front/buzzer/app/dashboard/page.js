'use client';
import Input from '@/components/input/input';
import styles from './page.module.css';
import { use, useEffect, useState } from 'react';
import Info from '@/components/info/input';
export default function Page() {
	const [chosenTable, setChosenTable] = useState(null);

	// let data;

	// useEffect(() => {
	// 	fetch('http://localhost:3000/api/products')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			data = data;
	// 		});
	// }, []);

	let content = <div></div>;
	if (chosenTable === null) {
		content = (
			<div>
				<h1 className={styles['content-h1']}>Choose a table</h1>
			</div>
		);
	} else if (chosenTable === 'products') {
		content = (
			<div>
				<h1 className={styles['content-h1']}>Products</h1>
				<div className={styles['content-input']}>
					<Input placeholder='Search for a product' />
				</div>
				{/* {data.map((product) => {
					<Info key={product.id} product={product} />;
				})} */}
			</div>
		);
	} else if (chosenTable === 'categories') {
		content = (
			<div>
				<h1 className={styles['content-h1']}>Categories</h1>
				<div className={styles['content-input']}>
					<Input placeholder='Search for a category' />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<aside className={styles.aside}>
				<button
					className={styles['aside-button']}
					onClick={() => setChosenTable('products')}
				>
					<p className={styles['aside-p']}>Products</p>
				</button>
				<button
					className={styles['aside-button']}
					onClick={() => setChosenTable('categories')}
				>
					<p className={styles['aside-p']}>Categories</p>
				</button>
			</aside>
			<div className={styles.content}>{content}</div>
		</div>
	);
}
