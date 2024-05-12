import { useQuery } from '@tanstack/react-query';
import { User, getUsers } from '../../DataLoader/getUser';
import { UserCard } from '@hypercare/ui/user-card';
import { DetailedCard } from '@hypercare/ui/detailed-card';
import { Modal } from '@hypercare/ui/modal';
import '../../global.css';
import { useState } from 'react';

export const UsersList = () => {
  const [listsize, setListsize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState<User | false>(false);

  const {
    isPending,
    error,
    data: users,
  } = useQuery({
    queryKey: ['usersData', listsize, currentPage],
    queryFn: () => getUsers(listsize, currentPage),
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
  if (users) {
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
          {users.data.map((user: User) => (
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
  }
};
