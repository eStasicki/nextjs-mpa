import { NextSeo } from 'next-seo';
import CommunicationTopMenu from '@/components/CommunicationTopMenu';

function Communication() {
  return (
    <>
      <NextSeo title={'Komunikacja'} description={'Opis strony tutaj'} />
      <CommunicationTopMenu />
    </>
  );
}

export default Communication;
