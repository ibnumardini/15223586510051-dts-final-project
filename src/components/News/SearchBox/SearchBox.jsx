import { useState, useEffect } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export const SearchBox = ({ querySearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(querySearch);
  }, [querySearch]);

  const searchNewsHandler = (query) => {
    navigate({
      pathname: "/search",
      search: `?query=${query}`,
    });
  };

  return (
    <>
      <Search
        placeholder="Search some news"
        allowClear
        enterButton
        size="large"
        value={query}
        onChange={(val) => setQuery(val.target.value)}
        onSearch={(query) => {
          searchNewsHandler(query);
        }}
      />
    </>
  );
};
