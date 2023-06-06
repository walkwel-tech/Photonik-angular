import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    power: { title: '', value: ['700', '700'] },
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
    power: { title: '', value: ['1200', '3200', '550'] },
    summerTimeHrs: { title: '', value: ['0.5', '1', '0.3'] },
    summerEnergyKwh: { title: '', value: ['1.6', '2.2', '0.2'] },
    winterTimeKwh: { title: '', value: ['0.5', '1', '6.2'] },
    winterEnergyKwh: { title: '', value: ['0.6', '2.2', '6.2'] },
    annualEnergyKwh: { title: '', value: ['1.6', '1.65', '5.2'] },
    menu: { value: ['more_vert', 'more_vert', 'more_vert',] }

  },
  {
    appliances: { title: 'Other', value: ['Lights LED'] },
    qty: { title: '', value: ['4',] },
    power: { title: '', value: ['10',] },
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
  displayedColumns: string[] = ['appliances', 'qty', 'power', 'summerTimeHrs', 'summerEnergyKwh', 'winterTimeKwh', 'winterEnergyKwh', 'annualEnergyKwh', 'menu'
  ];
  dataSource = ELEMENT_DATA;
  tableForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tableForm = this.fb.group({
      appliances: this.fb.group({
        kitchenGeneral: this.fb.array([])
      }),
      qty: new FormControl(''),
      power: new FormControl(''),
      summerTimeHrs: new FormControl(''),
      summerEnergyKwh: new FormControl(''),
      winterTimeKwh: new FormControl(''),
      winterEnergyKwh: new FormControl(''),
      annualEnergyKwh: new FormControl(''),
    })
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
  onRemove() {

  }
  onAdd() {

  }
  getTotalCost() {
    return 22;
  }

}
