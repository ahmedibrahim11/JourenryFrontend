import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { AsyncStorage } from "react-native"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { persistStore, persistReducer } from "redux-persist";

import {
    State,
    reducer,

    //Actions
    success
} from "./state";

const persistConfig = {
    key: 'root',
    storage,
}

export class Application {
    static current: Application;
    persistReducer = persistReducer(persistConfig, reducer);
    store = createStore(this.persistReducer, composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware)));
    persistor = persistStore(this.store);

    static async run() {
        Application.current = new Application();
        try {
            await Application.current.onInstall();
            await Application.current.onStart();
        } catch (err) {
            console.error(err);
        }
    }

    async onStart() {
        debugger;
        // var state = await AsyncStorage.getItem('State');
        //Application.current.store.setState(state);
        // console.log(Application.current.store.getState());
    }

    static async onClose() {
        debugger;
        var json = Application.current.store.getState();
        //console.log(JSON.stringify(state));
        console.log(json);
        await AsyncStorage.setItem('State', json);
    }
    async onInstall() { }
    async onUpdate() { }

    //TODO:
    onError() { }
}
