import { Components } from "api/client";
import { NumberDict, NumericAPIItems } from "types";

interface Worlds extends NumericAPIItems {
    items: NumberDict<Components.Schemas.SimpleWorld>;
}

export const worldsInitialState: Worlds = {
    items: {},
    count: null,
    nextUrl: null,
};

export type WorldsPayload = {
    items: NumberDict<Components.Schemas.SimpleWorld>;
    nextUrl?: string | null;
    count?: number | null;
};

export const UPDATE_WORLDS = "UPDATE_WORLDS";

export interface UpdateWorldsAction {
    type: typeof UPDATE_WORLDS;
    payload: WorldsPayload;
}

export function worldsReducer(state = worldsInitialState, action: UpdateWorldsAction): Worlds {
    if (action.type === UPDATE_WORLDS) {
        const newState = { ...state, items: { ...state.items, ...action.payload.items } };
        if (action.payload.count !== undefined && action.payload.nextUrl !== undefined) {
            return { ...newState, count: action.payload.count, nextUrl: action.payload.nextUrl };
        }
        return newState;
    }
    return state;
}

export function updateWorlds(
    results: Components.Schemas.SimpleWorld[],
    count?: number | null,
    nextUrl?: string | null,
): UpdateWorldsAction {
    const mapped: NumberDict<Components.Schemas.SimpleWorld> = {};

    results.forEach((result) => {
        if (result.id === undefined) {
            return;
        }

        mapped[result.id] = result;
    });

    return {
        type: UPDATE_WORLDS,
        payload: {
            items: mapped,
            count: count,
            nextUrl: nextUrl,
        },
    };
}
