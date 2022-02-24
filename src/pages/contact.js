import { Typography } from "@material-ui/core";
import '../App.css';

function Contact() {
  return (
    <Typography>
      <div
        style={{
          height: "calc(100vh - 150px)",
          padding: "5rem",
          paddingTop: 20,
          overflowY: "scroll",
          overflowX: "hidden",
          background: "black",
          color: "white"

        }}
      >
        <h3 style={{ textAlign: "center" }}>Contact Us</h3>
        <div>
          <p>
            Phone :- ***** *** ***
          </p>
          <p>
            Director : ------
          </p>

        </div>
      </div>
    </Typography>
  );
}
export default Contact;
