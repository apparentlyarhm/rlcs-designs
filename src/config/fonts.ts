import { JetBrains_Mono, Nunito } from "next/font/google";

export const nunito = Nunito({
    weight: ["400", "600", "700", "800", "900"],
    preload: false,
})

export const jetbrainsMono = JetBrains_Mono({
    weight: ["400", "600", "700", "800"],
    preload: false,
})
