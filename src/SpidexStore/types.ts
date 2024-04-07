export type State = {
    steps: number,
    projectInfo: {
        description: string,
        discord: string,
        github: string,
        logo: any,
        telegram: string,
        twitter: string,
        website: string,
        youtube: any
    }
    tokenInfo: {
        token: string
        currency: string
        whitelist: any
    }
    padinfo: {
        softcap: string
        hardcap: string
        minBuy: string
        maxBuy: string
        presaleRate: string
        startTime: Date
        endTime: Date
        cliff: string
        vestingDuration: string
        tge: string
        frequency: string
        presaleToken: string
        liquidityToken: string
        liquidityPercent: string
    }
}

export type Action = {
    updateStep: (data: State['steps']) => void
    updateProject: (data: State['projectInfo']) => void
    updateTokenInfo: (data: State['tokenInfo']) => void
    updatePadInfo: (data: State['padinfo']) => void
}