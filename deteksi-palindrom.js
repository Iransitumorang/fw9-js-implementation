function palindrome(input) {
    const kata = input.toLowerCase().split('');
    const kataBaru = kata.join('');
    const balikKata = [...kataBaru].reverse().join('');

    if (kataBaru === balikKata) {
        return ('Palindrome');
    } else {
        return ('Bukan Palindrome');
    }
};

console.log(palindrome('malam'));

function palindrome2(value) {
   for (let i = 0; i < value.length; i++) {
    const indexAwal = i;
    const indexAkhir = value.length - i - 1;
    
    if (value.charAt(indexAwal) !== value.charAt(indexAkhir)){
        return ('Bukan Palindrome');
    }
   }

   return ('Palindrome');
}

console.log(palindrome2('malam'));
