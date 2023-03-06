const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  const boxElement = (
    <div className={className}>
      <h1 className="description">{name}</h1>
    </div>
  );
  return boxElement;
};

const element = (
  //  Write your code here.
  <div className="backgroundContainer">
    <h1 className="heading"> Boxes </h1>
    <div className="boxesContainer">
      <Box className="smallBox" name="Small" />
      <Box className="mediumBox" name="Medium" />
      <Box className="largeBox" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
