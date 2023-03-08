import styles from "../style";
import { discount, cnfour } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          {/* <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p> */}
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Caleb <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Ndunge</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          CN4
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Passionné dans le sport depuis mon jeune âge, j'ai choisi le sport
          business car Les métiers dans le marketing sportif vous assurent de ne
          pas vous ennuyer, de développer vos connaissances, vos compétences, et
          d'apporter votre expertise. Transformer son hobby en projet
          professionnel est une réelle chance et opportunité. L'audience est
          très large mais très sensible, c'est pourquoi les marques, événements
          sportifs, clubs, fédérations et organisations sportives cherchent à
          être visibles et créer une communauté. La notion de groupe est
          essentielle dans le secteur du sport.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={cnfour}
          alt="billing"
          className="w-[70%] h-[70%] relative z-[5]"
          style={{ borderRadius: "10px" }}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
