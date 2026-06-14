import type { Metadata } from 'next';

import Subscrib from '@/app/components/freetrial/Subscriab';

export const metadata: Metadata = {
  title: 'تجربة IPTV مجانية في المغرب | IPTV Forja',

  description:
    'جرّب IPTV Forja مجاناً قبل الشراء واختبر جودة القنوات، سرعة السيرفرات، البث بدون تقطيع، ودعم مختلف الأجهزة في المغرب.',

  keywords: [
    'تجربة IPTV مجانية',
    'IPTV مجاني المغرب',
    'تجربة اشتراك IPTV',
    'اختبار IPTV قبل الشراء',
    'IPTV Forja',
    'Forja IPTV',
    'اشتراك IPTV المغرب',
    'سيرفر IPTV بدون تقطيع',
    'test IPTV gratuit Maroc',
    'abonnement IPTV Maroc',
  ],
};

export default function Freetrial() {
  return (
    <main className="h-screen flex justify-center items-center">
      <section>
        <Subscrib />
      </section>
    </main>
  );
}