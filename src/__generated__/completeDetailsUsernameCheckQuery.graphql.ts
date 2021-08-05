/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type completeDetailsUsernameCheckQueryVariables = {
    username: string;
};
export type completeDetailsUsernameCheckQueryResponse = {
    readonly checkUsername: {
        readonly available: boolean;
    };
};
export type completeDetailsUsernameCheckQuery = {
    readonly response: completeDetailsUsernameCheckQueryResponse;
    readonly variables: completeDetailsUsernameCheckQueryVariables;
};



/*
query completeDetailsUsernameCheckQuery(
  $username: String!
) {
  checkUsername(username: $username) {
    available
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "UsernameAvailability",
    "kind": "LinkedField",
    "name": "checkUsername",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "available",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "completeDetailsUsernameCheckQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "completeDetailsUsernameCheckQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "completeDetailsUsernameCheckQuery",
    "operationKind": "query",
    "text": "query completeDetailsUsernameCheckQuery(\n  $username: String!\n) {\n  checkUsername(username: $username) {\n    available\n  }\n}\n"
  }
};
})();
(node as any).hash = '9e1559742b80c7453038fe6afd5db2ac';
export default node;
