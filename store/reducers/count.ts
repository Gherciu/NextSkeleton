import state from "store/state";
export default (count = state.count, action: any) => {
    switch (action.type) {
        case "INCREMENT": {
            return count + 1;
        }
        case "DECREMENT": {
            return count - 1;
        }
        default:
            return count;
    }
};
