import { Searcher } from 'fast-fuzzy';
import { getLabel } from '$lib/languages';
import { searchStore } from '$lib/stores/searchStore';

const getEntryText = (entry: App.PatchouliEntry) => {
	let text = '';
	entry.pages.forEach((page: App.PatchouliPage) => {
		if (page.type === 'patchouli:text' && page.text) {
			text += getLabel(page.text);
		}
	});
	return text;
};

export const initializeSearch = (
	categories: { [x: string]: App.PatchouliCategory } | undefined,
	entries: { [x: string]: App.PatchouliEntry } | undefined
) => {
	const searchCandidates: Array<App.SearchCandidate> = [];
	if (categories) {
		Object.values(categories).forEach((category) => {
			searchCandidates.push({
				title: getLabel(category.name) || '',
				text: getLabel(category.description) || '',
				href: `/category/${category.id}`
			});
		});
	}
	if (entries) {
		Object.values(entries).forEach((entry) => {
			searchCandidates.push({
				title: getLabel(entry.name) || '',
				text: getEntryText(entry) || '',
				href: `/category/${entry.category}/entry/${entry.name}`
			});
		});
	}

	searchStore.set(
		new Searcher(searchCandidates, {
			keySelector: (s: App.SearchCandidate) => {
				const items: Array<string> = [];
				if (s.title) {
					items.push(s.title);
				}
				if (s.text) {
					items.push(s.text);
				}
				return items;
			},
			returnMatchData: true
		})
	);
};
