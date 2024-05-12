'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UsersList } from './components/UsersCard/UsersList';
import { UserCard } from '@hypercare/ui/user-card';
const queryClient = new QueryClient();
export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  );
}
