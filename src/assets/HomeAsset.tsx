export interface SVGProps {
    fillColor?: any;
    color?: any;
}

const HomeAsset = () => {
    return {
        twitter: (props?: SVGProps) => {
            return (
                <svg
                    width={32}
                    height={24}
                    viewBox="0 0 32 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                    d="M6.45 3.018l7.41 9.908-7.457 8.056h1.679l6.528-7.053 5.275 7.053h5.712l-7.828-10.466 6.941-7.498h-1.678L17.02 9.513l-4.858-6.495H6.45zm2.468 1.236h2.624l11.586 15.491h-2.624L8.918 4.254z"
                    fill="#fff"
                    />
                </svg>
            );
        },
        discord: (props?: SVGProps) => {
            return (
                <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                    <path
                    d="M9.82 17.41a3.1 3.1 0 002.9 3.26 3.1 3.1 0 002.89-3.26 3.11 3.11 0 00-2.89-3.27 3.11 3.11 0 00-2.9 3.27zm3.79 0c0 .68-.41 1.26-.89 1.26-.48 0-.9-.58-.9-1.26s.41-1.27.9-1.27c.49 0 .89.58.89 1.27zm5.67-3.27a3.11 3.11 0 00-2.89 3.27 3.1 3.1 0 002.89 3.26 3.1 3.1 0 002.9-3.26 3.11 3.11 0 00-2.9-3.27zm0 4.53c-.48 0-.89-.58-.89-1.26s.41-1.27.89-1.27c.48 0 .9.58.9 1.27 0 .69-.41 1.26-.9 1.26z"
                    fill="#fff"
                    />
                    <path
                    d="M26.63 10.53l-.07-.09v-.1a12.15 12.15 0 00-6.8-4.15 1 1 0 10-.48 1.94 10.19 10.19 0 015.65 3.39A24.87 24.87 0 0127 21.33a10 10 0 01-5 2.52v-.51a13.479 13.479 0 003.43-1.95 1.003 1.003 0 10-1.25-1.57 12.83 12.83 0 01-8.18 2.6 12.83 12.83 0 01-8.11-2.6 1.005 1.005 0 00-1.622.898c.03.265.164.506.372.672a13.358 13.358 0 003.41 1.95v.51a10 10 0 01-5-2.52 24.87 24.87 0 012.09-9.81 10.19 10.19 0 015.65-3.39 1 1 0 00-.48-1.94 12.15 12.15 0 00-6.8 4.15v.1l-.07.09c-1.94 4-2.16 7.65-2.37 11.14a1 1 0 00.29.77A12 12 0 0011 26a1 1 0 00.921-.615A1 1 0 0012 25v-1c2.631.616 5.369.616 8 0v1a1.001 1.001 0 00.3.71 1 1 0 00.7.29 12 12 0 007.74-3.51 1 1 0 00.29-.77c-.24-3.54-.46-7.15-2.4-11.19z"
                    fill="#fff"
                    />
                    <path
                    d="M23.49 11.72a1 1 0 00-.43-1.35A15.47 15.47 0 0016 8.87a15.47 15.47 0 00-7.06 1.5 1 1 0 00-.43 1.35 1 1 0 001.35.42A13.551 13.551 0 0116 10.87c2.118-.063 4.22.373 6.14 1.27a1 1 0 00.46.12 1 1 0 00.89-.54z"
                    fill="#fff"
                    />
                </svg>

            )
        },
        youtube: (props?: SVGProps) => {
            return (
                <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                    <path
                        d="M30 12a5.71 5.71 0 00-5.31-5.7C18.92 6 13.06 6 7.33 6.28 4.51 6.28 2 9 2 12c-.29 2.9-.29 5.82 0 8.72a5.32 5.32 0 005.28 5.33c2.9.16 5.807.24 8.72.24 2.913 0 5.803-.077 8.67-.23A5.34 5.34 0 0030 20.8c.41-2.919.41-5.88 0-8.8zm-2 8.63a.482.482 0 000 .12 3.362 3.362 0 01-3.39 3.34c-5.756.3-11.524.3-17.28 0A3.361 3.361 0 014 20.65a41.999 41.999 0 010-8.47.45.45 0 000-.11 3.78 3.78 0 013.38-3.79c2.86-.13 5.74-.19 8.62-.19 2.88 0 5.76.06 8.62.19h.05c1.71 0 3.33 1.84 3.33 3.79a.752.752 0 000 .15 30.114 30.114 0 010 8.39v.02z"
                        fill="#fff"
                    />
                    <path
                        d="M20.79 15.51l-7.14-3.68a1.002 1.002 0 00-.92 1.78l5.43 2.79-4 2.07V16.4a1 1 0 10-2 0v3.72a1 1 0 001.46.89l7.14-3.72a1 1 0 00.54-.89 1 1 0 00-.51-.89z"
                        fill="#fff"
                    />
                </svg>
            )
        },
        instagram: (props?: SVGProps) => {
            return (
                <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                    <path
                        d="M23.12 7.28a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm6.133 3.227a10.12 10.12 0 00-.613-3.24 6.587 6.587 0 00-1.547-2.36 6.267 6.267 0 00-2.36-1.534 9.733 9.733 0 00-3.24-.626c-1.413-.08-1.866-.08-5.493-.08-3.627 0-4.08 0-5.493.08a9.733 9.733 0 00-3.24.626 6.373 6.373 0 00-2.36 1.534 6.267 6.267 0 00-1.534 2.36 9.733 9.733 0 00-.626 3.24c-.08 1.413-.08 1.866-.08 5.493 0 3.627 0 4.08.08 5.493a9.733 9.733 0 00.626 3.24c.326.893.85 1.7 1.534 2.36a6.372 6.372 0 002.36 1.534 9.732 9.732 0 003.24.626c1.413.08 1.866.08 5.493.08 3.627 0 4.08 0 5.493-.08a9.732 9.732 0 003.24-.626c.893-.326 1.7-.85 2.36-1.534a6.467 6.467 0 001.547-2.36c.38-1.039.587-2.133.613-3.24 0-1.413.08-1.866.08-5.493 0-3.627 0-4.08-.08-5.493zm-2.4 10.826a7.48 7.48 0 01-.453 2.48 4.08 4.08 0 01-1 1.534c-.432.44-.956.782-1.533 1a7.478 7.478 0 01-2.48.453c-1.334.067-1.827.08-5.334.08-3.506 0-4 0-5.333-.08a7.642 7.642 0 01-2.587-.4 4.36 4.36 0 01-1.466-1 4 4 0 01-.987-1.533 7.386 7.386 0 01-.533-2.534c0-1.333-.08-1.826-.08-5.333s0-4 .08-5.333a7.387 7.387 0 01.466-2.534 4 4 0 011.054-1.466A4.187 4.187 0 018.133 5.6a7.64 7.64 0 012.534-.453c1.333 0 1.826-.08 5.333-.08s4 0 5.333.08a7.48 7.48 0 012.48.453A4.08 4.08 0 0125.4 6.667c.437.41.778.91 1 1.466a7.48 7.48 0 01.453 2.534c.067 1.333.08 1.826.08 5.333s-.013 4-.08 5.333zM16 9.16A6.84 6.84 0 1022.853 16 6.825 6.825 0 0016 9.16zm0 11.28a4.44 4.44 0 110-8.88 4.44 4.44 0 010 8.88z"
                        fill="#fff"
                    />
                </svg>
            )
        },
        github: (props?: SVGProps) => {
            return (
                <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                >
                    <path
                        d="M10.57 20.503a1 1 0 00-1.18-.983c-1.31.24-2.963.276-3.402-.959a5.708 5.708 0 00-1.837-2.415 1.194 1.194 0 01-.167-.109 1 1 0 00-.93-.645h-.005a1 1 0 00-1 .995c-.004.815.81 1.338 1.141 1.514.39.392.704.853.924 1.36.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 102 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM21.237 5.377a5.64 5.64 0 00.09-.42 6.279 6.279 0 00-.408-3.293 1.003 1.003 0 00-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 00-6.354 0C7.262.751 5.955.966 5.602 1.079a.997.997 0 00-.631.584 6.3 6.3 0 00-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 00-1.256 3.83c-.003.307.012.615.043.921.334 4.602 3.334 5.984 5.424 6.459a4.592 4.592 0 00-.118.4 1 1 0 001.942.479c.064-.333.227-.64.468-.878a1 1 0 00-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.612 6.612 0 01-.033-.738A4.258 4.258 0 016.505 6.26a1 1 0 00.188-1.025 3.388 3.388 0 01-.155-.555 4.094 4.094 0 01.079-1.616c.869.246 1.687.646 2.415 1.18a1.009 1.009 0 00.827.133 11.777 11.777 0 016.173.001 1.006 1.006 0 00.83-.138 7.571 7.571 0 012.406-1.19c.133.515.162 1.051.087 1.578a3.207 3.207 0 01-.169.607 1 1 0 00.189 1.025c.077.087.154.18.223.268.606.758.926 1.706.902 2.676.002.26-.01.52-.038.777-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 00-.546 1.746c.249.245.412.563.466.908.068.268.1.544.093.82v2.334c-.01.647-.01 1.132-.01 1.355a1 1 0 102 0c0-.217 0-.692.01-1.34v-2.35a4.882 4.882 0 00-.155-1.311c-.032-.14-.07-.28-.116-.416a6.513 6.513 0 005.445-6.424 8.7 8.7 0 00.046-.959 6.13 6.13 0 00-1.263-3.826z"
                        fill="#fff"
                    />
                </svg>
            )
        },
        telegram: (props?: SVGProps) => {
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
                        d="M21.945 2.765a1.552 1.552 0 00-1.572-.245L2.456 9.754a1.543 1.543 0 00.078 2.884L6.4 13.98l2.094 6.926c.005.014.017.023.023.036a.487.487 0 00.142.2.49.49 0 00.178.094c.01.003.016.012.026.014H8.872a.445.445 0 00.233-.011c.008-.003.017-.002.025-.005a.495.495 0 00.191-.123c.006-.006.016-.007.022-.013l3.014-3.326 4.396 3.405c.267.209.596.322.936.322.733 0 1.366-.514 1.517-1.232L22.47 4.251a1.533 1.533 0 00-.524-1.486zM9.588 15.295l-.707 3.437-1.475-4.878 7.315-3.81-4.997 4.998a.498.498 0 00-.136.253zm8.639 4.772a.54.54 0 01-.347.399.525.525 0 01-.514-.078l-4.763-3.689a.5.5 0 00-.676.06L9.83 19.07l.706-3.428 7.189-7.189a.5.5 0 00-.584-.797L6.778 13.054l-3.916-1.362A.526.526 0 012.5 11.2a.532.532 0 01.334-.518l17.914-7.233a.536.536 0 01.558.086.523.523 0 01.182.518l-3.261 16.015z"
                        fill="#fff"
                    />
                </svg>
            )
        },
        logo: (props?: SVGProps) => {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    {...props}
                >
                    <path
                    stroke="#D0D0D0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.5}
                    d="M12 5 7.6 2 2 6l4.4 3L12 5ZM12 5l4.4-3L22 6l-4.4 3L12 5ZM12 14l-4.4 3L2 13l4.4-3 5.6 4ZM12 14l4.4 3 5.6-4-4.4-3-5.6 4Z"
                    />
                    <path
                    stroke="#D0D0D0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.5}
                    d="M19 15.5v3.3l-6.6 3c-.3.1-.6.1-.8 0l-6.6-3v-3.3"
                    />
                </svg>
            )
        },
        website: (props?: SVGProps) => {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="none"
                    {...props}
                >
                    <path
                    fill="#D0D0D0"
                    d="M20.5 16.284a10.843 10.843 0 0 0 0-10.568.364.364 0 0 0-.153-.264 10.875 10.875 0 1 0 0 11.097.365.365 0 0 0 .152-.265Zm-15.733.341h1.717a10.267 10.267 0 0 0 1.928 3.878 8.419 8.419 0 0 1-3.645-3.878Zm-3.883-5.25h1.872a13.62 13.62 0 0 0 .872 4.5h-1.5a10.053 10.053 0 0 1-1.244-4.5Zm1.245-5.25h1.5a13.62 13.62 0 0 0-.872 4.5H.884a10.053 10.053 0 0 1 1.245-4.5Zm15.103-.75h-1.717a10.267 10.267 0 0 0-1.928-3.878 8.418 8.418 0 0 1 3.645 3.878Zm3.883 5.25h-1.873a13.62 13.62 0 0 0-.871-4.5h1.5a10.053 10.053 0 0 1 1.244 4.5Zm-2.623 0h-2.247a21.087 21.087 0 0 0-.535-4.5h1.86c.575 1.432.888 2.957.922 4.5Zm-7.868-4.5v4.5h-4.12a20.07 20.07 0 0 1 .572-4.5h3.548Zm-3.341-.75c.75-2.47 1.97-4.191 3.341-4.46v4.46H7.283Zm3.341 6v4.5H7.076a20.071 20.071 0 0 1-.572-4.5h4.12Zm0 5.25v4.46c-1.372-.269-2.59-1.99-3.341-4.46h3.341Zm.75-.75v-4.5h4.12a20.077 20.077 0 0 1-.572 4.5h-3.548Zm3.341.75c-.75 2.47-1.97 4.191-3.34 4.46v-4.46h3.34Zm-3.34-6v-4.5h3.547c.36 1.474.553 2.983.573 4.5h-4.12Zm0-5.25V.915c1.37.269 2.59 1.99 3.34 4.46h-3.34ZM8.411 1.497a10.266 10.266 0 0 0-1.928 3.878H4.767a8.418 8.418 0 0 1 3.645-3.878ZM6.288 6.125a21.088 21.088 0 0 0-.534 4.5H3.506c.035-1.543.347-3.068.922-4.5h1.86Zm-2.782 5.25h2.248c.016 1.515.195 3.024.534 4.5h-1.86a12.845 12.845 0 0 1-.922-4.5Zm10.08 9.128a10.268 10.268 0 0 0 1.929-3.878h1.717a8.418 8.418 0 0 1-3.645 3.878Zm2.124-4.628c.34-1.476.518-2.985.535-4.5h2.247a12.847 12.847 0 0 1-.922 4.5h-1.86Zm3.532-4.5h1.873a10.052 10.052 0 0 1-1.245 4.5h-1.5a13.62 13.62 0 0 0 .872-4.5Zm.171-6h-1.355a10.292 10.292 0 0 0-2.438-3.38 10.196 10.196 0 0 1 3.793 3.38ZM6.378 1.995a10.295 10.295 0 0 0-2.437 3.38H2.585a10.194 10.194 0 0 1 3.793-3.38Zm-3.793 14.63h1.356a10.295 10.295 0 0 0 2.437 3.38 10.193 10.193 0 0 1-3.793-3.38Zm13.035 3.38a10.293 10.293 0 0 0 2.438-3.38h1.355a10.196 10.196 0 0 1-3.793 3.38Z"
                    />
                </svg>
            )
        }
    }
}

export default HomeAsset;