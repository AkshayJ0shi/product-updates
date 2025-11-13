import { UserInteractionsTable } from "@/components/user-interactions-table";
import { userInteractions } from "@/lib/data";

export default function UserInteractionsPage() {
  return <UserInteractionsTable data={userInteractions} />;
}
