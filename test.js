///**
// * Created by bindo on 7/12/17.
// */
//
//
//function firstStep() {
//    console.log(1)
//}
//function secondStep() {
//    console.log(2)
//}
//function thirdStep() {
//    console.log(3)
//}
////for(let i=0;i<9;i++) {
////    firstStep();
////    secondStep();
////    thirdStep();
////}
//
//
//(async function main() {
//    try {
//    //    await Promise.all([
//    //        firstStep(),
//    //secondStep(),
//    //thirdStep()
//    //    ]);
//        await firstStep();
//        await secondStep();
//        await thirdStep();
//        //var val1 = await firstStep();
//        //var val2 = await secondStep();
//        //var val3 = await thirdStep();
//
//        console.log( "Final: ", 2 );
//    }
//    catch (err) {
//        console.error( err );
//    }
//}());

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {
    //
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();
