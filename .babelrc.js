module.exports = (maze) => {
  maze.cache(true);

  const presets = [
    "@babel/preset-env",
  ];

  return { presets };
}
