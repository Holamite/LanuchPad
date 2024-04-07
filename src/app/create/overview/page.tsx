import FormTemplate from "@/app/helpers/FormTemplate";
import CreateHeader from "@/components/Create/CreateHeader";
import OverviewForm from "@/components/Overview/Form";

const Overview = () => {
    return (
        <div className="flex flex-col gap-12">
            <CreateHeader
            count={4}
            header="Overview"
            text="Review your information"
            />

            <FormTemplate>
                <OverviewForm />
            </FormTemplate>
        </div>
    );
}

export default Overview;