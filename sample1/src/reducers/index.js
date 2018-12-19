import {combineReducers} from 'redux';
import courses from "../components/course/courseReducer";

const rootReducer = combineReducers ({
    courses :courses
});

export default rootReducer;