import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgurl, url, author, date, source} = props; //de-structuring

    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgurl?"https://dims.apnews.com/dims4/default/f897b30/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F70%2F77%2F9cc43a78aae30c35231b4d31698a%2F3b6d7917da554b07997379a7486e248f" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex:'1'}}>{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small>By {author ? author : "unknown"} on {date}</small></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem