import NewsCategories from "./NewsCategories";
import NewsDetails from "./NewsDetails";
import NewsList from "./NewsList";
import NotFoundPage from "./NotFoundPage";

const NewsApp = () => {
  return (
    <section>
      <NewsCategories />
      <NewsDetails />
      <NewsList/>
    </section>
  );
};
