import HomeContainer from "../lib/HomeContainer";
import SearchForm from "../lib/SearchForm";
import HomeShowcase from "../lib/HomeShowcase";

export default function search() {
  return (
    <HomeContainer>
      <SearchForm />
      <HomeShowcase />
    </HomeContainer>
  );
}
