const useErrorReporter = (options = {}) => {
  const {filePath} = options;
  return (err) => {
    console.log('Error: ', err);
  };
};

export default useErrorReporter;
