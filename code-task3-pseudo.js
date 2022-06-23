const deretAngka = (result) => {
    const deret1 = result.toString().split(0)
    const deret2 = deret1.map((item) => {
        return item.split('').sort().join('')
    });
    console.log(parseInt(deret2.join("")))
};

deretAngka(981230372210694);
deretAngka(5956560159466056);


// pseudo-code
// Start
// input variable
// input pemisah
// urutkan
// hasil
// done