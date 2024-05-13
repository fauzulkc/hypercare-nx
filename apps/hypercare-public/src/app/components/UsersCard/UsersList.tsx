import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../data-access/getUser';
import { User } from '@hypercare/types';
import { UserCard } from '@hypercare/ui/user-card';
import { DetailedCard } from '@hypercare/ui/detailed-card';
import { Modal } from '@hypercare/ui/modal';
import '../../global.css';
import { useState } from 'react';

export interface usersListProps {
  users?: User[];
}

export const UsersList = (props: usersListProps) => {
  const [listsize, setListsize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState<User | false>(false);

  const {
    isPending,
    error,
    data: users,
  } = useQuery({
    queryKey: ['usersData', listsize, currentPage, props.users],
    queryFn: () => getUsers(listsize, currentPage, props.users),
  });

  if (isPending)
    return (
      <div className="flex flex-wrap justify-around gap-6 item-center">
        {[...Array(5)].map((_, index) => (
          <UserCard key={index} loading={true} />
        ))}
        ;
      </div>
    );

  if (error) return 'An error has occurred: ' + error.message;
  if (users.data.length < 0) {
    users.data = props.users || [];
  }
  return (
    <>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <DetailedCard
            description={modal.description}
            firstName={modal.firstname}
            lastName={modal.lastname}
            role={modal.role}
            joinDate={new Date(modal.join_date)}
            imageUrl={modal.avatar}
          />
        </Modal>
      )}
      <div className="flex flex-wrap justify-around gap-6 item-center">
        {users.data.length > 0 &&
          users.data.map((user: User) => (
            <UserCard
              key={user.id}
              imageURL={user.avatar}
              title={user.username}
              buttonText="View More"
              description={user.description}
              imageAlt={user.firstname}
              onClick={() => setModal(user)}
            />
          ))}
      </div>
    </>
  );
};
