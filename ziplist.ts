function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
    let list3: (string | number)[] = [];

    if(list1.length !== list2.length) {
        console.log("Lists must be of equal length");
        return list3;
    }

    for(let i = 0; i < list1.length; i++) {
        list3.push(list1[i]);
        list3.push(list2[i]);
    }

    return list3;
}

function zipListTheFunctionalWay(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
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