import type {InfoLink} from "@components/info/InfoCard.astro";

export const infos : InfoLink[] = [
    {
        logo: 'badminton',
        nom: "inscription",
        lien: '/infos/acces',
    },	{
        logo: 'schedule',
        nom: "horaires",
        lien: '/infos/horaires',
    },
    {
        logo: 'stadium️',
        nom: "salle",
        lien: '/infos/salle',
    },
    {
        logo: 'diversity_4',
        nom: "bureau",
        lien: '/infos/membres',
    },
    {
        logo: 'gavel',
        nom: "règles",
        lien: '/infos/rules',
    },
    {
        logo: 'history',
        nom: "histoire",
        lien: '/infos/histoire',
    },
];