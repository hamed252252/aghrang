import Link from "next/link";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className="p-4 bg-white ">
        <nav>
            <Link
                href="/"
                className="text-xl font-bold text-gray-700"
            >
                {title}
            </Link>
        </nav>
    </header>
);

export default Header;
