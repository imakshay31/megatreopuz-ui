/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AnswerQuestionInput = {
    answer: string;
    questionNo?: number | null;
    id: string;
};
export type AnswerQuestionMutationVariables = {
    answerInput: AnswerQuestionInput;
};
export type AnswerQuestionMutationResponse = {
    readonly answerQuestion: {
        readonly successful: boolean;
    };
};
export type AnswerQuestionMutation = {
    readonly response: AnswerQuestionMutationResponse;
    readonly variables: AnswerQuestionMutationVariables;
};



/*
mutation AnswerQuestionMutation(
  $answerInput: AnswerQuestionInput!
) {
  answerQuestion(input: $answerInput) {
    successful
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answerInput",
    "type": "AnswerQuestionInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "answerInput"
      }
    ],
    "concreteType": "Empty",
    "kind": "LinkedField",
    "name": "answerQuestion",
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
    "name": "AnswerQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AnswerQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AnswerQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation AnswerQuestionMutation(\n  $answerInput: AnswerQuestionInput!\n) {\n  answerQuestion(input: $answerInput) {\n    successful\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bed5a19fc8020384178760f7493408ff';
export default node;
