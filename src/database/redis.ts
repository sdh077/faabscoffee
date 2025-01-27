import { Redis } from '@upstash/redis'

const url = process.env.UPSTASH_REDIS_URL
const token = process.env.UPSTASH_REDIS_TOKEN

const redis = new Redis({
  url,
  token
});

export default redis;