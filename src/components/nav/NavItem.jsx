const NavItem = ({ Icon, isActive, setIsActive, id, className }) => {
    return (
        <a
            href={id}
            className={isActive === id ? "active home" : { className }}
            onClick={() => setIsActive(id)}
            aria-current={isActive === id ? "page" : undefined}
        >
            <Icon />
        </a>
    );
};

export default NavItem;