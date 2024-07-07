import { Bolt, Place } from "@mui/icons-material";
import Image from "next/image";
interface CardProps {
  logo: string;
  imageSrc: string;
  slug: string;
  client: string;
  location: string;
  capacity: string; // Change capacity type to string
}

const Card: React.FC<CardProps> = ({
  logo,
  imageSrc,
  client,
  location,
  capacity,
  slug,
}) => {
  // Function to convert capacity to MW
  const convertToMW = (capacity: string): string => {
    const numCapacity = parseFloat(capacity);
    return numCapacity > 500
      ? (numCapacity / 1000).toFixed(2) + " MWh"
      : capacity + " kWh";
  };
  return (
    <a
      href=""
      className="no-underline block rounded-lg p-4 shadow-sm shadow-indigo-100"
    >
      <Image
        src={imageSrc}
        alt="solar"
        width={300}
        height={200}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2 ">
        <dl>
          <div className="flex flex-row items-center justify-between gap-10 px-2">
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={7}
              className="rounded-xl w-12 h-auto"
            />
            <dt className="sr-only">Product</dt>
            <dd className="font-medium">{client}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Place fontSize="small" />
            <div className="mt-1.5 sm:mt-0">
              <p className="mb-0 font-medium">{location}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Bolt fontSize="medium" />

            <div className="mt-1.5 sm:mt-0">
              <p className="mb-0 text-gray-500">Capacity</p>
              <p className="mb-0 font-medium">{convertToMW(capacity)}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
