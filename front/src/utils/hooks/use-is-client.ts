import { useEffect, useState } from "react";

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log("**we are on the client**");
    setIsClient(true);
  }, []);

  return isClient;
};
