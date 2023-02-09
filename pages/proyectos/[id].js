import Layout from '../../components/layout';
import Head from 'next/head';
import {useRouter} from 'next/router';

/* export async function routers() {
  const router = await useRouter();
  const path = router.asPath;
  console.log(router);
  return {
    props: {
      path,
    }
  }
} */

export default function Proyects() {
  const router = useRouter().asPath;
  let path;
  if (router.split("/")[2] !== '[id]') {
    path = router.split("/")[2];
  }
  return (
    <Layout>
      <Head>
        <title>Hola</title>
      </Head>
      <h1>{path}</h1>
    </Layout>
  );
}