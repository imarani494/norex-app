import React from 'react';
import { Dropdown } from 'react-bootstrap';

const WeatherSelect = ({ location, setLocation, setDays }) => {
  return (
    <div className="weather-select">
      <Dropdown onSelect={(eventKey) => setLocation(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Location: {location}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Ho Chi Minh">Ho Chi Minh</Dropdown.Item>
          <Dropdown.Item eventKey="Singapore">Singapore</Dropdown.Item>
          <Dropdown.Item eventKey="Kuala Lumpur">Kuala Lumpur</Dropdown.Item>
          <Dropdown.Item eventKey="Tokyo">Tokyo</Dropdown.Item>
          <Dropdown.Item eventKey="Athens">Athens</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div>
        <label>Number of days for forecast:</label>
        <input
          type="number"
          min="1"
          max="7"
          value={3}
          onChange={(e) => setDays(e.target.value)}
        />
      </div>
    </div>
  );
};

export default WeatherSelect;
