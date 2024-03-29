import AdCard from '@/components/AdCard';
import { render } from '@testing-library/react';

describe('AdCard', () => {
  it('renders correctly', () => {
    const res = render(
      <AdCard
        ad={{
          title: 'mon annonce',
          picture: 'http://img.com/i.png',
          price: 42,
        }}
        link="/ads/1"
      />
    );

    expect(res.baseElement).toMatchInlineSnapshot(`
<body>
  <div>
    <div
      class="w-[400px]"
    >
      <a
        href="/ads/1"
      >
        <div
          class="shadow-md border rounded-lg p-6 bg-white mr-3 mb-3"
        >
          <img
            class="h-[200px] w-full object-cover rounded-md"
            src="http://img.com/i.png"
          />
          <div
            class="flex justify-between pt-6"
          >
            <div
              class="ad-card-title"
            >
              mon annonce
            </div>
            <div
              class="ad-card-price"
            >
              42
               €
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</body>
`);
  });
});
