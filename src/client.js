import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    //projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId:'ztm7g3yb',
    dataset:'production',
    apiVersion:'2023-01-28',
    useCdn:true,
    //token: process.env.REACT_APP_SANITY_TOKEN
    token:'skjHqZtE2dj6xBcFtodO9smrPo6yx50yFwXG6Rtq1ov1PmH9H5x1SgYjFt9jJep0hFasQsxVZRy9BL5lX1hV8GtkUUQBwhFPSiBMQMp3awjy9w9ZU4kJLHbYUKqtogTsVNO815tH1Qe8bTGg9W6WzzgXciUrDecIn9M7dW3qOtLPrH7DhFXA'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);