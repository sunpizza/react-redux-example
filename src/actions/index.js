//import { INCREMENT } from './ActionTypes';
import * as types from './ActionTypes';

//액션 생성자
export function increment() {

    console.log(types.INCREMENT );

    return {
        // type: `${types.INCREMENT}`
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color // color:color과 동일
    };
}

