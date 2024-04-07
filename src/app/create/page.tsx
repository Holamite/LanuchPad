import CreateHeader from "@/components/Create/CreateHeader";
import FormTemplate from "../helpers/FormTemplate";
import InfoForm from "@/components/Create/Form";


const Create = () => {

    return (
        <div className="flex flex-col gap-12">
            <CreateHeader
            count={1}
            header="Project Info"
            text="Let people know who you are"
            />

            <FormTemplate>
                <InfoForm />
            </FormTemplate>
        </div>
    );
}

export default Create;