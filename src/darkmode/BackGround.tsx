const Background: React.FC<{}> = ({ children }) => {
  return (
    <body className="bg-white dark:bg-black transition-all">{children}</body>
  );
};

export default Background;
