
const argument=process.argv.slice(1);
function cemberalanbul(yaricap){
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${(Math.PI*yaricap*yaricap).toFixed(2)}`);
}
cemberalanbul(argument[1]*1);