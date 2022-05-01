import React, {useEffect} from "react";
import HomeContainer from "../lib/HomeContainer";
import SearchForm from "../lib/SearchForm";
import HomeShowcase from "../lib/HomeShowcase";

export default function Index() {

  return (
    <HomeContainer>
      <SearchForm />
      <HomeShowcase />
    </HomeContainer>
  );
}
