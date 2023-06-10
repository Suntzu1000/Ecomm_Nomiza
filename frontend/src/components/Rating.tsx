function Rating(props: {
  rating: number;
  numReviews?: number;
  caption?: string;
  className?: string;
}) {
    const {rating, numReviews, caption, className} = props
    return <div className={`rating ${className}`} >
        <span>
            <i 
                className={
                    rating >= 1 
                    ? "fas fa-star"
                    : rating >= 0.5
                    ? 'fa fa-star-half-alt'
                    : 'fa fa-star'
                }
            />
        </span>
        <span>
            <i 
                className={
                    rating >= 2 
                    ? "fas fa-star"
                    : rating >= 1.5
                    ? 'fa fa-star-half-alt'
                    : 'fa fa-star'
                }
            />
        </span>
        <span>
            <i 
                className={
                    rating >= 3
                    ? "fas fa-star"
                    : rating >= 2.5
                    ? 'fa fa-star-half-alt'
                    : 'fa fa-star'
                }
            />
        </span>
        <span>
            <i 
                className={
                    rating >= 4 
                    ? "fas fa-star"
                    : rating >= 3.5
                    ? 'fa fa-star-half-alt'
                    : 'fa fa-star'
                }
            />
        </span>
        <span>
            <i 
                className={
                    rating >= 5 
                    ? "fas fa-star"
                    : rating >= 4.5
                    ? 'fa fa-star-half-alt'
                    : 'fa fa-star'
                }
            />
        </span>
        {caption ? (
            <span>{caption}</span>
        ) : numReviews != 0 ? (
            <span>{'' + numReviews + 'reviews'}</span>
        ) : (
            ''
        ) }
    </div>
}

export default Rating;
