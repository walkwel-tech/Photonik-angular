import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PeriodicElement, SolarBenefitsAndAdditionalTips } from 'src/app/interfaces/table';

@Component({
  selector: 'app-table-used',
  templateUrl: './table-used.component.html',
  styleUrls: ['./table-used.component.scss']
})
export class TableUsedComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
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

  tableForm: FormArray | undefined;
  mainForm!: FormGroup;
  summerEnergyTotal: number = 0;
  winterEnergyTotal: number = 0;
  annualEnergyTotal: number = 0;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.getRows()
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
  getRows() {
    this.mainForm = this.fb.group({

      tableRows: this.fb.array([
        this.fb.group({
          category: 'Kitchen General',
          isGroupBy: true
        }),
        this.fb.group({
          appliances: ['Dishwasher'],
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
          power: [150],
          summerTimeHrs: [12],
          summerEnergyKwh: [],
          winterTimeKwh: [10],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          appliances: ['Chest Freezer'],
          qty: [1],
          power: [150],
          summerTimeHrs: [12],
          summerEnergyKwh: [],
          winterTimeKwh: [10],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          category: ' Cooking',
          isGroupBy: true
        }),
        this.fb.group({
          appliances: ['Oven 1'],
          qty: [1],
          power: [3200],
          summerTimeHrs: [0.5],
          summerEnergyKwh: [],
          winterTimeKwh: [0.5],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          appliances: ['Frilnducation Cooktop Zone 4dge'],
          qty: [1],
          power: [2200],
          summerTimeHrs: [1],
          summerEnergyKwh: [],
          winterTimeKwh: [1],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          category: 'Cleaning / Laundry',
          isGroupBy: true
        }),
        this.fb.group({
          appliances: ['Washing Machine'],
          qty: [1],
          power: [700],
          summerTimeHrs: [0.8],
          summerEnergyKwh: [],
          winterTimeKwh: [0.8],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          appliances: ['Clothes Dryer'],
          qty: [1],
          power: [700],
          summerTimeHrs: [],
          summerEnergyKwh: [],
          winterTimeKwh: [1],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          category: 'Heating / Hot Water',
          isGroupBy: true
        }),
        this.fb.group({
          appliances: ['Revers Cylce Air Con 5k V'],
          qty: [1],
          power: [1200],
          summerTimeHrs: [6],
          summerEnergyKwh: [],
          winterTimeKwh: [2],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          appliances: ['Hydronic Heating'],
          qty: [1],
          power: [3200],
          summerTimeHrs: [],
          summerEnergyKwh: [],
          winterTimeKwh: [4],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          appliances: ['Hot water heat pump'],
          qty: [1],
          power: [550],
          summerTimeHrs: [4],
          summerEnergyKwh: [],
          winterTimeKwh: [6],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
        this.fb.group({
          category: 'Other',
          isGroupBy: true
        }),
        this.fb.group({
          appliances: ['Light led'],
          qty: [4],
          power: [10],
          summerTimeHrs: [4],
          summerEnergyKwh: [],
          winterTimeKwh: [5],
          winterEnergyKwh: [],
          annualEnergyKwh: [],
          option: ['more_vert']
        }),
      ]),
    });
  }

  isGroup(index: any, item: any): boolean {
    return item.value.isGroupBy;
  }
  onIncrement(event: string, row: any, index: number) {
    let a = this.mainForm.get('tableRows') as FormArray;
    if (event === 'add') {
      a.controls[index].patchValue({
        qty: row.value.qty += 1
      })
    } else {
      if (row.value.qty > 1)
        a.controls[index].patchValue({
          qty: row.value.qty -= 1
        })
    }
    this.onChanges()
  }

  createItem(): FormGroup {
    return this.fb.group({
      appliances: [''],
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

  addRow(index: number) {

    const items = this.mainForm.get('tableRows') as FormArray;
    items.insert(index + 1, this.createItem())
    // items.push(this.createItem());
    this.table.renderRows();
  }
  deleteRow(index: number) {
    const items = this.mainForm.get('tableRows') as FormArray;
    items.removeAt(index)
    this.table.renderRows()
  }

  onChanges() {

    const table = this.mainForm.get('tableRows') as FormArray;
    this.summerEnergyTotal = table.controls.filter((t => !t.value.category))
      .map(
        (t: any) =>
          (t.value.qty * t.value.power * t.value.summerTimeHrs) / 1000
      )
      .reduce((acc: any, value: any) => acc + value, 0);

    this.winterEnergyTotal = table.controls.filter((t => !t.value.category))
      .map(
        (t: any) =>
          (t.value.qty * t.value.power * t.value.winterTimeKwh) / 1000
      )
      .reduce((acc: any, value: any) => acc + value, 0);

    this.annualEnergyTotal = table.controls.filter((t => !t.value.category))
      .map(
        (t: any) =>
          (((t.value.qty * t.value.power * t.value.summerTimeHrs) / 1000) +
            ((t.value.qty * t.value.power * t.value.winterTimeKwh) / 1000)) / 2
      )
      .reduce((acc: any, value: any) => acc + value, 0);

  }
}
