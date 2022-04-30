import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetByPage } from "../hooks/useGetByPage";
import { useGetTotalCount } from "../hooks/useGetTotalCount";

function InfiniteScroll() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  const {
    isLoading: isCountLoading,
    error: countError,
    count,
    isFetching: isCountFetcing,
  } = useGetTotalCount();

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useGetByPage(page, perPage);

  useGetByPage(page + 1, perPage);

  if (isLoading) return <>Loading...</>;
  if (error) return <>'An error has occurred:'</>;

  const handleItemClick = (id) => {
    navigate(`/details/${id}`);
  };

  const handlePreviousClick = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return <div className="flex justify-center"></div>;
}

export default InfiniteScroll;
