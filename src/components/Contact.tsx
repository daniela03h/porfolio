import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <div className="container mx-auto my-11 pt-20 md:px-6">
      <h2 className="text-4xl text-dark font-bold text-center">Contacto</h2>
      <div className="p-5 md:flex md:justify-between">
        <div className="flex flex-col gap-4 p-6 justify-center">
          <div className="flex gap-5">
            <FaPhoneAlt size={26} className="text-brown" />
            <p className="text-xl text-darkRose font-bold">+57 3162777179</p>
          </div>

          <div className="flex gap-5 ">
            <MdEmail size={36} className="text-brown" />
            <p className="text-xl text-darkRose font-bold">
              daniela0393h@gmail.com
            </p>
          </div>
        </div>
        <div className="md:w-3/5">
        <FormContact />
        </div>
      </div>
    </div>
  );
}
