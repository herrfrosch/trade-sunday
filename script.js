function sunday() {

    let lg = (varb) => console.log(varb);

    let today = new Date();
    let tradeSundays = new Array();

    tradeSundays[0] = new Date(2022, 03, 24);
    tradeSundays[1] = new Date(2022, 05, 26);
    tradeSundays[2] = new Date(2022, 07, 28);
    tradeSundays[3] = new Date(2022, 11, 12);
    tradeSundays[4] = new Date(2022, 11, 18);
    
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (today.getDay() == 6) {

        let isMonth = new Array();

        tradeSundays.forEach((element, index) => {

            isMonth[index] = tomorrow.getMonth() === element.getMonth();

            if (isMonth[index] == true) {

                let isDate = tomorrow.getDate() === element.getDate();

                if (isDate == true) {
                    alert('jutro handlowa!!!');
                } else {
                    alert('no raczej nie');
                }
            }
        });
    } else {

        switch (tomorrow.getDay()){
            
            case 1:
                


        }

    }

}