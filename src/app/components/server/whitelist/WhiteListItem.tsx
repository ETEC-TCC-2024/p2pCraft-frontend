import Image from "next/image";
import Button from "../../button/Button";
import Icon from "../../icon/Icon";
import Text from "../../text/TextComponent";
import { removePlayerFromWhitelist } from "@/app/actions/server";

interface WhitelistItemProps {
  serverName: string;
  playerName: string;
  onRemove: () => void;
}

const WhitelistItem: React.FC<WhitelistItemProps> = ({ serverName, playerName, onRemove }) => {
  return (
    <form action={removePlayerFromWhitelist} onSubmit={() => onRemove()}>
      <input defaultValue={serverName} name="serverName" hidden></input>
      <input defaultValue={playerName} name="playerName" hidden></input>
      <li className="border-b-[3px] last:border-none border-dark-green-500">
        <div className="flex flex-row items-center bg-dark-green-600 px-7 py-2 border-dark-green-900">
          <Image
            src={`https://mc-heads.net/avatar/${playerName}`}
            alt={"steve"}
            width={39}
            height={39}
            className="mr-2"
          ></Image>
          <Text className="text-white text-base font-medium">{playerName}</Text>
          <Button variant={"noBackground"} className="p-0 ml-auto" type="submit">
            <Icon.Minus className="w-10 h-10"></Icon.Minus>
          </Button>
        </div>
      </li>
    </form>
  );
};

export default WhitelistItem;
