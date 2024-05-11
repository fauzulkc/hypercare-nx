export interface UserCardProps {
  test: string;
}

export function UserCard(props: UserCardProps) {
  return (
    <div className={'bg-black'}>
      <h2 className="text-4xl text-white">Welcome to UserCard!</h2>
    </div>
  );
}

export default UserCard;
