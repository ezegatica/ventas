import React, {useEffect} from "react";
import HomeContainer from "../lib/HomeContainer";
import SearchForm from "../lib/SearchForm";
import HomeShowcase from "../lib/HomeShowcase";
// import { disconnect } from "../lib/database";

export default function Index() {
  // useEffect(() => {
  //   return () => {
  //     disconnect();
  //   };
  //   //eslint-disable-next-line
  // }, []);

  return (
    <HomeContainer>
      <SearchForm />
      <HomeShowcase />
    </HomeContainer>
  );
}
