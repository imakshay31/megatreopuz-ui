import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

if (typeof document !== "undefined") {
    // Init app on the client side only
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_apiKey,
        authDomain: process.env.NEXT_PUBLIC_authDomain,
        databaseURL: process.env.NEXT_PUBLIC_databaseURL,
        projectId: process.env.NEXT_PUBLIC_projectId,
        storageBucket: process.env.NEXT_PUBLIC_storageBucket,
        messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
        appId: process.env.NEXT_PUBLIC_appId,
        measurementId: process.env.NEXT_PUBLIC_measurementId,
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}

export default firebase;
