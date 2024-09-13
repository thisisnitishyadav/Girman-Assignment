export default function UserCard({ firstName,lastName, location, phone, imageUrl }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <img src={imageUrl} alt={firstName} className="h-16 w-16 rounded-full mb-4" />
        <div className="flex">
        <h2 className="text-xl font-bold">{firstName}</h2>
        <h2 className="text-xl font-bold">{lastName}</h2>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">{phone}</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Fetch Details
        </button>
      </div>
    );
  }