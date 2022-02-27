import axios from "axios";
import type { NextPage } from "next";
import { useEffect } from "react";



const IDPage: NextPage = () => {
//   useEffect(() => {
//     console.log(props.id);
//   }, []);

  return <div>a</div>;
};

export default IDPage;

IDPage.getInitialProps = async ({ query }) => {
  const { id } = query;
//   const res = await 
};
