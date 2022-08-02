import { ListNewsItem } from "../ListNewsItem";
import {
  useGetLatestNewsQuery,
  useGetTechNewsQuery,
  useGetLifestyleNewsQuery,
} from "../../../services/news/cnbc";
import { Slugify } from "../../../utils/Typography";
import Loading from "../../../utils/Loading";

export const SearchBoxResult = ({ query }) => {
  const newsPicked = { data: [], isLoading: true };

  const latestNews = useGetLatestNewsQuery();
  const techNews = useGetTechNewsQuery();
  const lifestyleNews = useGetLifestyleNewsQuery();

  if (!query) return;

  if (
    !latestNews.isLoading &&
    !techNews.isLoading &&
    !lifestyleNews.isLoading
  ) {
    const newses = [
      ...latestNews.data.data.posts,
      ...techNews.data.data.posts,
      ...lifestyleNews.data.data.posts,
    ];

    const allNews = newses.map((val) => {
      return { ...val, slug: Slugify(val.title) };
    });

    newsPicked.data = allNews.filter((val) => {
      return val.title.toLowerCase().includes(query);
    });

    newsPicked.isLoading = false;
  }

  return (
    <>
      {newsPicked.isLoading ? (
        <Loading />
      ) : newsPicked.data.length > 0 ? (
        newsPicked.data.map((val, idx) => {
          return <ListNewsItem key={idx} slug={val.slug} post={val} />;
        })
      ) : (
        <div style={{ height: "50vh" }}>No news data found.</div>
      )}
    </>
  );
};
