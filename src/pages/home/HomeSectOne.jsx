import { Link } from "react-router-dom";
import macbook from "../../assets/images/macbook.png";

const HomeSectOne = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-[50px] items-center">
        <div className="md:w-[45%]">
          <h1 className="text-[35px] md:text-[48px] font-[700] leading-[60px] mb-[10px]">
            <span className="text-color-primary">YAWOO</span> Your Trusted
            Lending Platform
          </h1>
          <p>
            We are the most popular go to destination for hassle free and secure
            online lending services. We are here to help you bridge the gap of
            unexpected financial challenges life throw your way.
          </p>
          <div className="mt-[30px]">
            <Link
              to="/signup"
              className="h-[53px] w-[213px] text-[18px] font-[500] flex justify-center items-center rounded-[8px] border-none bg-color-primary text-white hover:bg-color-secondary"
            >
              Get started- It&apos;s free
            </Link>
          </div>
        </div>
        <div className="">
          <img src={macbook} alt="home hero" />
        </div>
      </div>
      <div className="my-[60px] max-w-[1113px] mx-auto">
        <h2 className="text-center text-[32px] md:text-[48px] font-[700]">
          Trusted by 40 <span className="text-color-primary">Thousand+</span>{" "}
          active users across Nigeria
        </h2>
      </div>
    </section>
  );
};

export default HomeSectOne;
