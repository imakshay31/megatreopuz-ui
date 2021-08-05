/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type GetQuestionQueryVariables = {};
export type GetQuestionQueryResponse = {
    readonly getQuestion: {
        readonly question: string;
        readonly questionNo: number;
        readonly id: string;
    };
};
export type GetQuestionQuery = {
    readonly response: GetQuestionQueryResponse;
    readonly variables: GetQuestionQueryVariables;
};



/*
query GetQuestionQuery {
  getQuestion {
    question
    questionNo
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "getQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionNo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "GetQuestionQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetQuestionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetQuestionQuery",
    "operationKind": "query",
    "text": "query GetQuestionQuery {\n  getQuestion {\n    question\n    questionNo\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '54ed4b40b1150a1fbe64f2f5faabd535';
export default node;
