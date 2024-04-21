import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <Image width="240" height="80" src="/logo.png" alt="Carbide Logo" className="max-w-full" />
      <p className="text-center">redefining the consumer storage space</p>
    </div>
  );
}
