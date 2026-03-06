import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // We are using adapter-node to build a standalone server for Docker
        adapter: adapter()
    }
};

export default config;