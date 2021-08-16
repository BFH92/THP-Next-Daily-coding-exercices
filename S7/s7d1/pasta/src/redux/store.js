import { createStore } from "redux";
import pastasReducer from "./pastas/pastasReducer";
import PastasContainer from "../components/PastasContainer";


let store = createStore(pastasReducer)
store.subscribe(() => console.log(store.getState()));