 let data = new Date();
 document.write(data)
 console.log(data);

 document.write('<br>')
 
let dataNascita = new Date(1985, 07, 21, 07, 30, 00)
 document.write(dataNascita + ' ' + 'Giorno di quando sono nato')

 document.write('<br>')

let millesecondi = Date.parse (2022, 03, 26)
document.write(millesecondi)

document.write('<br>')
let millesecondi2 = Date.parse ('april 26, 2022')
document.write(millesecondi2, '<br>')

document.write(data.getFullYear() + ' ' + 'Anno corrente' + '<br>')
document.write(data.getMonth() + ' ' + 'Mese corrente Aprile' + '<br>')
document.write(data.getDate() + ' ' + 'Giorno del mese' + '<br>' )
document.write(data.getDay() + ' ' + 'Martedì' + '<br>')




document.write(data.toLocaleDateString() + ' ' + 'Data del formato europeo' + '<br>')


let data2 = new Date('2022-11-26T15:49:30Z')
document.write(data2)