import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORIES } from "../graphql/queries";
import Text from "../components/Text";

const useRepositories = () => {
  const { loading, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const repositories = data.repositories;

  return { repositories, loading, refetch };
};

export default useRepositories;
