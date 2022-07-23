import React from "react";
import TableItems from "./TableItems";
import TableHader from "./TableHader";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TableList = ({ post, remove }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-4 ">Favorite Programming Language</h2>
      <TransitionGroup>
        {post.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <TableItems
              remove={remove}
              id={item.id}
              number={index + 1}
              title={item.title}
              stack={item.stack}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TableList;
