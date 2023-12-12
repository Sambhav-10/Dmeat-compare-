let data = [
    {
        Broker: "Zerodha",
        brokerType: "discount",
        Accountfee: "300",
        AnualCharges: "300",
        IntraDayCharges: "20/per order",
        FutureOptionCharges1: "20/per order",

    },
    {
        Broker: "Upstox",
        brokerType: "discount",
        Accountfee: "0",
        AnualCharges: "300",
        IntraDayCharges: "20/per order",
        FutureOptionCharges1: "20/per order",
    },
    {
        Broker: "AngleOne",
        brokerType: "full",
        Accountfee: "0",
        AnualCharges: "300",
        IntraDayCharges: "20/per order",
        FutureOptionCharges1: "20/per order",
    },
    {
        Broker: "Sharekhan",
        brokerType: "full",
        Accountfee: "free",
        AnualCharges: "400",
        IntraDayCharges: "20/per order",
        FutureOptionCharges1: "20/per order",
    },
    {
        Broker: "5Paisa",
        brokerType: "full",
        Accountfee: "free",
        AnualCharges: "500",
        IntraDayCharges: "20/per order",
        FutureOptionCharges1: "20/per order",
    },
]


let mainBroker = document.getElementById("main-broker")
let mainBtn = document.getElementById("main-btn");

let campareBroker = document.getElementById("cam-borker")
let campareBtn = document.getElementById("campare-btn")
let rightbrokerDetails = document.getElementById("right-brokerDetails")
let leftbrokerDetails = document.getElementById("left-brokerDetails")

mainBtn.addEventListener("click", () => {

    data.filter(MaincheakBroker)
})

campareBtn.addEventListener("click", () => {
    
    data.filter(CamparecheakBroker)
})

const MaincheakBroker = (e) => {

    if (e.Broker == mainBroker.value) {

        leftbrokerDetails.innerHTML = `
        <p>Broker name :${e.Broker}</p>
        <p>broker type : ${e.brokerType}</p>
        <p>Account opening fee :${e.Accountfee}</p>
        <p>Anual Charges : ${e.AnualCharges}</p>
        <p>IntraDay Charges : ${e.IntraDayCharges}</p>
        <p>Future and Option Charges :${e.FutureOptionCharges1}</p>
        `
        console.log("working");
    }
    else {
        console.log("not working");
    }
}


const CamparecheakBroker = (e) => {

    if (e.Broker == campareBroker.value) {

        rightbrokerDetails.innerHTML = `
       
        <p>Broker name :${e.Broker}</p>
        <p>broker type : ${e.brokerType}</p>
        <p>Account opening fee :${e.Accountfee}</p>
        <p>Anual Charges : ${e.AnualCharges}</p>
        <p>IntraDay Charges : ${e.IntraDayCharges}</p>
        <p>Future and Option Charges :${e.FutureOptionCharges1}</p>
     
        `
        console.log("working");
    }
    else {
        console.log("not working");
    }
}
