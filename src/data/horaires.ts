import type {Horaire} from "@components/info/Horaires.astro";

export const horaires_cours: Horaire[] = [
    {
        public: "enfant",
        jour: "mardi",
        debut: "18:30",
        fin: "19:30",
        encadrement: "cours",
    },
    {
        public: "ado adulte",
        jour: "mardi",
        debut: "19:30",
        fin: "20:30",
        encadrement: "cours",
    },
    // {
    //     public: "Adulte",
    //     jour: "mardi",
    //     debut: "20:30",
    //     fin: "21:30",
    //     encadrement: "cours",
    // },
];

export const horaires_libre: Horaire[] = [
    {
        public: "Adulte",
        jour: "mardi",
        debut: "20:30",
        fin: "22:30",
        encadrement: "libre",
    },
    {
        public: "Adultes",
        jour: "jeudi",
        debut: "20:30",
        fin: "22:30",
        encadrement: "libre",
    },
    {
        public: "Adultes",
        jour: "samedi",
        debut: "10:45",
        fin: "12:45",
        encadrement: "libre",
    },
];