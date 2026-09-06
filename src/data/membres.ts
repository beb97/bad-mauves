import type {Horaire} from "@data/horaires.ts";

export interface Membre {
    initiales: string;
    nom: string;
    role?: string;
}

export const bureau: Membre[] = [
    {
        initiales: "FR",
        nom: "Franck ROBINET",
        role: "Président",
    },
    {
        initiales: "KL",
        nom: "Katia LAUZANNE",
        role: "Trésorière",
    },
    {
        initiales: "JPL",
        nom: "Jean-Philippe LE CALVEZ",
        role: "Trésorier adjoint",
    },
    {
        initiales: "FG",
        nom: "Fanny GRAFFARD",
        role: "Secrétaire",
    },
];
export const membres: Membre[] = [
    {
        initiales: "OP",
        nom: "Olivier PLOTEAU",
        role: "Capitaine Mauves 1",
    },
    // {
    //     initiales: "CA",
    //     nom: "Christophe André",
    //     role: "Capitaine Mauves 2",
    // },
    {
        initiales: "NLB",
        nom: "Nicolas LE BIVIC",
        role: "Membre",
    },
    {
        initiales: "MC",
        nom: "Muriel CRÉZÉ",
        role: "Membre",
    },
];