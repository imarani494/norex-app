import React from "react";
import { Dropdown } from "react-bootstrap";

const WeatherDropdown = ({ options, selected, onChange, style }) => (
  <Dropdown onSelect={onChange} className="mb-3" style={style}>
    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={style}>
      {selected}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {options.map((option) => (
        <Dropdown.Item key={option} eventKey={option}>
          {option}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default WeatherDropdown;
