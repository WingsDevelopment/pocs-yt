import React from "react";
import { useGetByIdQuery } from "../api/FetchDataApi";

function SingleView({ id }) {
  const { data, error, isLoading, isFetching } = useGetByIdQuery(id);

  if (isLoading) return <p>Loading. . .</p>;
  if (isFetching) return <p>Fetching. . .</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data.name}</div>;
}

export default SingleView;
