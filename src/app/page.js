// import Image from "next/image";
import Head from 'next/head';
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>정희</title>
        <meta name="description" content="그냥 하자" ></meta>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <h1> 홈입니다.</h1>
    </Layout>
  );
}
