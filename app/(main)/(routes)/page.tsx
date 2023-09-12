import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="p-6">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default page;
