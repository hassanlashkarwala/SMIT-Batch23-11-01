let cellPhone = {
    brand: "iphone",
    quantity: 5,

    showDetails: function (model, batteryHealth) {
        return "Brand:" + this.brand + " " + "Quantity:" + this.quantity + " " + "Model:" + model + " " + "Battery:" + batteryHealth;
    }
}
let info = cellPhone.showDetails("18 promax", 85)
console.log(info);