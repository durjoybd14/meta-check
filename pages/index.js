import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meta Check</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@meta-check" />
        <meta
          name="twitter:title"
          content="BasaKhujo: A property searching platform in Bangladesh"
        />
        <meta
          name="twitter:description"
          content="BasaKhujo is an accommodation solution provider platform that makes it possible to rent a house & mess without paying any brokerage."
        />
        <meta name="twitter:creator" content="@meta-check" />
        <meta
          name="twitter:image"
          content="https://www.meta-check.netlify.app/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BasaKhujo: A property searching platform in Bangladesh"
        />
        <meta property="og:site_name" content="Meta-Check" />
        
        <meta property="og:url" content="https://meta-check.netlify.app" />
        <meta
          property="og:image"
          content="https://www.meta-check.netlify.app/og-image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.meta-check.netlify.app/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="BasaKhujo: A property searching platform in Bangladesh"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="BasaKhujo is an accommodation solution provider platform that makes it possible to rent a house & mess without paying any brokerage."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
