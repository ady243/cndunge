import { cnfour } from "../assets";

const FeedbackCard = () => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <img
      src={cnfour}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
      style={{ borderRadius: "40px" }}
    /> */}
    <p className="font-poppins font-normal   my-10">
      <img src={cnfour} alt="card" style={{ height: "100%" }} />
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      <img
        src="https://zupimages.net/up/23/05/8vez.png"
        alt="card"
        style={{ height: "100%", width: "100%" }}
      />
    </p>

    <div className="flex flex-row">
      <img
        src={cnfour}
        // alt={name}
        className="w-[48px] h-[48px] rounded-full"
        style={{ borderRadius: "20px" }}
      />
      {/* <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div> */}
    </div>
  </div>
);

export default FeedbackCard;
