export const Badge = ({ children, className = "" }) => {
    return <div className={`text-gray-800 p-2 rounded ${className}`}>{children}</div>;
  };