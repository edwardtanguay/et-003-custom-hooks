import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [ads, toggleAds, adsOff, adColor] = useToggle(false);
	const [mails, toggleMails, mailsOff, mailColor] = useToggle(false);
	const [layoutDark, toggleLayout, layoutOff, layoutColor] = useToggle(
		true,
		'#444',
		'yellow'
	);

	return (
		<div className="pageUseToggle">
			<p>The useToggle page.</p>

			<h2>User Settings</h2>
			<p>
				<button onClick={() => toggleAds()}>Advertisements</button>{' '}
				<span style={{ color: adColor }}>
					{' '}
					{ads
						? 'yes, show advertisements'
						: 'no, do not show advertisements'}
				</span>
			</p>
			<p>
				<button onClick={() => toggleMails()}>Mails</button>{' '}
				<span style={{ color: mailColor }}>
					{' '}
					{mails ? 'yes, send me mails' : 'no, do not send me mails'}
				</span>
			</p>
			<p>
				<button
					style={{ backgroundColor: layoutColor }}
					onClick={() => toggleLayout()}
				>
					Layout: {layoutDark ? 'dark' : 'light'}
				</button>
			</p>
			<hr />
			<button onClick={() => adsOff()}>Turn off advertisements</button>
			<button onClick={() => mailsOff()}>Turn off mails</button>
		</div>
	);
};
