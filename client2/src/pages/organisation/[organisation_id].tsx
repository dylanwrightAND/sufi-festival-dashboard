import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import Event from '../../components/event/Event';

export default function Home({ events }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Organisation: whatever you clicked</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{events && <Event events={events} />}</div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const organisationId = context.query.organisation_id;
  const response = await axios.get(
    'http://localhost:8080/api/event?organisationId=' + organisationId
  );

  return {
    props: { events: response.data }, // will be passed to the page component as props
  };
}
