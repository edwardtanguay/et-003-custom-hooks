import { useState } from 'react';

type Fn = () => void;

export const useToggle = (defaultValue: boolean, colorTrue = 'green', colorFalse = 'red'): [boolean, Fn, Fn, string] => {
	const [value, setValue] = useState(defaultValue);

	const toggleValue = () => {
		setValue(!value);
	}

	const turnOffValue = () => {
		setValue(false);
	}

	const color = value ? colorTrue : colorFalse;
	
	return [value, toggleValue, turnOffValue, color];
}