/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type loginMutationVariables = {
    idToken: string;
};
export type loginMutationResponse = {
    readonly createUserSession: {
        readonly initialised: boolean;
        readonly cookie: string;
    };
};
export type loginMutation = {
    readonly response: loginMutationResponse;
    readonly variables: loginMutationVariables;
};



/*
mutation loginMutation(
  $idToken: String!
) {
  createUserSession(idToken: $idToken) {
    initialised
    cookie
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "idToken",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "idToken",
        "variableName": "idToken"
      }
    ],
    "concreteType": "UserInitStatus",
    "kind": "LinkedField",
    "name": "createUserSession",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "initialised",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cookie",
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
    "name": "loginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $idToken: String!\n) {\n  createUserSession(idToken: $idToken) {\n    initialised\n    cookie\n  }\n}\n"
  }
};
})();
(node as any).hash = '5688e10f9efefeaaf868223435ba9e1a';
export default node;
