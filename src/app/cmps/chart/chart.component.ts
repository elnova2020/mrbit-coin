import { Component, Input, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() statistic:string

  bitCoinData:any

  title:string
  type = 'LineChart'; 
  data = []

  options = {   
      hAxis: {
         title: 'Day'
      },
      vAxis:{
         title: 'Price'
      },
   };
  //  @Input() width = 1200;
  //  @Input() height = 600;


  ngOnInit(): void {

    if ( this.statistic === 'price' ) this.getMarketPriceData()
    else this.getTradeVolumeData()
  }


  constructor(
    private bitcoinService:BitcoinService
  ) { }

  getMarketPriceData() {
    this.bitcoinService.getMarketPrice().subscribe(price => {
      this.bitCoinData = price
      this.title = this.bitCoinData.name
      // this.data = this.marketPricesData.values
      const {values} = this.bitCoinData
      values.map(value => {
        const date = new Date(+value.x * 1000).toISOString().split('T')[0]
        const usd = +value.y/1000
        this.data.push([date, usd])
      })
    })
  }

  getTradeVolumeData() {
    this.bitcoinService.getTradeVolume().subscribe(volume => {
      this.bitCoinData = volume
      this.title = this.bitCoinData.name
      // this.data = this.marketPricesData.values
      const {values} = this.bitCoinData
      values.map(value => {
        const date = new Date(+value.x * 1000).toISOString().split('T')[0]
        const usd = +value.y/1000
        this.data.push([date, usd])
      })
    })
  }

}
