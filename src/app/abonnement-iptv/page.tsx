import type { Metadata } from 'next';

import SectionPrice from '@/app/components/price/SectionPrice';

export const metadata: Metadata = {
  title: 'باقات اشتراك IPTV في المغرب | أسعار IPTV Forja',

  description:
    'اكتشف باقات اشتراك IPTV Forja في المغرب بأسعار مناسبة، اشتراكات شهرية وسنوية، قنوات رياضية، أفلام ومسلسلات، جودة عالية وبث مستقر بدون تقطيع.',

  keywords: [
    'باقات IPTV',
    'اشتراك IPTV المغرب',
    'أسعار IPTV المغرب',
    'اشتراك IPTV Forja',
    'Forja IPTV',
    'IPTV Forja',
    'اشتراك IPTV شهري',
    'اشتراك IPTV سنوي',
    'IPTV بدون تقطيع',
    'أفضل اشتراك IPTV في المغرب',
    'abonnement IPTV Maroc',
    'prix IPTV Maroc',
  ],
};

export default function Page() {
  return (
    <main>
      <section style={{ contentVisibility: 'auto' }}>
        <SectionPrice />
      </section>
    </main>
  );
}