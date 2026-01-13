import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col justify-center ">
      <button
        className="px-2 text-xl max-w-[300px]  rounded-[8px] py-2 border border-blue-500 bg-blue-500 text-white text-lg"
        onClick={() => navigate("/collection")}>
        Shop More
      </button>
      <DotLottieReact src="EmptyCart.lottie" loop autoplay />
    </div>
  );
};

export default EmptyCart;
