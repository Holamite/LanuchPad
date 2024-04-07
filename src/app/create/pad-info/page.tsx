import FormTemplate from "@/app/helpers/FormTemplate";
import CreateHeader from "@/components/Create/CreateHeader";
import PadForm from "@/components/PadInfo/Form";

const PadInfo = () => {
    return (
        <div className="flex flex-col gap-12">
            <CreateHeader
            count={3}
            header="Pad Information"
            text="Enter the necessary details about your IDO"
            />

            <FormTemplate>
                <PadForm />
            </FormTemplate>
        </div>
    );
}

export default PadInfo;