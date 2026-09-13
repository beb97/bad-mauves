import type {Contacts} from "@components/contact/ContactCard.astro";

export const links : Contacts[] = [
    {
        href: "https://www.helloasso.com/associations/les-fous-du-volant-mauves-sur-loire",
        logo: "/contacts/logo_asso.png",
        description: "s'inscrire",
    },
    {
        href: "https://www.facebook.com/badmauves.fr/?locale=fr_FR",
        logo: "/contacts/logo_fb.png",
        description: "actu",
    },
    {
        href: "mailto:contact@lesfousduvolant.org",
        logo: "/contacts/logo_mail.png",
        description: "contact",
    },
    {
        href: "https://www.scoreouest.fr/FR/",
        logo: "/contacts/logo_old_site.png",
        description: "site",
    },
    {
        href: "https://salle.3douest.com/internaute.php?module=mauvessurloire",
        logo: "/contacts/logo_ouest.png",
        description: "salle",
    },
];