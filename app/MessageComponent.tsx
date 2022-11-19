import Image from "next/image";
import { Message } from "../typings";

type Props = {
  message: Message;
};
function MessageComponent({ message }: Props) {
  return (
    <div>
      <div>
        <Image
          className="rounded-full mx-2"
          height={10}
          width={50}
          src={message.profilePic}
          alt="Profile Picture"
        />
      </div>
    </div>
  );
}

export default MessageComponent;
