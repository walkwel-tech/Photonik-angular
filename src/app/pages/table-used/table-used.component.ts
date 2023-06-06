import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement, SolarBenefitsAndAdditionalTips } from 'src/app/interfaces/table';
const ELEMENT_DATA: PeriodicElement[] = [
  {
    appliances: { title: 'Kitchen General', value: ['Dishwasher', 'Fridge', 'Chest Freezer'] },
    qty: { title: '', value: ['1', '2', '3'] },
    power: { title: '', value: ['1200', '150', '150'] },
    summerTimeHrs: { title: '', value: ['1', '12', '12'] },
    summerEnergyKwh: { title: '', value: ['0.6', '1.8', '1.8'] },
    winterTimeKwh: { title: '', value: ['1', '10', '10'] },
    winterEnergyKwh: { title: '', value: ['0.6', '1.5', '1.5'] },
    annualEnergyKwh: { title: '', value: ['0.6', '1.65', '1.65'] },
    menu: { value: ['more_vert', 'more_vert', 'more_vert'] }
  },
  {
    appliances: { title: 'Cooking', value: ['Oven 1', 'frillnduction Cooktop Zone 4dge'] },
    qty: { title: '', value: ['1', '2'] },
    power: { title: '', value: ['3200', '2200'] },
    summerTimeHrs: { title: '', value: ['0.5', '1'] },
    summerEnergyKwh: { title: '', value: ['1.6', '2.2'] },
    winterTimeKwh: { title: '', value: ['0.5', '1'] },
    winterEnergyKwh: { title: '', value: ['0.6', '2.2'] },
    annualEnergyKwh: { title: '', value: ['1.6', '1.65',] },
    menu: { value: ['more_vert', 'more_vert'] }

  },
  {
    appliances: { title: 'Cleaning / laundry', value: ['Washing Machine', 'Clothes Dryer'] },
    qty: { title: '', value: ['1', '2'] },
    power: { title: '', value: ['3200', '2200'] },
    summerTimeHrs: { title: '', value: ['0.5', '1'] },
    summerEnergyKwh: { title: '', value: ['1.6', '2.2'] },
    winterTimeKwh: { title: '', value: ['0.5', '1'] },
    winterEnergyKwh: { title: '', value: ['0.6', '2.2'] },
    annualEnergyKwh: { title: '', value: ['1.6', '1.65',] },
    menu: { value: ['more_vert', 'more_vert',] }

  },
  {
    appliances: { title: 'Heating / hot water', value: ['Revers Cylce Air Con 5kW', 'Hydronic Heating', 'Hot Water Heat Pump'] },
    qty: { title: '', value: ['1', '2', '7'] },
    power: { title: '', value: ['3200', '2200', '45'] },
    summerTimeHrs: { title: '', value: ['0.5', '1', '0.3'] },
    summerEnergyKwh: { title: '', value: ['1.6', '2.2', '0.2'] },
    winterTimeKwh: { title: '', value: ['0.5', '1', '6.2'] },
    winterEnergyKwh: { title: '', value: ['0.6', '2.2', '6.2'] },
    annualEnergyKwh: { title: '', value: ['1.6', '1.65', '5.2'] },
    menu: { value: ['more_vert', 'more_vert', 'more_vert',] }

  },
  {
    appliances: { title: 'Other', value: ['Lights LED'] },
    qty: { title: '', value: ['1',] },
    power: { title: '', value: ['1200',] },
    summerTimeHrs: { title: '', value: ['1',] },
    summerEnergyKwh: { title: '', value: ['0.6',] },
    winterTimeKwh: { title: '', value: ['1',] },
    winterEnergyKwh: { title: '', value: ['0.6',] },
    annualEnergyKwh: { title: '', value: ['0.6',] },
    menu: { value: ['more_vert',] }
  },

];

