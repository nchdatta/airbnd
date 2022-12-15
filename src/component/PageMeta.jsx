import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageMeta = ({ title }) => {
    return (
        <Helmet>
            <title>{title} | Airbnd</title>
        </Helmet>
    );
};

export default PageMeta;