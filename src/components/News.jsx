import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spiner';
import PropTypes from 'prop-types';

class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 20,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        mode: PropTypes.string,
        Togglemode: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
        document.title = `${this.props.category} - Updated`;
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d0be5d2016b4f0c8f52be294656ed94&page=1&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false,
        });
    }

    handlenextpage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
            // Handle case when there are no more pages
        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d0be5d2016b4f0c8f52be294656ed94&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                articles: parseddata.articles,
                page: this.state.page + 1,
                loading: false,
            });
        }
    };

    handlepreviouspage = async () => {
        if (this.state.page > 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d0be5d2016b4f0c8f52be294656ed94&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                articles: parseddata.articles,
                page: this.state.page - 1,
                loading: false,
            });
        }
    };

    render() {
        const { mode } = this.props;

        return (
            <>
                <div className="container" style={{ color: mode === 'dark' ? 'white' : 'black'}}>
                    <h1 className={`text-center my-5 text-${mode === 'dark' ? 'light' : 'dark'}`}>Updated - Top {this.props.category} Headlines</h1>
                    <div className="container d-flex justify-content-between my-5">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviouspage}>
                            &larr; Prev
                        </button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextpage}>
                            Next &rarr;
                        </button>
                    </div>
                    {this.state.loading && <Spinner />}

                    <div className="row">
                        {this.state.articles.map((element, index) => (
                            <div className="col-md-4 my-2" key={index}>
                                <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode={this.props.mode}/>
                            </div>
                        ))}
                    </div>

                    <div className="container d-flex justify-content-between my-5">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviouspage}>
                            &larr; Prev
                        </button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextpage}>
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default News;
