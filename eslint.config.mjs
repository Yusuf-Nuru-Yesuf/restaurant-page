import config from "eslint-config-standard";

export default [
  ...[].concat(config),
  {
    extends: ["some-other-config-you-use", "prettier"],
  },
];
