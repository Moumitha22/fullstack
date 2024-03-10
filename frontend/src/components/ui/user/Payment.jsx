import { useState } from "react"

function Payment() {
const[amount, setAmount] = useState(0);

const handleSubmit = (e) => {
    if(){
        alert("Please enter valid amount")
    }
    else{
        let options = {
            key : '',
            key_secret: '',
            amount : amount*100,
            currency: 'INR',
            name : 'Moumitha',
            prefill : {
                name : 'Moumitha',
                email : 'moumitharaghu22@gmail.com',
                contact: '9876543210'
            },
            handler: (response) => {
                alert(response.razorpay_payment_id)
            },
            notes: {
                address: 'Razorpay cooperate'
            },
            theme:{
                color: '#000000'
            }
        };
        let pay = new window.Razorpay(options);
        pay.open();
    }

}
  return (
    <div>
    <h1>Payment</h1>
    </div>
  )
}

export default Payment