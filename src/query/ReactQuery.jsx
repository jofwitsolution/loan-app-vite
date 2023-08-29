import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ReactQuery = ({ children }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 20 * 60 * 1000, //equal to 30mins
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default ReactQuery;
