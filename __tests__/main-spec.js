const printReceipt = require('../main');


function loadAllItems() {
  return [
    {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      unit: 'bottle',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      unit: 'kg',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: 'Litchi',
      unit: 'kg',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      unit: 'box',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: 'Noodles',
      unit: 'bag',
      price: 4.50
    }
  ];
}

function loadPromotions() {
  return [
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}

 it("getDetailItem should return item detail", function() {
     // Given
     const barcode = "ITEM000001";
     const list = [
         {
             barcode: 'ITEM000000',
              name: 'Coca-Cola',
              unit: 'bottle',
              price: 3.00
         },
         {
             barcode: 'ITEM000001',
             name: 'Sprite',
             unit: 'bottle',
             price: 3.00
         }
     ]

     // When
     const itemDetail = printReceipt.getDetailItem(barcode, list);
     const expected =
         {
             barcode: 'ITEM000001',
             name: 'Sprite',
             unit: 'bottle',
             price: 3.00
         };

     // Then
     expect(itemDetail).toEqual(expected);
 });

it("should insert item to receipt", function() {
     // Given
     const receiptItem = [
        {
             barcode: 'ITEM000000',
             name: 'Coca-Cola',
             unit: 'bottle',
             price: 3.00
        }
     ]

     // When
     const receipt = printReceipt.InsertItemToReceipt(receiptItem);
     const expected = (Coca-Cola, ITEM000000, 1, bottle, 3.00);

     // Then
          expect(receipt).toEqual(expected);
 });