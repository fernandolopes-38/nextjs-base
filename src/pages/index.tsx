import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Home;