import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
    api: "efa74fb093b94b6091ce0a44e7bff29a",
  };

  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string,
  };
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `610 News - ${this.Capitalize(this.props.category)}`;
  }

  async updateNews() {
    this.props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsedData = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
    this.props.setprogress(100);
  }
  
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
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
  //         this.props.country
  //       }&category=${this.props.category}&apiKey=${this.props.api}&page=${
  //         this.state.page + 1
  //       }&pagesize=${this.props.pagesize}`;
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

  render() {
    return (
      <>
        <h2 className="text-center mt-4 display-6 bg-secondary py-2 px-3 text-light">
          Top Headlines - {this.Capitalize(this.props.category)}
        </h2>
        
        {this.state.loading && <Spinner/>}  

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imageurl={
                        !element.urlToImage
                          ? "./download.jfif"
                          : element.urlToImage
                      }
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
  }
}

export default News;
