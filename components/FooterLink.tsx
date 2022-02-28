import type { ReactNode } from "react";

import css from "utils/css";

interface FooterLinkProps {
    children: ReactNode;
    variant: string;
}

const FooterLink = ({ children, variant }: FooterLinkProps) => {
    return (
        <a href="#" className={css("mr-4 mt-1 text-gray-500", variant)}>
            {children}
        </a>
    );
};

export default FooterLink;
