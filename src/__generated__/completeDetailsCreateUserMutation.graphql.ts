/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UserCreateInput = {
    name: string;
    username: string;
    college: string;
    country: string;
    phone: string;
    year: number;
};
export type completeDetailsCreateUserMutationVariables = {
    input: UserCreateInput;
};
export type completeDetailsCreateUserMutationResponse = {
    readonly createLocalUser: {
        readonly successful: boolean;
    };
};
export type completeDetailsCreateUserMutation = {
    readonly response: completeDetailsCreateUserMutationResponse;
    readonly variables: completeDetailsCreateUserMutationVariables;
};



/*
mutation completeDetailsCreateUserMutation(
  $input: UserCreateInput!
) {
  createLocalUser(input: $input) {
    successful
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserCreateInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Empty",
    "kind": "LinkedField",
    "name": "createLocalUser",
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
    "name": "completeDetailsCreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "completeDetailsCreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "completeDetailsCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation completeDetailsCreateUserMutation(\n  $input: UserCreateInput!\n) {\n  createLocalUser(input: $input) {\n    successful\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f38f2084a568e069cd856198adc647e3';
export default node;
