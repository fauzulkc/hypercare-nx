export type User = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  join_date: string;
  description: string;
};

export const getUsers = async (listSize = 10, currentPage = 1) => {
  const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/users`).then(
    (res) => res.json().then((data) => data.data.users as User[])
  );
  if (!data) throw new Error('Error fetching users');
  return { data, size: data.length };
};
