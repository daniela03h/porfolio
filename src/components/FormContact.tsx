import Button from "./ui/Button";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";

export default function FormContact() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        type="text"
        name="name"
        label="Nombre Completo"
        className="mt-1 w-full p-2 border border-dark rounded-md"
      />

      <Input
        type="text"
        name="phone"
        label="Numero de Celular"
        className="mt-1 w-full p-2 border border-dark rounded-md"
      />

      <Input
        type="email"
        name="email"
        label="Correo electronico"
        className="mt-1 w-full p-2 border border-dark rounded-md"
      />
      <TextArea id="textAreaMsns" label="Mensaje" name="message" className="mt-1 w-full p-2 border border-dark rounded-md"/>
      <Button className="mt-4 w-full bg-darkRose text-dark font-bold py-2 px-4 rounded hover:bg-darkRose/80">
        Enviar
      </Button>
    </form>
  );
}
