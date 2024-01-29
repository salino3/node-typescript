import React from "react";

interface Props {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  first: string;
};

export const ItemsForm: React.FC<Props> = (props) => {
  const { handleChange, first } = props;

  return (
    <>
      <label
        htmlFor="user"
        className="text-success px-1 labelproduct rounded"
      >
        Text number or title item
      </label>
      <br />
      <input
        onChange={handleChange}
        type="text"
        value={first || ""}
        id="user"
        required
      />
      <button
        type="submit"
        disabled={first ? false : true}
        className="btn btn_input m-1"
      >
        Search
      </button>
    </>
  );
};
