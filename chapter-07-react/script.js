const LikeButton = () => {
  let [liked, setLiked] = React.useState(false);

  if (liked) {
    return React.createElement("h1", null, "Liked!");
  }

  return React.createElement(
    "button",
    {
      className: "like-button",
      onClick: () => {
        setLiked(true);
      },
    },
    "Click to like!"
  );
};

const domContainer = document.querySelector("#app");

const manyButtons = React.createElement(
  "div",
  null,
  React.createElement(LikeButton),
  React.createElement(LikeButton),
  React.createElement(LikeButton),
  React.createElement(LikeButton),
  React.createElement(LikeButton)
);

ReactDOM.render(manyButtons, domContainer);
