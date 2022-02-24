import { Typography } from "@material-ui/core";

function Footer() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100vw",
    }}>
    <Typography
      style={{
        background: "#fae017",
        height: "50px",
        textAlign: "center",
        width: "33.3vw",
        border: "1px solid black",

      }}
    >
      Footer 1
    </Typography>
    <Typography
      style={{
        background: "#fae017",
        height: "50px",
        textAlign: "center",
        width: "33.3vw",
        borderTop: "1px solid black",
        borderBottom: "1px solid black"
      }}
    >
      Footer 2
    </Typography>
    <Typography
      style={{
        background: "#fae017",
        height: "50px",
        textAlign: "center",
        width: "33.3vw",
        border: "1px solid black"
      }}
    >
      Footer 3
    </Typography>
    </div>
  );
}
export default Footer;
