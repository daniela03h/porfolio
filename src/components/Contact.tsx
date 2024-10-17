import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <>
      <h2 className="text-4xl text-dark font-semibold text-center">Contacto</h2>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex gap-5">
          <FaPhoneAlt size={36} className="text-brown" />
          <p className="text-xl text-darkRose font-bold">+57 3162777179</p>
        </div>

        <div className="flex gap-5">
          <MdEmail size={36} className="text-brown" />
          <p className="text-xl text-darkRose font-bold">
            daniela0393h@gmail.com
          </p>
        </div>
        <FormContact/>
      </div>
    </>
  );
}
