import FooterLink from "./FooterLink";

const footerLinks = [
    "Help",
    "Status",
    "Writers",
    "Blog",
    "Careers",
    "Privacy",
    "Terms",
    "About",
    "Knowable",
];

const Footer = () => {
    return (
        <footer className="mt-7 hidden lg:flex lg:flex-wrap">
            {footerLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
            ))}
        </footer>
    );
};

export default Footer;
