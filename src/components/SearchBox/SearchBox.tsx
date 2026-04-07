import css from "./SearchBox.module.css";
import { useState } from "react";

interface SearchBoxProps {
  onChange: (value: string) => void;
}

const SearchBox = ({ onChange }: SearchBoxProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  return (
    <input
      className={css.input}
      defaultValue={value}
      onChange={handleChange}
      type="text"
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
