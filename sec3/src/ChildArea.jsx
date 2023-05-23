import { memo } from "react";

const style = {
  width: "100%",
  height: "100px",
  backgroundColor: "grey",
};

export const ChildArea = memo((props) => {
  const { open } = props;
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log(data);
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
