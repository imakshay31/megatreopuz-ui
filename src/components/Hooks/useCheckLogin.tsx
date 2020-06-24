import { useQuery, graphql, RenderProps } from "relay-hooks";
import { useCheckLoginQuery } from "../../__generated__/useCheckLoginQuery.graphql";

const query = graphql`
    query useCheckLoginQuery {
        isUserLoggedIn {
            id
            value
        }
    }
`;

export function useCheckLogin(): RenderProps<useCheckLoginQuery> {
    const data = useQuery<useCheckLoginQuery>(query);
    return data;
}
