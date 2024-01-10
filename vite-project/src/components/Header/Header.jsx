import Button from "../Button";
import homeLogo from "../../assets/homeIcon.png";

export default function Header() {
  return (
    <header className="relative">
      <div className="flex flex-row justify-between p-1.5 shadow-md fixed top-0 left-0 right-0 hover:py-4 transition-all duration-300 ease-in-out opacity-90 bg-white">
        <div>
          <Button className="flex text-3xl font-bold gap-2 align-middle justify-center">
            <img src={homeLogo} alt="home-logo" className="object-fit h-12" />
            <span className="m-auto">Home</span>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
          <Button buttonTheme="black">Write a Post</Button>
        </div>
      </div>
    </header>
  );
}
