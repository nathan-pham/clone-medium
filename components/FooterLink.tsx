import type { ReactNode } from "react";

interface FooterLinkProps {
    children: ReactNode;
}

const FooterLink = ({ children }: FooterLinkProps) => {
    return (
        <a href="#" className="mr-4 mt-1 text-gray-400">
            {children}
        </a>
    );
};

export default FooterLink;
