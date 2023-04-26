import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Профессиональный программист в области кроссплатформенной мобильной разработки с опытом работы более 4 лет</p>
      </section>
      <Link href={`https://www.dropbox.com/s/x786wagua9eb0ue/s.ivanov_rn_dev_resume_ru.pdf?dl=1`}>Резюме</Link>
      <br/>
      <Link href={`mailto:to@sivanow.ru`}>Е-mail</Link>
      <br/>
      <Link href={`https://t.me/sergeiiwanov`}>Телеграм</Link>
      <br/>
      <Link href={`https://github.com/sergeiivanow`}>Git Hub</Link>
      <br/>
      <Link href={`/blog`}>Блог</Link>
    </Layout>
  );
}

