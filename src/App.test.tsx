import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('go to / route, it should navigate to /heroes route', () => {
	render(<App />);

	expect(screen.getByText(/123/i)).toBeInTheDocument();
});
