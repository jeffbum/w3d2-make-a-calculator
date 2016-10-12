var num
var output

function FizzBuzz(num) {
	for (var i= 0; i<= num; i++){
		if(i%5 === 0 && i%3 === 0){
			console.log ('FizzBuzz');
		} else if(i%3 === 0){
			console.log('Fizz');
		} else if(i%5 === 0){
			console.log('Buzz');
		} else {
			console.log('.');
		 output = output + '.'
		}
		return output
	}
}


console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
