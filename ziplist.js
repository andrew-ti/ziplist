"use strict";
function zipList(list1, list2) {
    let list3 = [];
    if (list1.length !== list2.length) {
        console.log("Lists must be of equal length");
        return [];
    }
    for (let i = 0; i < list1.length; i++) {
        list3.push(list1[i]);
        list3.push(list2[i]);
    }
    return list3;
}
function zipListTheFunctionalWay(list1, list2) {
    if (list1.length !== list2.length) {
        console.log("Lists must be of equal length");
        return [];
    }
    return list1.map((x, i) => {
        return [list1[i], list2[i]];
    }).reduce((result, pair) => {
        result.push(pair[0]);
        result.push(pair[1]);
        return result;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
