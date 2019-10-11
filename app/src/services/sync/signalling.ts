import firebase from 'react-native-firebase'
import { SignalTransport } from 'simple-signalling/lib/types'
import { FirebaseSignalTransport } from 'simple-signalling/lib/firebase'

export function createFirebaseSignalTransport(): SignalTransport {
    return new FirebaseSignalTransport({
        database: firebase.database() as any,
        collectionName: 'signalling',
    })
}
