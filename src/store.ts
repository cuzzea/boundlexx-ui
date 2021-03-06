import { prefsReducer } from "prefs/reducers";
import { onUpdate, changeVersion, changeLanuage, changeTheme } from "prefs/actions";
import * as api from "api";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line
// @ts-ignore
import expireReducer from "redux-persist-expire";

const rootReducer = combineReducers({
    prefs: prefsReducer,
    api: api.defReducer,
    colors: api.colorsReducer,
    emojis: api.emojisReducer,
    worlds: api.worldsReducer,
    items: api.itemsReducer,
    skills: api.skillsReducer,
    recipeGroups: api.recipeGroupsReducer,
});

const persistConfig = {
    key: "root",
    storage,
    transforms: [
        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("api", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 14400, // 12 hours
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.defInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),

        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("colors", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 2592000, // 30 days
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.colorsInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),

        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("emojis", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 2592000, // 30 days
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.emojisInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),

        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("items", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 2592000, // 30 days
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.itemsInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),

        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("recipeGroups", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 2592000, // 30 days
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.recipeGroupsInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),

        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("skills", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 2592000, // 30 days
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.skillsInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),

        // Create a transformer by passing the reducer key and configuration. Values
        // shown below are the available configurations with default values
        expireReducer("worlds", {
            // (Optional) Key to be used for the time relative to which store is to be expired
            persistedAtKey: "__persisted_at",
            // (Required) Seconds after which store will be expired
            expireSeconds: 3600, // 1 hour
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: api.worldsInitialState,
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true,
        }),
    ],
};

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line
// @ts-ignore
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export const purgeData = (version?: string | null, skipReload?: boolean): void => {
    const state = store.getState();
    const lang = state.prefs.language;
    const theme = state.prefs.theme;

    if (version === undefined) {
        version = state.prefs.version;
    }

    store.dispatch(onUpdate([]));
    store.dispatch(changeVersion(version));

    // wipe all API data
    store.dispatch(api.updateColors([], null, null, lang));
    store.dispatch(api.updateRecipeGroups([], null, null, lang));
    store.dispatch(api.updateSkills([], null, null, lang));
    store.dispatch(api.updateItems([], null, null, lang));
    store.dispatch(api.updateEmojis([], null, null));
    store.dispatch(api.updateWorlds([], null, null));

    localStorage.clear();

    store.dispatch(changeVersion(version));
    store.dispatch(changeTheme(theme));
    store.dispatch(changeLanuage(lang));

    if (!skipReload) {
        window.location.reload();
    }
};
