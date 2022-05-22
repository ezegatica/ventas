import Redis from 'ioredis';

const client = new Redis(process.env.REDIS_URL);

const redis = {
    get: async (key) => {
        return await client.get(key);
    },
    set: async (key, value) => {
        return await client.set(key, value, 'EX', 60 * 60 * 24);
    }
};

export default redis;