import Dropdown from "react-bootstrap/Dropdown";
import User from "../assets/dropdown-user.png";
import Journey from "../assets/dropdown-journey.png";
import Bookmark from "../assets/dropdown-bookmark.png";
import Logout from "../assets/dropdown-logout.png";

const DropdownProfile = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <img src={User} alt="user" /> Profile
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <img src={Journey} alt="journey" /> New Journey
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <img src={Bookmark} alt="bookmark" /> Bookmark
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">
            <img src={Logout} alt="logout" /> Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownProfile;
