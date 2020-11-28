import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default (props) => (
  <div>
    <div
      className={"list" + (props.todo.complete ? " complete" : "")}
      onClick={props.toggleComplete}
    >
      <p>
        {props.todo.text}
        <span>
          <FontAwesomeIcon
            onClick={props.onDelete}
            className="faicons"
            icon="trash"
          />
        </span>
      </p>
    </div>
  </div>
);
