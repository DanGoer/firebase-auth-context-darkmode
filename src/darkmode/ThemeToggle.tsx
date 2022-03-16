import { useThemeContext } from "./ThemeContext";
import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";

const Toggle = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <Moon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
