/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type GetLeaderBoardQueryVariables = {};
export type GetLeaderBoardQueryResponse = {
    readonly getLeaderBoard: ReadonlyArray<{
        readonly name: string;
        readonly username: string;
        readonly questionAttempted: number;
    }>;
};
export type GetLeaderBoardQuery = {
    readonly response: GetLeaderBoardQueryResponse;
    readonly variables: GetLeaderBoardQueryVariables;
};



/*
query GetLeaderBoardQuery {
  getLeaderBoard {
    name
    username
    questionAttempted
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Users",
    "kind": "LinkedField",
    "name": "getLeaderBoard",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionAttempted",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetLeaderBoardQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetLeaderBoardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetLeaderBoardQuery",
    "operationKind": "query",
    "text": "query GetLeaderBoardQuery {\n  getLeaderBoard {\n    name\n    username\n    questionAttempted\n  }\n}\n"
  }
};
})();
(node as any).hash = '9edf6caab03b47be84bfc87673ce0f17';
export default node;
