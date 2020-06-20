import { RelayNetworkLayer, urlMiddleware } from "react-relay-network-modern";
import { Environment, RecordSource, Store } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

interface EnvironmentModuleClient {
    store?: Store;
    source?: RecordSource;
    environment?: Environment;
    createEnvironment: (records?: RecordMap) => Environment;
}

const environmentModule: () => EnvironmentModuleClient = () => ({
    createEnvironment(
        this: EnvironmentModuleClient,
        records?: RecordMap
    ): Environment {
        if (!this.store) {
            this.source = new RecordSource(records);
            this.store = new Store(this.source);
        }
        if (this.environment) return this.environment;

        this.environment = new Environment({
            store: this.store,
            network: new RelayNetworkLayer([
                urlMiddleware({
                    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
                }),
            ]),
        });

        return this.environment;
    },
});

export default environmentModule;
