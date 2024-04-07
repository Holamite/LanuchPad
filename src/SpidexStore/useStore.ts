import { create } from "zustand";
import { State, Action } from "./types";

const useStore = create<State & Action>((set) => ({
    steps: 1,
    updateStep: (data) => set({steps: data}),
    projectInfo: {
        description: "",
        discord: "",
        github: "",
        logo: "",
        telegram: "",
        twitter: "",
        website: "",
        youtube: ""
    },
    updateProject: (data) => set({projectInfo: data}),
    tokenInfo: {
        token: "",
        currency: "",
        whitelist: ""
    },
    updateTokenInfo: (data) => set({tokenInfo: data}),
    padinfo: {
        softcap: "",
        hardcap: "",
        minBuy: "",
        maxBuy: "",
        presaleRate: "",
        startTime: new Date(),
        endTime: new Date(),
        cliff: "",
        tge: "",
        vestingDuration: "",
        frequency: "",
        presaleToken: "",
        liquidityToken: "",
        liquidityPercent: ""
    },
    updatePadInfo: (data) => set({padinfo: data})
}))


export default useStore;