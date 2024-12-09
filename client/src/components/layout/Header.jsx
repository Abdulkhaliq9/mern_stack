import { Facebook, Instagram } from "lucide-react";
import {} from "react";
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom";

export default function Header() {
  return (
  <>
    <div className="  bg-[#dfdfdf]   ">
      <div className="max-w-screen-xl mx-auto w-full px-5 flex justify-between py-2 items-center">
        <div className="flex gap-5 ">
          <div className=" text-sm mail border-r pr-5">mega@mega.com</div>
          <div className=" text-sm shipping">Free shipping for all orders $99.9</div>
        </div>
        <div className="flex gap-5">
          <div className="social flex gap-5 border-r pr-5 ">
            <Facebook />
            <Instagram />
          </div>
          <div className="login  ">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
    <Navbar/>
  </>
  );
}
