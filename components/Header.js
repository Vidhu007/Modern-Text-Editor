import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";
import Image from "next/image";

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="hidden md:inline-flex ml-2 text-gray-700 text-2xl">
        Docs
      </h1>

      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg group focus-within:text-gray-600 focus-within:shadow-md ">
        <Icon name="search" size="3xl" color="darkgray" />
        <input
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
          type="text"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <Image
        loading="lazy"
        onClick={signOut}
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={
          session?.user.image ||
          "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
        }
        width={48}
        height={48}
        alt="user Image"
      />
    </div>
  );
}

export default Header;
