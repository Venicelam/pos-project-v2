'use strict';

function getDetailItem(barcode, list){
    return list.find(listItem => listItem.barcode == barcode);
}

function InsertItemToReceipt(item, itemList){
    let receiptItem = getDetailItem(item.barcode, itemList)
    itemList.push({name:item.name, barcode:item.barcode, count:1, unit:item.unit, price:item.price})
}

function printReceipt (list, barcodes, promotions){
    var itemList = [];
    barcodes.forEach(barcode => {InsertItemToReceipt(itemList, getDetailItem(barcode, list))});
        var output = "";
        var total = 0;
        output = output + '***<store earning no money>Receipt ***\n';
        itemList.forEach( item =>{
            output = output + 'Name: '  + item.name
            output = output + ', Quantity: ' + item.count + item.unit
            output = output + ', Unit price: ' + item.price.toFixed(2) + '(yuan), '
            var subTotal = item.count * item.price;
            output = output + ', Subtotal: ' + (item.count * item.price).toFixed(2) + '(yuan)\n '
            totalPrice = totalPrice + subTotal;
        })
        output = output +  '----------------------\n' + 'Total：' + totalPrice.toFixed(2) + '(yuan)\n' + '**********************'
        return output;
    }

module.exports = {
    printReceipt,
    getDetailItem,
    InsertItemToReceipt
}

