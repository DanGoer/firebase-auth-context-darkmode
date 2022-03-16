import { useThemeContext } from "./ThemeContext";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className=" w-40 transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <img
          src={Sun}
          alt="Sun"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-green-500 dark:text-green-400 text-2xl cursor-pointer"
        />
      ) : (
        <img
          src={Moon}
          alt="Moon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-green-500 dark:text-green-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
