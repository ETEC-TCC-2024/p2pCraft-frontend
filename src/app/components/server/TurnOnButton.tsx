"use client"
import { useState } from "react";
import Button from "../button/Button";
import Conditional from "../conditional/Conditional";
import Icon from "../icon/Icon";

const TurnOnButton = ({ active, onClick }: { active: boolean; onClick: () => void }) => {
  "use client";
  const [activeState, setActive] = useState(active);

  return (
    <div
      onClick={() => {
        setActive(!activeState);
        onClick();
      }}
    >
      <Conditional showWhen={active}>
        <Button variant={"primary"} className="bg-red-300 m-0 p-0 hover:bg-red-200">
          <div className="flex justify-center mx-auto">
            <Icon.Stop className="w-11 h-11"></Icon.Stop>
          </div>
        </Button>{" "}
      </Conditional>

      <Conditional showWhen={!active}>
        <Button variant={"primary"} className="bg-green-300 m-0 p-0 hover:bg-green-200">
          <div className="flex justify-center mx-auto">
            <Icon.Stop className="w-11 h-11"></Icon.Stop>
          </div>
        </Button>
      </Conditional>
    </div>
  );
};

export default TurnOnButton;