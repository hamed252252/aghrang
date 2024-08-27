interface FooterProps {
    year: number;
    company: string;
}

const Footer: React.FC<FooterProps> = ({
    year,
    company,
}) => (
    <footer className="p-4 bg-gray-800 text-white text-center">
        &copy; {year} {company}
    </footer>
);

export default Footer;