@Component({
  selector: 'app-table-used',
  templateUrl: './table-used.component.html',
  styleUrls: ['./table-used.component.scss']
})
export class TableUsedComponent implements OnInit {
  benefitsList: SolarBenefitsAndAdditionalTips | undefined;
  tableDataSource!: MatTableDataSource<AbstractControl>;
  displayedColumns: string[] = [
    'appliances',
    'qty',
    'power',
    'summerTimeHrs',
    'summerEnergyKwh',
    'winterTimeKwh',
    'winterEnergyKwh',
    'annualEnergyKwh',
    'option'
  ];

  dataSource = ELEMENT_DATA;
  tableForm: FormArray | undefined;
  mainForm!: FormGroup;

  summerEnergyTotal: number = 0;
  winterEnergyTotal: number = 0;
  annualEnergyTotal: number = 0;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      
      tableRows: this.fb.array([
        this.fb.group({
          appliances: ['Dishwasher'],
          category: 'tesss',
          qty: [1],
          power: [1200],
          summerTimeHrs: [1],
          summerEnergyKwh: [],
          winterTimeKwh: [1],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']

        }),
        this.fb.group({
          appliances: ['Plate'],
          qty: [1],
          power: [1500],
          summerTimeHrs: [1],
          summerEnergyKwh: [],
          winterTimeKwh: [1],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          appliances: ['Plate'],
          qty: [1],
          power: [1500],
          summerTimeHrs: [1],
          summerEnergyKwh: [],
          winterTimeKwh: [1],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),

      ]),
    });

    this.tableDataSource = new MatTableDataSource(
      (this.mainForm.get('tableRows') as FormArray).controls
    );
    this.onChanges();
    this.benefitsList = {
      benefits: [
        { title: 'They can help you estimate the size of the solar system you need.' },
        { title: 'They can help you save money on your energy bills.' },
        { title: 'They can help you reduce your carbon footprint.' },
        { title: 'They can make your home or business more sustainable.' }
      ],
      additionalTips: [
        { title: 'Be as accurate as possible when entering your energy usage data.' },
        { title: 'Allow for some extra capacity in your solar system to account for future energy needs.' },
        { title: 'Consult with a solar installer to get professional advice on sizing your solar system.' },
      ]
    }
  }
  onIncrement(event: string, row: any, index: number) {
    let a = this.mainForm.get('tableRows') as FormArray;
    if (event === 'add') {
      a.controls[index].patchValue({
        qty: row.value.qty += 1
      })
    } else {
      a.controls[index].patchValue({
        qty: row.value.qty -= 1
      })
    }
    this.onChanges()
  }

  createItem(): FormGroup {
    return this.fb.group({
      appliances: ['Plate'],
      qty: [1],
      power: [1500],
      summerTimeHrs: [1],
      summerEnergyKwh: [],
      winterTimeKwh: [1],
      winterEnergyKwh: [],
      annualEnergyKwh: [],
      option: ['more_vert']
    });
  }

  addRow(group: FormGroup) {
    const items = this.mainForm.get('tableRows') as FormArray;
    items.push(this.createItem());
  }
  
  onChanges(event?: string, row?: any) {

    let a = this.mainForm.get('tableRows') as FormArray;

    this.summerEnergyTotal = a.controls
      .map(
        (t: any) =>
          (t.value.qty * t.value.power * 0.5 * t.value.summerTimeHrs) / 1000
      )
      .reduce((acc: any, value: any) => acc + value, 0);

    this.winterEnergyTotal = a.controls
      .map(
        (t: any) =>
          (t.value.qty * t.value.power * 0.5 * t.value.winterTimeKwh) / 1000
      )
      .reduce((acc: any, value: any) => acc + value, 0);

    this.annualEnergyTotal = a.controls
      .map(
        (t: any) =>
          (((t.value.qty * t.value.power * 0.5 * t.value.summerTimeHrs) / 1000) +
            ((t.value.qty * t.value.power * 0.5 * t.value.winterTimeKwh) / 1000)) / 2
      )
      .reduce((acc: any, value: any) => acc + value, 0);

  }
}
