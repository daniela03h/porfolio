import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <div className="container mx-auto px-5 flex flex-col justify-center gap-10 md:flex-row md:justify-betwee md:px-0">
      <div className="flex flex-col gap-4 p-6">
        <h2 className="text-4xl text-dark font-bold pb-5">Contacto</h2>
        <div className="flex gap-4 items-center">
          <FaPhoneAlt size={20} className="text-brown" />
          <p className="text-xl text-darkRose font-bold">+57 3162777179</p>
        </div>

        <div className="flex gap-4 items-center">
          <MdEmail size={26} className="text-brown" />
          <p className="text-xl text-darkRose font-bold">
            daniela0393h@gmail.com
          </p>
        </div>
      </div>

      <div className="md:w-3/5">
        <FormContact />
      </div>
    </div>
  );
}
