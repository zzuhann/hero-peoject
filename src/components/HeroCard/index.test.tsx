import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import HeroCard from '.';
import { StableNavigateContextProvider } from '@/context';
import { BrowserRouter } from 'react-router-dom';

test('click HeroCard, it should navigate to /heroes/:id route', () => {
	render(
		<BrowserRouter>
			<StableNavigateContextProvider>
				<HeroCard
					id='1'
					name='batman'
					imageUrl='http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg'
					isActive={false}
				/>
			</StableNavigateContextProvider>
		</BrowserRouter>,
	);
	const heroCard = screen.getByText('batman');
	heroCard.click();
	expect(window.location.pathname).toBe('/heroes/1');
});
