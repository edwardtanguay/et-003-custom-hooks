import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {

	const [items, setItems] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setItems((await axios.get(url)).data);
			})();
		}, Math.floor(Math.random() * 2000) + 1000);
	}, []);

	return {items, totalItems: items.length, isLoading: items.length === 0}
}