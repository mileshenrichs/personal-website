import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const BookSummaryThumbnailLink = ({ bookTitle, imgFixed, slug }) => (
    <div className="BookSummaryThumbnailLink">
        <Link to={slug}>
            <Img fixed={imgFixed} alt={bookTitle} />
        </Link>
    </div>
);

export default BookSummaryThumbnailLink;