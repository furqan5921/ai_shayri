import { CirclesWithBar, FallingLines, Hourglass } from "react-loader-spinner";
// import { Plane } from '@bit/mhnpd.react-loader-spinner.plane';
const LoaderComponent = ({ visiblity }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {/* <CirclesWithBar
        type="Puff"
        color="rgb(83,76,135)"
        height={"100vh"}
        width={100}
        visible={visiblity}
        outerCircleColor="rgb(187,219,192)"
        innerCircleColor="rgb(83,76,135)"
        barColor="rgb(187,219,192)"
        ariaLabel="circles-with-bar-loading"
      /> */}
      {/* <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      /> */}
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default LoaderComponent;
