import React from "react";
import { useNavigate } from "react-router-dom";
import { CardInput } from "../card-search-user-input";
import { FormField } from "../form-field";
import { Button } from "../button";
import { SwitchRoutes } from "@/routes";
import * as classes from "./search-user-list.styles";

export const SearchUserList: React.FC = () => {
  const navigate = useNavigate();

  const [searchingUser, setSearchingUser] = React.useState<string>("");
  const [toggleList, setToggleList] = React.useState<boolean>(true);

  const divCardRef = React.useRef<HTMLDivElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchingUser(event.target.value);
    setToggleList(true);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: any
  ) => {
    event.preventDefault();
    //
    let Searching: string = "";
    if (event && event.target && event.target.user && event.target.user.value) {
      Searching = event.target.user.value;
    }
    navigate(`${SwitchRoutes.updateUser}/${Searching}`);
    setSearchingUser("");
  };

  //
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        divCardRef.current &&
        // con contains() se comprueba si ese elemento es un ancestro del elemento que fue clickeado
        !divCardRef.current.contains(event.target)
      ) {
        setToggleList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormField
        myStyles={classes.inputStyles}
        handleChange={handleChange}
        name={"user"}
        required
        type="text"
        pl="Who are you looking for?"
        txtName="search user with ID or email"
        nameValue={searchingUser}
      />
      <Button text={"Search"} disabled={!!searchingUser} />
      <div className={classes.divCard} ref={divCardRef}>
        {toggleList && searchingUser ? (
          <CardInput
            searchingUser={searchingUser}
            setSearchingUser={setSearchingUser}
          />
        ) : (
          ""
        )}
      </div>
    </form>
  );
};
