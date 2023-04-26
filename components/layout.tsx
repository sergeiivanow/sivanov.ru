import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Сергей Иванов';
export const siteTitle = 'Сергей Иванов';

export default function Layout({ children, blog, home, post }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal website" />
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
        {(blog || post) && (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {blog && (
        <div className={styles.backToHome}>
          <Link href="/">← Назад</Link>
        </div>
      )}
      {post && (
        <div className={styles.backToHome}>
          <Link href="/blog">← Назад</Link>
        </div>
      )}
    </div>
  );
}