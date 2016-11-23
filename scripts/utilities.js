function forEach (dataArray, callBack) {
    for (i = 0; i < dataArray.length; i += 1){
        callBack(dataArray[i]);
    }
}