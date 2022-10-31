import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import Attendees from '../../components/attendees/Attendees';

export default function Home({ attendees }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Attendees: whatever you clicked</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{attendees && <Attendees attendees={attendees} />}</div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const eventId = context.query.event_id;
  const response = await axios.get(
    'http://localhost:8080/api/attendee?eventId=' + eventId
  );

  return {
    props: { attendees: response.data }, // will be passed to the page component as props
  };
}
