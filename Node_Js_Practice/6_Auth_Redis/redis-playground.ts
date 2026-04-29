/* import { createClient } from 'redis';

async function runPlayground() {
const client = createClient();


client.on('error', (err) => console.log('Redis Client Error', err));
  
  console.log('Connecting to Redis...');
  await client.connect();
  console.log('Connected!\n');

//string
  await client.set('user:1:name', 'Vignesh');
  const name = await client.get('user:1:name');
  console.log(`Stored Name: ${name}`);

  await client.setEx('otp:vignesh', 3, '778899');
  console.log('OTP set! It will self-destruct in 3 seconds...');

  //Hashes
  await client.hSet('user:1:profile', {
    role: 'engineer',
    experience: 'Full Stack',
    location: 'Salem'
  });
  // Get the whole object
  const profile = await client.hGetAll('user:1:profile');
  console.log('Full Profile:', profile);
  // Get just one field
  const role = await client.hGet('user:1:profile', 'role');
  console.log(`Just the role: ${role}`);

  //sets
  await client.sAdd('user:1:ips', '192.168.1.1');
  await client.sAdd('user:1:ips', '192.168.1.2');
  await client.sAdd('user:1:ips', '192.168.1.1'); // This duplicate is ignored!
  const ips = await client.sMembers('user:1:ips');
  console.log('Unique IPs:', ips);

  console.log('\nCleaning up test data...');
  await client.del(['user:1:name', 'user:1:profile', 'user:1:ips']);
  await client.disconnect();
  console.log('Disconnected.');
}

runPlayground();

*/

import { createClient } from 'redis';

async function testRateLimiter() {
  const client = createClient();
  await client.connect();

  const LIMIT = 3; // Allow 3 requests...
  const WINDOW_SECONDS = 5; // ...every 5 seconds.

  // This is the core logic we will later put in our Express Middleware
  async function rateLimit(ip: string): Promise<boolean> {
    const key = `rate_limit:${ip}`;

    // 1. INCR: If the key doesn't exist, it creates it as 1. 
    // If it does exist, it adds 1. (This is Atomic & Un-hackable)
    const currentCount = await client.incr(key);

    // 2. EXPIRE: If this is the VERY FIRST request, start the TTL stopwatch
    if (currentCount === 1) {
      await client.expire(key, WINDOW_SECONDS);
    }

    // 3. Evaluate: Did they cross the line?
    if (currentCount > LIMIT) {
      return false; // Block the request
    }
    
    return true; // Allow the request
  }

  
  // THE TEST SCENARIO
  console.log(`\n🚦 Testing Rate Limiter (Limit: ${LIMIT} req / ${WINDOW_SECONDS}s)`);
  const testIP = '192.168.1.55';

  // Simulate a hacker clicking a button 5 times instantly
  console.log('--- Hacker sends 5 rapid requests ---');
  for (let i = 1; i <= 5; i++) {
    const isAllowed = await rateLimit(testIP);
    
    if (isAllowed) {
      console.log(`Request ${i}: ✅ 200 OK (Allowed)`);
    } else {
      console.log(`Request ${i}: ❌ 429 Too Many Requests (Blocked!)`);
    }
  }

  // Simulate waiting for the window to reset
  console.log(`\n⏳ Waiting ${WINDOW_SECONDS} seconds for the Redis TTL to clear the memory...`);
  await new Promise(resolve => setTimeout(resolve, WINDOW_SECONDS * 1000));

  // Try one more time after the wait
  console.log('--- Legitimate request after waiting ---');
  const allowedAfterReset = await rateLimit(testIP);
  console.log(`Request 6: ${allowedAfterReset ? '✅ 200 OK (Allowed)' : '❌ Blocked'}`);

  await client.disconnect();
}

testRateLimiter();