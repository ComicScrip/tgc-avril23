import AdCard from '@/components/AdCard';
import Layout from '@/components/Layout';
import { useAdsQuery } from '@/graphql/generated/schema';

export default function Home() {
  const { data } = useAdsQuery();

  return (
    <Layout title="Accueil - TGC">
      <h1 className="pt-4 pb-4 text-lg"> Annonces récentes</h1>
      <div className="flex flex-wrap">
        {typeof data === 'undefined' ? (
          'chargement'
        ) : (
          <div data-testid="ads-list">
            {data.ads.map((a) => {
              return <AdCard key={a.id} ad={a} link={`/ad/${a.id}`} />;
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
