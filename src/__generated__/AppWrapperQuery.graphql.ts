/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AppWrapperQueryVariables = {};
export type AppWrapperQueryResponse = {
    readonly getPlayer: {
        readonly id: string;
        readonly userName: string;
        readonly email: string;
        readonly year: number;
        readonly college: string;
        readonly country: string;
        readonly phone: string;
        readonly name: string;
        readonly solvedQuestions: number;
        readonly totalAttempts: number;
    };
};
export type AppWrapperQuery = {
    readonly response: AppWrapperQueryResponse;
    readonly variables: AppWrapperQueryVariables;
};



/*
query AppWrapperQuery {
  getPlayer {
    id
    userName
    email
    year
    college
    country
    phone
    name
    solvedQuestions
    totalAttempts
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getPlayer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "year",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "college",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
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
        "name": "solvedQuestions",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalAttempts",
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
    "name": "AppWrapperQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppWrapperQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppWrapperQuery",
    "operationKind": "query",
    "text": "query AppWrapperQuery {\n  getPlayer {\n    id\n    userName\n    email\n    year\n    college\n    country\n    phone\n    name\n    solvedQuestions\n    totalAttempts\n  }\n}\n"
  }
};
})();
(node as any).hash = '91b412e4a3d68104e71000ff6b8346e0';
export default node;
