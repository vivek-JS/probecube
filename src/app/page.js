import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid className="flex min-h-screen" direction={"column"}>
      <Grid
        container
        style={{
          background: "#FFFFFF",
          height: "9vh",
        }}
      >
        <img
          style={{
            height: "9vh",
          }}
          src="/procubeLogo.jpg"
        ></img>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          background:
            "linear-gradient(90deg, rgba(126,44,144,1) 0%, rgba(0,159,152,1) 18%)",
          height: "92vh",
        }}
      >
        <img
          style={{
            height: "75vh",
          }}
          src="/comming.jpg"
        ></img>
      </Grid>
    </Grid>
  );
}
