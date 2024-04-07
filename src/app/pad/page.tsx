import PadOverview from "@/components/Pad/PadOverview";
import Params from "@/components/Pad/Params";

const ExplorePads = () => {
  return (
    <div className="flex flex-col gap-20">
      <Params />
      <div className="flex flex-wrap justify-between">
        {Array.from({ length: 9 }).map((_, index) => (
          <PadOverview key={index} name="Krafna" id={index} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePads;
