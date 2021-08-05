/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type GetMyProfileInput = {
    userId: string;
};
export type GetProfileInfoQueryVariables = {
    profileInput: GetMyProfileInput;
};
export type GetProfileInfoQueryResponse = {
    readonly getMyProfileInfo: {
        readonly rank: number;
        readonly totalParticipants: number;
    };
};
export type GetProfileInfoQuery = {
    readonly response: GetProfileInfoQueryResponse;
    readonly variables: GetProfileInfoQueryVariables;
};



/*
query GetProfileInfoQuery(
  $profileInput: GetMyProfileInput!
) {
  getMyProfileInfo(input: $profileInput) {
    rank
    totalParticipants
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "profileInput",
    "type": "GetMyProfileInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "profileInput"
      }
    ],
    "concreteType": "RankInfo",
    "kind": "LinkedField",
    "name": "getMyProfileInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "rank",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalParticipants",
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
    "name": "GetProfileInfoQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetProfileInfoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetProfileInfoQuery",
    "operationKind": "query",
    "text": "query GetProfileInfoQuery(\n  $profileInput: GetMyProfileInput!\n) {\n  getMyProfileInfo(input: $profileInput) {\n    rank\n    totalParticipants\n  }\n}\n"
  }
};
})();
(node as any).hash = '6d5338f5eb4fe7d71f593623343f6af7';
export default node;
