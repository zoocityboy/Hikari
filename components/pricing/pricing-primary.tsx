import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser,
  getPlans
} from '@/utils/supabase/queries';
import PricingDefault from './pricing-default';
import PricingRounded from './pricing-rounded';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getPlans(supabase),
    getSubscription(supabase)
  ]);

  console.log("products", products);
  console.log("subscription", subscription);

  return (
    <PricingRounded
      user={user}
      products={products ?? []}
      subscription={subscription}
    />

    // <PricingDefault
    //   user={user}
    //   products={products ?? []}
    //   subscription={subscription}
    // />
  );
}
