import styles from "./styles/my-style.module.css";

const Delux = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style!</p>
        <h1 className={styles.bigblue}>Hello Car!</h1>
      </>
    );
  }

  export default Delux;