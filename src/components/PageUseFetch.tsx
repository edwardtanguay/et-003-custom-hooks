import { FaSpinner } from 'react-icons/fa';
import { useFetch } from '../hooks/useFetch';

const ordersUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';
const productsUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';

export const PageUseFetch = () => {
	const {
		items: orders,
		totalItems: totalOrders,
		isLoading: ordersLoading,
	} = useFetch(ordersUrl);
	const {
		items: products,
		totalItems: totalProducts,
		isLoading: productsLoading,
	} = useFetch(productsUrl);

	return (
		<div className="pageUseFetch">
			<p>The useFetch page.</p>
			<hr />
			{!productsLoading ? (
				<>
					<p>There are {totalProducts} products.</p>
					{products.map((product: any, i) => {
						return (
							<span key={product.productID}>
								{product.productID}
								{i !== totalProducts - 1 && <>,</>}{' '}
							</span>
						);
					})}
				</>
			) : (
				<p className="loading">
					<FaSpinner className="spinner" /> Loading products...
				</p>
			)}
			{!ordersLoading ? (
				<>
					<p>There are {totalOrders} orders.</p>
					{orders.map((order: any, i) => {
						return (
							<span key={order.orderID}>
								{order.orderID}
								{i !== totalOrders - 1 && <>,</>}{' '}
							</span>
						);
					})}
				</>
			) : (
				<p className="loading">
					<FaSpinner className="spinner" /> Loading orders...
				</p>
			)}
		</div>
	);
};
