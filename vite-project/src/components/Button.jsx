export default function Button({ children, buttonTheme, ...props }) {
  let defaultButtonStyle =
    "p-2 border-2 border-zinc-800 rounded-md text-stone-800 hover:text-stone-950 hover:bg-zinc-200";
  let blackButtonStyle = "p-2 bg-black rounded-md text-gray-200";

  return (
    <button
      className={
        buttonTheme === undefined ? defaultButtonStyle : blackButtonStyle
      }
      {...props}
    >
      {children}
    </button>
  );
}
