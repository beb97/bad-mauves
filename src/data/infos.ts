import type {InfoLink} from "@components/info/InfoCard.astro";

export const infos : InfoLink[] = [
    {
        logo: 'badminton',
        nom: "Inscription",
        lien: '/infos/acces',
    },	{
        logo: 'schedule',
        nom: "Horaires",
        lien: '/infos/horaires',
    },
    {
        logo: 'stadium️',
        nom: "Salle",
        lien: '/infos/salle',
    },
    {
        logo: 'diversity_4',
        nom: "Bureau",
        lien: '/infos/membres',
    },
    {
        logo: 'gavel',
        nom: "Règles",
        lien: '/infos/rules',
    },
    {
        logo: 'history',
        nom: "Histoire",
        lien: '/infos/histoire',
    },
];