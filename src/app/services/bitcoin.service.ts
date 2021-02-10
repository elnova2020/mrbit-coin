import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  rateUrl:string = 'https://blockchain.info/tobtc?currency=USD&value=1'
  marketPriceUrl:string= 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
  tradeVolumeUrl:string = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'

  constructor(
    private http:HttpClient
  ) { }

  public getRate() {
    return this.http.get<string>(this.rateUrl)
  }

  public getMarketPrice() {
    return this.http.get(this.marketPriceUrl)
  }

  public getTradeVolume() {
    return this.http.get(this.tradeVolumeUrl)
  }

}
