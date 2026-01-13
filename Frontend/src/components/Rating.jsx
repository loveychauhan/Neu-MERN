import { FaStar } from "react-icons/fa";

export default function Rating() {
  return (
    <>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => {
          return <FaStar key={i} className="text-[20px] text-amber-300" />;
        })}
      </div>
    </>
  );
}
