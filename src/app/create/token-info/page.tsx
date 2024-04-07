import FormTemplate from "@/app/helpers/FormTemplate";
import CreateHeader from "@/components/Create/CreateHeader";
import TokenForm from "@/components/TokenInfo/Form";


const TokenInfo = () => {

    return (
        <div className="flex flex-col gap-12">
            <CreateHeader
            count={2}
            header="Token Information"
            text="Enter necessary token information"
            />

            <FormTemplate>
                <TokenForm />
            </FormTemplate>
        </div>
    );
}

export default TokenInfo;