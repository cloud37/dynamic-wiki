import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import Page from './+page.svelte';

describe('Index Page', () => {
	test('should show file upload', () => {
		render(Page);
		const uploadPrompt = screen.getByText(
			'Bitte klicken sie hier um Ihre Zeitnachweisdokumente hochzuladen oder ziehen Sie ihre Dateien hierher und legen sie ab'
		);
		expect(uploadPrompt).toBeInTheDocument();
	});
});
