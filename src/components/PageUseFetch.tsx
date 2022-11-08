import { useState, useEffect } from 'react';
import axios from 'axios';

const ordersUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';
const productsUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';

export const PageUseFetch = () => {
	const [orders, setOrders] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setOrders((await axios.get(ordersUrl)).data);
			})();
		}, Math.floor(Math.random() * 3000));
	}, []);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setProducts((await axios.get(productsUrl)).data);
			})();
		}, Math.floor(Math.random() * 3000));
	}, []);

	return (
		<>
			<p>The useFetch page.</p>
			<hr />
			{orders.length > 0 ? (
				<p>There are {orders.length} orders.</p>
			) : (
				<p>Loading orders...</p>
			)}
			{products.length > 0 ? (
				<p>There are {products.length} products.</p>
			) : (
				<p>Loading products...</p>
			)}
		</>
	);
};
