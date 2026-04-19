import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
 uri: 'https://natural-chickens-e83a29c958.strapiapp.com/graphql',
 credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
 headers: {
   Authorization: 'bearer f2eb0b0f79519af8820cb503f1794ef6e8dedc830ab0670792131c12ca8444585e20048a7ae68bdf3799cc2babe41cfcbb7352c81683b94673bcc5dcf682933d8f21a00099c9784a2298a656ae6532fd82b98aa4a5cc3428711e10654ce92bfd28f6cd2cc88365f7cfd87cfe554e5725d7686ad02caf43b11c6db161831fab0b',
 },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
