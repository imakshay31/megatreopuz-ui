/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type updateProfileUsernameCheckQueryVariables = {
    username: string;
};
export type updateProfileUsernameCheckQueryResponse = {
    readonly checkUsername: {
        readonly available: boolean;
    };
};
export type updateProfileUsernameCheckQuery = {
    readonly response: updateProfileUsernameCheckQueryResponse;
    readonly variables: updateProfileUsernameCheckQueryVariables;
};



/*
query updateProfileUsernameCheckQuery(
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
    "name": "updateProfileUsernameCheckQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateProfileUsernameCheckQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "updateProfileUsernameCheckQuery",
    "operationKind": "query",
    "text": "query updateProfileUsernameCheckQuery(\n  $username: String!\n) {\n  checkUsername(username: $username) {\n    available\n  }\n}\n"
  }
};
})();
(node as any).hash = '14de78dbd14098232f54fccb0fa6374e';
export default node;
