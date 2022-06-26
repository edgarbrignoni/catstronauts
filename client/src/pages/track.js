import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";

export const GET_TRACK = gql`
    // our query goes here
`;

const Track = ({ trackId }) => {
  return <Layout></Layout>;
};

export default Track;
