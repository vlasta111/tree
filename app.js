 let height = Number(prompt('Вкажіть висоту ялинки'));

    switch(height){
        case 0:
            console.log(' довжина повинна бути представлена позитивним числом')
            break;
        case 1:
            console.log('довжина занадто маленька')
            break;
        default:
            for(let i = 0; i < height; i++){
                let star = '*';
                let space = ' '
                for(weight = 1; weight <= i; weight++){
                    star = star + "**"
                }
                let spaceBefore = space.repeat(height-i-1);
                let stars = spaceBefore + star
                console.log(stars)
            }
    }
    



