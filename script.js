function sunday() {

    nightmode();

    function find_next_sunday() {
        let isIt = false;
        let day = new Date();
        while (!isIt) {

            day.setDate(day.getDate() + 1);

            for(let i = 0; i < 5; i++){
                let isMonth = tradeSundays[i].getMonth() === day.getMonth();
                if (isMonth == true) {
                    let thisDate = tradeSundays[i].getDate() === day.getDate();
                    if (thisDate == true) {
                        return tradeSundays[i];
                    }
                }
            }
            
            if (day.getFullYear() != 2022) {
                isIt = true;
            }
        }
        return null;
    }

    function next_sunday() {
        let found = find_next_sunday();
        if (found != null) {
            let month = found.getMonth() + 1;
            if(found.getMonth() < 10){
                month = '0' + month;
            }
            return "następna niedziela handlowa: " + found.getDate() + '.' + month;
        } else {
            return "w tym roku już nie będzie niedziel handlowych";
        }
    }

    let lg = (varb) => console.log(varb);

    let answer_place = document.getElementsByName("answer");
    let addt_info = document.getElementsByName("additional-info");

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
                    answer_place[0].innerHTML = "TAK,";
                    addt_info[0].innerHTML = " jutro handlowa";
                } else {
                    answer_place[0].innerHTML = "NIE,";
                    addt_info[0].innerHTML = " jutro niehandlowa &#128530;";
                }
            } else {
                answer_place[0].innerHTML = "NIE,";
                addt_info[0].innerHTML = " jutro niehandlowa &#128530;";
            }
        });
    } else {

        lg(today.getDay());
        switch (today.getDay()) {
            case 0:
                answer_place[0].innerHTML = "JUTRO PONIEDZIAŁEK,";
                let isDate;
                for (let i = 0; i < 5; i++) {
                    isDate = today.getDate() === tradeSundays[i].getDate();
                    if (isDate == true) {
                        i = 5;
                    }
                }
                addt_info[0].innerHTML = " ale dziś jest niedziela " + (isDate ? "handlowa" : "niehandlowa");
                break;

            case 1:
                answer_place[0].innerHTML = "JUTRO WTOREK, ";
                addt_info[0].innerHTML = next_sunday();
                break;

            case 2:
                answer_place[0].innerHTML = "JUTRO ŚRODA, ";
                addt_info[0].innerHTML = next_sunday();
                break;

            case 3:
                answer_place[0].innerHTML = "JUTRO CZWARTEK, ";
                addt_info[0].innerHTML = next_sunday();
                break;

            case 4:
                answer_place[0].innerHTML = "JUTRO PIĄTEK, ";
                addt_info[0].innerHTML = next_sunday();
                break;

            case 5:
                answer_place[0].innerHTML = "JUTRO SOBOTA, ";
                addt_info[0].innerHTML = next_sunday();
                break;
        }

    }
}

function nightmode(){
    let today = new Date();
    if (today.getHours() >= 22 || today.getHours() < 6){
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
    }
}