import { useState } from 'react';

export const PageUseToggle = () => {
	const [showAdvertisements, setShowAdvertisements] = useState(false);

	return (
		<>
			<p>The useToggle page.</p>

			<h2>User Settings</h2>
			<p><button onClick={() => setShowAdvertisements(!showAdvertisements)}>Advertisements</button> <span style={{ color: showAdvertisements ? 'green' : 'red' }}> {showAdvertisements ? 'yes, show advertisements' : 'no, do not show advertisements'}</span></p>
		</>
	);
};