import HomepageHeading from "../views/homepage-heading";
import RecentContacts from "../views/recent-contacts";
import SearchBar from "../views/search-bar";
import StatisticsCards from "../views/statistics-cards";

export default function HomePage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <HomepageHeading />
      <SearchBar />
      <StatisticsCards />
      <RecentContacts />
    </div>
  );
}
