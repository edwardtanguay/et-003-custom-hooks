import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

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
		<div className="pageUseFetch">
			<p>The useFetch page.</p>
			<hr />
			{orders.length > 0 ? (
				<p>There are {orders.length} orders.</p>
			) : (
				<p className="loading">
					<FaSpinner className="spinner" /> Loading orders...
				</p>
			)}
			{products.length > 0 ? (
				<p>There are {products.length} products.</p>
			) : (
				<p className="loading">
					<FaSpinner className="spinner" /> Loading products...
				</p>
			)}
		</div>
	);
};
