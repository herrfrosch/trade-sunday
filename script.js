function sunday(){

    let log  = (varb) => console.log(varb);

    let today = new Date();
    let tradeSundays = new Array();

    tradeSundays[0] = new Date(2022, 03, 24);
    tradeSundays[1] = new Date(2022, 05, 26);
    tradeSundays[2] = new Date(2022, 07, 28);
    tradeSundays[3] = new Date(2022, 11, 12);
    tradeSundays[4] = new Date(2022, 11, 18);

    if(today.getDay() == 6){
        log('simea');
    }

}