import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
        NewsUpdate();
        // eslint-disable-next-line
    }, []);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const NewsUpdate = async () => {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1ab848c3a8824ea884fab0dbb261b1db&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
    };

    useEffect(() => {
        NewsUpdate();
        // eslint-disable-next-line
    }, [page]);

    const handleNextClick = async () => {
        setPage(page + 1);
    };

    const handlePrevClick = async () => {
        setPage(page - 1);
    };

    return (
        <>
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px', marginTop: '90px' }}>
                    NewsApp -- Top {capitalizeFirstLetter(props.category)} Headlines
                </h1>
                {loading && <Spinner />}
                <div className="row">
                    {!loading &&
                        articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : ''}
                                        description={element.description ? element.description : ''}
                                        imgurl={element.urlToImage}
                                        url={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
    );
};

News.defaultProps = {
    country: 'us',
    pageSize: 16,
    category: 'general',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
