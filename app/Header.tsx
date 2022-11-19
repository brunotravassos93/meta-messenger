import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth";

async function Header() {
  const session = await unstable_getServerSession();

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src="https://scontent.fjpa1-1.fna.fbcdn.net/v/t39.30808-6/312625266_5593615684018936_2244344847610948049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9c-YXCptFHuwjSZjUDZFfBpSuLbSe1GMGlK4ttJ7UY7vBwVDYC9iccRyCHBpzSGeyKsVI1g9e02T5NvTMvmur&_nc_ohc=fM6qa7YAqo0AX8vIbpi&tn=jQHaeSvD73dCjYFJ&_nc_ht=scontent.fjpa1-1.fna&oh=00_AfDwdkALwvXikuI6qalG8yBdLrdcUYw-wUTIvVIkWTQKRA&oe=637D631B"
            alt="Profile Picture"
          />

          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Bruno Travassos</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Symbol.png"
            height={50}
            width={90}
            alt="Logo"
          />

          <p className="text-blue-400">Welcome to the MESSENGER</p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
