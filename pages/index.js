import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className={styles.container}> 
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, explicabo. Odit fugiat modi obcaecati reprehenderit dolor harum nam quae, nisi beatae voluptatibus placeat earum. Odit quas animi dignissimos doloremque voluptatum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, explicabo. Odit fugiat modi obcaecati reprehenderit dolor harum nam quae, nisi beatae voluptatibus placeat earum. Odit quas animi dignissimos doloremque voluptatum.</p>  
        <Link href="/ninjas/"> <p className={styles.btn}>See Ninja Listings</p> </Link>
      </div>
    </>
  )
}
