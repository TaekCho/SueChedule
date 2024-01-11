import Button from "../Button";
import homeLogo from "../../assets/homeIcon.png";

export default function Header() {
  return (
    <header className="relative">
      <div className="flex flex-row justify-between p-2 shadow-md fixed top-0 left-0 right-0 hover:py-4 transition-all duration-300 ease-in-out opacity-90 bg-white">
        <div>
          <Button className="flex text-3xl font-bold gap-2 align-middle justify-center">
            <img src={homeLogo} alt="home-logo" className="object-fit h-12" />
            <span className="m-auto font-bagel-fat-one">Suechodule</span>
          </Button>
        </div>
        <div className="md:flex gap-4 hidden">
          <Button>Suechodule</Button>
          <Button>투두</Button>
          <Button>THANKS!</Button>
          <Button buttonTheme="black">Write a Post</Button>
        </div>
      </div>
    </header>
  );
}
