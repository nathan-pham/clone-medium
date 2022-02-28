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

interface FooterProps {
    variant?: string;
}

const Footer = ({ variant = "text-md" }: FooterProps) => {
    return (
        <footer className="mt-7 hidden lg:flex lg:flex-wrap">
            {footerLinks.map((link) => (
                <FooterLink key={link} variant={variant}>
                    {link}
                </FooterLink>
            ))}
        </footer>
    );
};

export default Footer;
