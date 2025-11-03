import { RateLimiterMemory } from "rate-limiter-flexible";

export const contactLimiter = new RateLimiterMemory({
  keyPrefix: "contact",
  points: 5,
  duration: 600, // 10 minutes
});

export async function checkRateLimit(identifier: string): Promise<boolean> {
  try {
    await contactLimiter.consume(identifier);
    return true;
  } catch (error) {
    return false;
  }
}

