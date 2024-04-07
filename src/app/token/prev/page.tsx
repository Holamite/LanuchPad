import NoToken from "@/components/Token/NoToken";
import TokenOverview from "@/components/Token/TokenOverview";

const Prev = () => {
    return (
        // <div className="flex justify-between flex-wrap">
        //     {Array.from({ length: 9}).map((_, index) => (
        //         <TokenOverview
        //         key={index}
        //         name="LET'S F**KING GO"
        //         symbol="LFG"
        //         totalSupply="1,000,000"
        //         address="0x85f452bAeC34a3475464Ba7130081b587BbF0472"
        //         />
        //     ))}
        // </div>
        <NoToken />
    );
}

export default Prev;