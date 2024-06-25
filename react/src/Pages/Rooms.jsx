import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../Components/Loading";

const getRooms = () => fetch("/api/rooms").then((res) => res.json());

export default function Rooms() {
  const query = useQuery({ queryKey: ["rooms"], queryFn: getRooms });

  if (query.isLoading) {
    return (
      <main id="rooms" className="flex justify-center items-center h-screen">
        <div className="w-3/4 h-3/4 bg-white shadow-md border border-gray-300 rounded-lg p-6 flex flex-col justify-center items-center">
          <p className="text-4xl text-center">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main id="rooms" className="flex justify-center items-center h-screen">
      <div className="w-3/4 h-3/4 bg-white shadow-md border border-gray-300 rounded-lg p-8">
        <div className="grid grid-cols-1 gap-10">
          {query.data.rooms.map((room) => (
            <article
              key={room.id}
              className="bg-blue-500 m-3 p-3 rounded-md shadow-md flex justify-between items-center"
            >
              <h2 className="text-2xl text-blue">{room.name}</h2>
              <Link
                className="underline flex items-center"
                to={`/rooms/${room.id}`}
              >
                <FaArrowRight className="ml-2" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
