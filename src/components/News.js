import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    props.setprogress(30);
    let parsedData = await data.json();
    props.setprogress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setprogress(100);
  };
  
  useEffect(() => {
    document.title = `610 News - ${Capitalize(props.category)}`;
    updateNews();
    /* eslint-disable no-eval */
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.api}&page=${
      page + 1
    }&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page + 1);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${props.category}&apiKey=${props.api}&page=${this.state.page - 1}&pagesize=${props.pagesize}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   });
  //   this.setState({
  //     page: this.state.page - 1
  //   });
  //   this.updateNews();
  // };

  //   handleNextClick = async () => {
  //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 9))) {
  //       let url = `https://newsapi.org/v2/top-headlines?country=${
  //         props.country
  //       }&category=${props.category}&apiKey=${props.api}&page=${
  //         this.state.page + 1
  //       }&pagesize=${props.pagesize}`;
  //       this.setState({loading: true});
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       this.setState({
  //         page: this.state.page + 1,
  //         articles: parsedData.articles,
  //         loading: false
  //       });
  //       this.setState({
  //         page: this.state.page + 1
  //       });
  //       this.updateNews();
  //   };
  // }

  return (
    <>
      <h2 className="text-center mt-4 display-6 bg-secondary py-2 px-3 text-light">
        Top Headlines - {Capitalize(props.category)}
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={element.description ? element.description.slice(0, 90): ""}
                    imageurl={!element.urlToImage ? "./download.jfif": element.urlToImage}
                    newsurl={element.url}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/*<div className="d-flex justify-content-center my-2 bg-light py-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="mx-2 btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &#8592; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="mx-2 btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div>*/}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 9,
  category: "general",
};

News.propTypes = {
  country: propTypes.string,
  pagesize: propTypes.number,
  category: propTypes.string,
};

export default News;