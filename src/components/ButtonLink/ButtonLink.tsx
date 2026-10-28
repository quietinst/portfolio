import type { ReactNode } from 'react';
import './ButtonLink.scss';

interface ButtonLinkProps {
  href: string;
  download?: string;
  children: ReactNode;
}

const ButtonLink = ({ href, download, children }: ButtonLinkProps) => (
  <a href={href} download={download} className="btn">
    {children}
  </a>
);

export default ButtonLink;
