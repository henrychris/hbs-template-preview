import posthog from 'posthog-js';
import type { HandleClientError } from '@sveltejs/kit';

export async function init() {
	posthog.init('phc_9IJ3TdK92llkQNMVmW3wpY9geqxAXVusWRT0nIbtYRu', {
		api_host: 'https://us.i.posthog.com',
		defaults: '2026-01-30',
		capture_exceptions: true
	});
}

export const handleError: HandleClientError = async ({ error, status, message }) => {
	posthog.captureException(error);

	return {
		message,
		status
	};
};
