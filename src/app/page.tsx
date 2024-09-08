import { PersistentTabs } from '@/components/persistent-tabs/base-animated-tabs';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <main>
        <Suspense>
          <PersistentTabs />
        </Suspense>
      </main>
    </div>
  );
}
