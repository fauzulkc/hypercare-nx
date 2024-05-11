export interface UserCardProps {
  test: string;
}

export function UserCard(props: UserCardProps) {
  return (
    <div className={'bg-black'}>
      <h1 className="text-4xl text-white">Welcome to UserCard!</h1>
    </div>
  );
}

export default UserCard;
