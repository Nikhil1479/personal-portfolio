const NavItem = ({ Icon, isActive, setIsActive, id, className, label }) => {
    return (
        <a
            href={id}
            className={isActive === id ? "active home" : { className }}
            onClick={() => setIsActive(id)}
            aria-current={isActive === id ? "page" : undefined}
            data-tooltip={label}
        >
            <Icon />
        </a>
    );
};

export default NavItem;