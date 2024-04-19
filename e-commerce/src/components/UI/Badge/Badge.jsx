import Button from "../Button/Button";

const Badge = ({ children, className, content, ...props }) => {
  return (
    <Button className={`${className} relative`} {...props}>
      {children}
      <span
        className={`font-extrabold text-base leading-none
        block translate-x-1/2 -translate-y-1/2 
        absolute top-0 right-0
         bg-blue-300
         text-blue-800
         px-2 py-1 
        rounded-full`}
      >
        {content}
      </span>
    </Button>
  );
};

export default Badge;
