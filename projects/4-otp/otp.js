const otpBtn = document.querySelector('.otpbtn');
const userInput=document.querySelector('#guessField')
const otpForm=document.querySelector('.otpForm')
let generated_otp;

// for otp generate
otpBtn.addEventListener('click', (event) => {
    event.preventDefault()
    generated_otp = parseInt(Math.trunc(Math.random() * 9000 + 1000));
  alert(`the otp is ${generated_otp}`)
});

// for submitting the inputed otp
otpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value from the OTP field
    var otpValue = parseInt(document.getElementById('otpField').value);
    console.log(generated_otp,"ASFD",otpValue);
        if(generated_otp === otpValue){
            console.log("true");
        }
        else
        console.log("false");
    // Do something with the OTP value (for example, log it to the console)
    console.log('OTP entered:', otpValue);

    

});
