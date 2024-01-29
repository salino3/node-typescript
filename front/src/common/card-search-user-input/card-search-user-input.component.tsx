import React, { useContext } from "react";
// import { GlobalData, MyState, ProductInfo } from "../core";

import { GlobalContext, MyState, Users } from "@/core";
import * as classes from './card-search-user-input.styles';
// import "./stylesComponents.scss";

interface Props {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<any>>;
}

export const CardInput: React.FC<Props> = (props) => {
  const { first, setFirst } = props;

  const { state } = useContext<MyState>(GlobalContext);
  const { users } = state;

  const onSearchCard = (event: string | undefined): void => {
    setFirst(event?.toString());
  };

  return (
    <>
      {!users
        ? "Loading"
        : users
            .filter((user: Users) => {
              let searchTerm = "";
              let x: string = first?.toLowerCase() || "";
              searchTerm = x || "";
              const thetitle: string = user.email.toLowerCase() || "";
              const theid: string | undefined = user?.id;

              return (
                searchTerm && theid &&
                (theid.includes(searchTerm) || thetitle.includes(searchTerm)) &&
                (thetitle || theid)
              );
            })
            .slice(0, 10)
            .map((item: Users) => (
              <div
                onClick={() => onSearchCard(item?.id)}
                className={classes.divRows}
                key={item.id}
              >
                <b>
                  {item.name} ~ {item.email}
                </b>
              </div>
            ))}
    </>
  );
};
