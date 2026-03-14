import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';


export async function handle({event, resolve}) {


    // In production, check for the secret header to prevent unauthorized access
    if (!dev) {
        const wb_secret = env.PORTFOLIO_SECRET;
        const auth_header = event.request.headers.get('x-portfolio-secret');

        if (auth_header !== wb_secret) {
            throw redirect(301, env.WEB_DOMAIN || 'https://aravgoyal.com');
        }
    }

    const response = await resolve(event);
    return response;

}