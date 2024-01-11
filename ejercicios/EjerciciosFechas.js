function Init() {
    
}

/* EX 1 */
    // console.log(GetTodayDate());

function GetTodayDate() {
    const fecha = new Date();

    return "Dia: " + (fecha.getDate()) + " Mes: " + (fecha.getMonth() +1) + " Año: " + (fecha.getFullYear()); 
}

/* EX 2 */
function AmI_IN_M07(date) {
    const dia = date.getDay() + 1;
    const hora = date.getHours() + 1;
    const minutos = date.getMinutes() + 1;

    if (dia == 3 && hora >= 8 && minutos >= 55) {
        if (hora <= 10 && minutos <= 45) {
            return "Estas en M-07.";
        }
    }
    else if (dia == 4 && hora >= 12 && minutos >= 10) {
        if (hora <= 13 && minutos <= 59) {
            return "Estas en M-07.";
        }
    }
    else if (dia == 5 && hora >= 8 && minutos >= 55) {
        if (hora <= 10 && minutos <= 45) {
            return "Estas en M-07.";
        }
        else if (hora >= 11 && minutos >= 15) {
            if (hora <= 12 && minutos <= 10) {
                return "Estas en M-07.";
            }
        }
    }

    return "No estás en M-07.";
}

/* EX 3 */
    // const fecha = new Date(2024, 3, 29);

    // TimeToMyBirthday(fecha);

function TimeToMyBirthday(date) {
    const currentDate = new Date();
    const MOVE_TIME_UNITS = 60;
    const CONVERT_HOURS_TO_DAYS = 24;

    let seconds = Math.round((date - currentDate) / 1000);
    let minutes = Math.round(seconds / MOVE_TIME_UNITS);
    let hours = Math.round(minutes / MOVE_TIME_UNITS);
    let days = Math.round(hours / CONVERT_HOURS_TO_DAYS);

    console.log(seconds);
    console.log(minutes);
    console.log(hours);
    console.log(days);
}