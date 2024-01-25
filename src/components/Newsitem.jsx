import React, { Component } from "react";

export class Newsitem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, source, mode } = this.props;
        return (
            <div>
                <div className={`card bg-${mode==='dark'?'dark':'light'} text-${mode==='light'?'dark':'light'}`}>
                    <img
                        src={
                            imageurl
                                ? imageurl
                                : "https://thumbs.dreamstime.com/z/newspaper-breaking-news-1656565.jpg?ct=jpeg"
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}{" "}
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {source}
                            </span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                By <b>{!author ? "unknown" : author}</b> on{" "}
                                <b>{new Date(date).toGMTString()}</b>
                            </small>
                        </p>
                        <a
                            href={newsurl}
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-dark btn-sm"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;
