import { SVGProps } from "./HomeAsset";


const PadAsset = () => {
    return {
        search: (props?: SVGProps) => {
            return (
                <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                <path
                    d="M11 20a9 9 0 100-18 9 9 0 000 18zM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97z"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            );
        },
        filters: (props?: SVGProps) => {
            return (
                <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                    <path
                        d="M10.94 23.15c-.48 0-.95-.12-1.39-.36a2.699 2.699 0 01-1.41-2.38v-5.3c0-.5-.33-1.25-.64-1.63L3.76 9.52C3.13 8.89 2.65 7.81 2.65 7V4.7c0-1.6 1.21-2.85 2.75-2.85h13.2c1.52 0 2.75 1.23 2.75 2.75v2.2c0 1.05-.63 2.24-1.22 2.83l-4.33 3.83c-.42.35-.75 1.12-.75 1.74v4.3c0 .89-.56 1.92-1.26 2.34l-1.38.89c-.45.28-.96.42-1.47.42zM5.4 3.35c-.7 0-1.25.59-1.25 1.35V7c0 .37.3 1.09.68 1.47l3.81 4.01c.51.63 1.01 1.68 1.01 2.62v5.3c0 .65.45.97.64 1.07.42.23.93.23 1.32-.01l1.39-.89c.28-.17.56-.71.56-1.07v-4.3c0-1.07.52-2.25 1.27-2.88l4.28-3.79c.34-.34.75-1.15.75-1.74V4.6c0-.69-.56-1.25-1.25-1.25H5.4z"
                        fill="url(#paint0_linear_523_366)"
                    />
                    <path
                        d="M6 11.25a.83.83 0 01-.4-.11.76.76 0 01-.24-1.04l4.93-7.9a.747.747 0 111.27.79l-4.93 7.9c-.14.23-.38.36-.63.36z"
                        fill="url(#paint1_linear_523_366)"
                    />
                    <defs>
                        <linearGradient
                        id="paint0_linear_523_366"
                        x1={2.65039}
                        y1={1.84998}
                        x2={22.8505}
                        y2={2.9733}
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#FFADD4" />
                        <stop
                            offset={0.549723}
                            stopColor="#8BD4FF"
                            stopOpacity={0.744141}
                        />
                        <stop offset={0.549823} stopColor="#ADE2FF" stopOpacity={0.74} />
                        <stop offset={1} stopColor="#E16AFF" stopOpacity={0.529167} />
                        </linearGradient>
                        <linearGradient
                        id="paint1_linear_523_366"
                        x1={5.24609}
                        y1={1.84644}
                        x2={12.1973}
                        y2={2.14737}
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#FFADD4" />
                        <stop
                            offset={0.549723}
                            stopColor="#8BD4FF"
                            stopOpacity={0.744141}
                        />
                        <stop offset={0.549823} stopColor="#ADE2FF" stopOpacity={0.74} />
                        <stop offset={1} stopColor="#E16AFF" stopOpacity={0.529167} />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        sort: (props?: SVGProps) => {
            return (
                <svg
                width={22}
                height={21}
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                    <path
                        d="M6.5 18.44V0H5v18.44l-2.963-2.963-1.06 1.06 4.242 4.243a.75.75 0 001.06 0l4.244-4.242-1.06-1.061L6.5 18.439zM21.023 4.461L16.78.22a.75.75 0 00-1.06 0l-4.243 4.242 1.06 1.061L15.5 2.561V21H17V2.56l2.962 2.963 1.06-1.06z"
                        fill="url(#paint0_linear_92_968)"
                    />
                    <defs>
                        <linearGradient
                        id="paint0_linear_92_968"
                        x1={0.976563}
                        y1={0}
                        x2={22.6185}
                        y2={1.30856}
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#FFADD4" />
                        <stop
                            offset={0.549723}
                            stopColor="#8BD4FF"
                            stopOpacity={0.744141}
                        />
                        <stop offset={0.549823} stopColor="#ADE2FF" stopOpacity={0.74} />
                        <stop offset={1} stopColor="#E16AFF" stopOpacity={0.529167} />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        arrowdown: (props?:SVGProps) => {
            return (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={10}
                fill="none"
                {...props}
                >
                    <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.5}
                    d="M16.92 1.45 10.4 7.97c-.77.77-2.03.77-2.8 0L1.08 1.45"
                    />
                </svg>
            )
        },
        bold: (props?: SVGProps) => {
            return (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={14}
                height={14}
                fill="#9CA3AF"
                stroke="#9CA3AF"
                strokeWidth={0.002}
                viewBox="0 0 202 202"
                {...props}
                >
                    <path d="M148.004 94.812c18.332-8.126 28.671-23.362 28.671-42.752 0-17.261-6.954-31.206-20.11-40.328C145.653 4.166 130.438 0 113.721 0H16.957v34h17v134h-17v34h90.905c14.819 0 35.992-2.245 52.705-12.94 16.241-10.393 24.476-26.161 24.476-46.868 0-23.85-13.986-41.429-37.039-47.38zM103.12 80H73.957V34h26.096c25.961 0 36.551 6.34 36.551 21.884C136.604 75.816 118.396 80 103.12 80zm-29.163 35h30.838c28.537 0 40.177 7.436 40.177 25.663 0 18.14-13.987 27.337-41.572 27.337H73.957v-53z" />
                </svg>
            )
        },
        heading: (props?: SVGProps) => {
            return (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#9CA3AF"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                {...props}
                >
                    <path d="M18 20V4h-3v6H9V4H6v16h3v-7h6v7z" />
                </svg>
            )
        },
        italic: (props?: SVGProps) => {
            return (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#9CA3AF"
                // stroke="#9CA3AF"
                viewBox="0 0 36 36"
                {...props}
                width={25}
                height={25}
                >
                    <title>{"italic-line"}</title>
                    <path
                    d="M24.42 8H17.1a1.1 1.1 0 1 0 0 2.19h2.13l-6.12 15.36h-2.64a1.1 1.1 0 1 0 0 2.19h7.33a1.1 1.1 0 1 0 0-2.19h-2.29l6.13-15.36h2.78a1.1 1.1 0 1 0 0-2.19Z"
                    className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                </svg>
            )
        },
        link: (props?: SVGProps) => {
            return (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                {...props}
                >
                    <g stroke="#9CA3AF" strokeLinecap="round" strokeWidth={2.4}>
                    <path d="M10.046 14c-1.506-1.512-1.37-4.1.303-5.779l4.848-4.866c1.673-1.68 4.25-1.816 5.757-.305 1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433" />
                    <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433" />
                    </g>
                </svg>
            )
        }
    }
}


export default PadAsset;