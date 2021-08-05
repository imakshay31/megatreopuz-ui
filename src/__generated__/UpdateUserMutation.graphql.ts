/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UserUpdateInput = {
    name?: string | null;
    userName?: string | null;
    college?: string | null;
    country?: string | null;
    phone?: string | null;
    year?: number | null;
};
export type UpdateUserMutationVariables = {
    user: UserUpdateInput;
};
export type UpdateUserMutationResponse = {
    readonly updateLocalUser: {
        readonly successful: boolean;
    };
};
export type UpdateUserMutation = {
    readonly response: UpdateUserMutationResponse;
    readonly variables: UpdateUserMutationVariables;
};



/*
mutation UpdateUserMutation(
  $user: UserUpdateInput!
) {
  updateLocalUser(input: $user) {
    successful
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "user",
    "type": "UserUpdateInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "user"
      }
    ],
    "concreteType": "Empty",
    "kind": "LinkedField",
    "name": "updateLocalUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "successful",
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
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $user: UserUpdateInput!\n) {\n  updateLocalUser(input: $user) {\n    successful\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a090c673b3088421db4f2df310b6ff22';
export default node;
