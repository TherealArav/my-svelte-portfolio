import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function handle({event, resolve}) {

    const wb_secret = env.PORTFOLIO_SECRET;
    const auth_header = event.request.headers.get('x-portfolio-secret');

    if (auth_header !== wb_secret) {
        throw redirect(301, env.WEB_DOMAIN);
    }

    const response = await resolve(event);
    return response;


}