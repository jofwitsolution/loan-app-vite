import Navbar from "../../components/commons/Navbar";
import styles from "../../styles/tailwind";
import HomeSectOne from "./HomeSectOne";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.maxWidth} mt-[150px]`}>
        <HomeSectOne />
      </div>
    </>
  );
};

export default Home;
