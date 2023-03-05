import { createClient } from 'redis';

export const handler = async (event) => {

  const client = createClient({
    socket: {
      host: 'hcpromedical-redis.vpko5l.ng.0001.use1.cache.amazonaws.com'
    }
  });
  
  client.on('error', err => console.log('Redis Client Error', err));
  
  await client.connect();
  
  await client.set('key', 'value');
  const value = await client.get('key');
  console.log(value);
  await client.disconnect();

  return value;
};
