import cookie from "js-cookie";

import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
} from "react-relay-network-modern";
import { Environment, RecordSource, Store } from "relay-runtime";

const token = cookie.get("authorization");

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }),
  authMiddleware({
    token: token,
    prefix: "",
    // default
    header: "authorization",
  }),
]);

export const getEnvironment = (): Environment => {
  const source = new RecordSource();
  const store = new Store(source);

  return new Environment({ network, store });
};
