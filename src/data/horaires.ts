export const jours = ["mardi", "mercredi", "jeudi", "vendredi", "samedi"] as const;

export type Jour = (typeof jours)[number];

export type Encadrement = "cours" | "libre";

export type Horaire = {
    public: string;
    jour: Jour;
    debut: Heure;
    fin: Heure;
    encadrement: Encadrement;
};

export type Heure = `${number}:${number}`;

export const heures: Heure[] = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
];

export const horairesCours: Horaire[] = [
    {
        public: "Enfant",
        jour: "mardi",
        debut: "18:30",
        fin: "19:30",
        encadrement: "cours",
    },
    {
        public: "Ado/Adulte",
        jour: "mardi",
        debut: "19:30",
        fin: "20:30",
        encadrement: "cours",
    },
    {
        public: "Adulte",
        jour: "mardi",
        debut: "20:30",
        fin: "21:30",
        encadrement: "cours",
    },
];

export const horairesLibre: Horaire[] = [
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