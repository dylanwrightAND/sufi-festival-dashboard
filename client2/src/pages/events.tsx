import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Organisation from '../components/organisation/Organisation';


export default function Home({ organisations }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Organisations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {organisations && <Organisation organisations={organisations} />}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:8080/api/event');

  return {
    props: {organisations: response.data.event}, // will be passed to the page component as props
  }
}
