import { Component, Inject, inject, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { EmployeeResponse } from '../../../interfaces/EmployeeResponse';
import { MatSelectChange } from '@angular/material/select';
import { ShipperResponse } from '../../../interfaces/ShipperResponse';
import { ProductResponse } from '../../../interfaces/ProductResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewOrderRequest } from '../../../interfaces/NewOrderRequest';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerResponse } from '../../../interfaces/CustomerResponse';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrl: './new-order-form.component.scss'
})
export class NewOrderFormComponent implements OnInit {

  readonly orderService = inject(OrderService);
  employees: EmployeeResponse[] = [];
  shippers: ShipperResponse[] = [];
  products: ProductResponse[] = [];
  selectedEmployee!: number;
  selectedShipper!: number;
  selectedProduct!: number;
  public form: FormGroup;


  constructor(private readonly fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public customer: CustomerResponse,
  public dialogRef: MatDialogRef<NewOrderFormComponent>) {

    this.form = this.fb.group({
      employee: ['', Validators.required],
      shipper: ['', Validators.required],
      shipName: ['', Validators.required],
      shipAddress: ['', Validators.required],
      shipCity: ['', Validators.required],
      shipCountry: ['', Validators.required],
      orderDate: [null, Validators.required],
      requiredDate: [null, Validators.required],
      shippedDate: [null, Validators.required],
      freight: ['', Validators.required],
      product: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getShippers();
    this.getProducts();
  }

  getEmployees() {
    this.orderService.getEmployees().subscribe(resp => {
      if (resp) {
        this.employees = resp;
      }
    })
  }

  getShippers() {
    this.orderService.getShippers().subscribe(resp => {
      if (resp) {
        this.shippers = resp;
      }
    })
  }

  getProducts() {
    this.orderService.getProducts().subscribe(resp => {
      if (resp) {
        this.products = resp;
      }
    })
  }

  onEmployeeChange(event: MatSelectChange) {
    this.selectedEmployee = event.value;
  }

  onShipperChange(event: MatSelectChange) {
    this.selectedShipper = event.value;
  }

  onProductChange(event: MatSelectChange) {
    this.selectedProduct = event.value;
  }

  createOrder() {
    const newOrder: NewOrderRequest = {
      custId: this.customer.custId,
      empId: this.selectedEmployee,
      orderDate: this.form.get('orderDate')?.value,
      requiredDate: this.form.get('requiredDate')?.value,
      shippedDate: this.form.get('shippedDate')?.value,
      shipperId: this.selectedShipper,
      freight: this.form.get('freight')?.value,
      shipName: this.form.get('shipName')?.value,
      shipAddress: this.form.get('shipAddress')?.value,
      shipCity: this.form.get('shipCity')?.value,
      shipRegion: '',
      shipPostalCode: '',
      shipCountry: this.form.get('shipCountry')?.value,
      orderDetailList: [{
        productId: this.selectedProduct,
        unitPrice: this.form.get('unitPrice')?.value,
        qty: this.form.get('quantity')?.value,
        discount: this.form.get('discount')?.value,
      }]
    }
    this.orderService.createNewOrder(newOrder).subscribe(resp => {
      if (resp) {
        this.form.reset();
        this.dialogRef.close();
       } 
    });
  }
}
