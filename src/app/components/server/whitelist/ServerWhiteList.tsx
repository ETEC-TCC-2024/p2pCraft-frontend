"use client";

import React, { useState } from "react";
import WhitelistItem from "./WhiteListItem";
import WhitelistField from "./WhiteListField";
import { PlayerDto } from "@/dto/client/PlayerDto";

const WhiteList = ({
  whitelistPlayers,
  serverName,
}: {
  serverName: string;
  whitelistPlayers: PlayerDto[];
}) => {
  const [players, setPlayers] = useState(whitelistPlayers);

  return (
    <div className="border-[3px] border-dark-green-500 ">
      <WhitelistField
        serverName={serverName}
        onAdd={(player) => setPlayers([...players, player])}
      />
      <ul>
        {players.map((player) => {
          return (
            <WhitelistItem
              playerName={player.name}
              key={player.name}
              serverName={serverName}
              onRemove={() => setPlayers(players.filter((p) => p.name !== player.name))}
            ></WhitelistItem>
          );
        })}
      </ul>
    </div>
  );
};
export default WhiteList;
