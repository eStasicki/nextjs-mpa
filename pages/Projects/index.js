import { NextSeo } from 'next-seo';

function Projects() {
  return (
    <>
    <NextSeo
      title={"Projekty"}
      description={"Opis strony tutaj"} 
    />
    <p>Testowanie SEO</p>
    </>
  )
}

// export async function getServerSideProps({ ctx }) {
//   const cookies = parseCookies(ctx);
//   console.log(cookies);
//   return { cookies }
// }

export default Projects