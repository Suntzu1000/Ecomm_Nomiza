interface NavHeader {
  children?: React.ReactNode;
  className?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavHeader: React.FC<NavHeader> = ({ children, className }) => {
  return (
    <>
      <div
        className={`${className} ${classNames(
          "bg-gray-900  text-gray-300 hover:bg-gray-700 hover:text-white",
          "rounded-md px-3 py-2 text-sm font-medium"
        )}`}
      >
        {children}
      </div>
    </>
  );
};

export default NavHeader;
