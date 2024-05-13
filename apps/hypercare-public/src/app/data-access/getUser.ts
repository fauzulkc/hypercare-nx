import { User } from '@hypercare/types';

export const getUsers = async (
  listSize = 10,
  currentPage = 1,
  mockData?: User[]
) => {
  const data =
    mockData ||
    (await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/users`).then((res) =>
      res.json().then((data) => data.data.users as User[])
    ));
  if (!data) throw new Error('Error fetching users');
  return { data, size: data.length };
};
