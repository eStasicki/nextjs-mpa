import { NextSeo } from 'next-seo';

function Index() {
  return (
    <>
    <NextSeo
      title={"Przegląd projektów"}
      description={"Opis strony tutaj"} 
    />
    <p>To jest strona: "Przegląd projektów"</p>
    </>
  )
}

export default Index