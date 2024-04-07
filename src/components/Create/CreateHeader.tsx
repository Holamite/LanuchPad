interface CreateProps {
    count: number
    header: string
    text: string
}

const CreateHeader = ({count, header, text}: CreateProps) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-6 text-4xl font-space font-medium">
                <h2 className="text-pink-3">
                    {count}/4
                </h2>
                <h2>{header}</h2>
            </div>
            <p className="text-neutral-400 text-xl">
                {text}
            </p>
        </div>
    );
}

export default CreateHeader;