const weapons = {
  rock: {
    icon: "fa-solid fa-gem",
    rules: {
      paper: false,
      scissor: true,
    },
  },
  paper: {
    icon: "fa-solid fa-leaf",
    rules: { scissor: false, rock: true },
  },
  scissor: {
    icon: "fa-solid fa-scissors",
    rules: {
      rock: false,
      paper: true,
    },
  },
};
export default weapons;
