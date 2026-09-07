import type {Contacts} from "@components/contact/ContactCard.astro";

export const links : Contacts[] = [
    {
        href: "https://www.helloasso.com/associations/les-fous-du-volant-mauves-sur-loire",
        label: "Hello Asso",
        logo: "logo_asso.png",
        description: "Inscriptions",
    },
    {
        href: "https://www.facebook.com/badmauves.fr/?locale=fr_FR",
        label: "Facebook",
        logo: "logo_fb.png",
        description: "Actualités",
    },
    {
        href: "mailto:contact@lesfousduvolant.org",
        label: "Contacter",
        logo: "logo_mail.png",
        description: "Le bureau",
    },
    {
        href: "https://www.scoreouest.fr/FR/",
        label: "Site",
        logo: "logo_old_site.png",
        description: "Actuel",
    },
    {
        href: "https://salle.3douest.com/accueil.php?h=1032",
        label: "Salle",
        logo: "logo_ouest.png",
        description: "Réservations",
    },
];