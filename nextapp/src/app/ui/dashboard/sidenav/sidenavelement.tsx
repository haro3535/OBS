import Link from 'next/link';

interface SidenavElementProps {
    link: string;
    context: string;
}

export default function SidenavElement({link, context}: SidenavElementProps) {
    return (
        <li className="w-full">
            {link ? (
                <Link href={link}>
                    <a>{context}</a>
                </Link>
            ) : (
                <span>{context}</span>
            )}
        </li>
    );
}