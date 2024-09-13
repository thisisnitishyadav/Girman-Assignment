import UserCard from "./UserCard";
import { users } from "./CardData";

export default function CardGrid({ }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 px-8">
      {users.map((user, index) => (
        <UserCard
          key={index}
          firstName={user.firstName}
          lastName={user.lastName}
          location={user.location}
          phone={user.phone}
          imageUrl={user.imageUrl}
        />
      ))}
    </div>
  );
}