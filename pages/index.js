import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm Supriya. I am a Senior frontend Engineer. You can contact me on <a href="https://www.linkedin.com/in/supriya-gole-b66497121/" target="_blank">LinkedIn</a></p>
        </section>
      </Layout>
  );
}