const useGetUri = () => {
  const uri = typeof window !== "undefined" ? window.location.href : "";
  return uri;
};

export default useGetUri;
