import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from './MySelect';

const Filter = ({filter,setFilter}) => {
  return (
    <div className="d-flex  justify-content-between my-2">
      <MyInput
        className="form-control"
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({...filter,query: e.target.value})}
      />
      <MySelect
        defaultValue="Sorted by"
        value={filter.sort}
        onChange={selected =>setFilter({...filter,sort: selected})}
        options={[
          { value: "title", name: "programming" },
          { value: "stack", name: "jobs" },
        ]}
      />
    </div>
  );
};

export default Filter;
