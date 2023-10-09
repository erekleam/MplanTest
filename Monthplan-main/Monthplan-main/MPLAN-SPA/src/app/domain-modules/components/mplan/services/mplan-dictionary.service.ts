import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormService } from './form.service';
import { TranslateService } from '@ngx-translate/core';
import { Dictionary } from 'src/app/shared/models/dictionary.model';
import { containerSizesList, fileTypesList, shipmentTypesList, signTypesList, transportingTypesList, vagonTypesList } from '../models/full-mplan.model';
@Injectable({
  providedIn: 'root'
})
export class MplanDictionaryService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private form:FormService, private translate: TranslateService) {
    }

    public getDictionaries(){
      return this.http.get<fileTypesList>(this.apiUrl + '/dictionary/fileTypes');
    }
    public getSecDictionaries(){
      return this.http.get<transportingTypesList>(this.apiUrl + '/dictionary/transportingTypes');
    }

    public getThirdDictionaries(){
      return this.http.get<shipmentTypesList>(this.apiUrl + '/dictionary/shipmentTypes');
    }

    public getFourthDictionaries(){
      return this.http.get<signTypesList>(this.apiUrl + '/dictionary/signTypes');
    }

    public getFifthDictionaries(){
      return this.http.get<vagonTypesList>(this.apiUrl + '/dictionary/vagonTypes');
    }

    public getSixthDictionaries(){
      return this.http.get<containerSizesList>(this.apiUrl + '/dictionary/ContainerSizes');
    }
    public insertData(data:any) {
      console.log(data);
      return this.http.post<any>(this.apiUrl + '/insert-mplan', data);
    }
  

  //------------------------------------------------------------------------------------------------------------------------------------------------
  // //AN

  // public saveMonthPlan(data:any){
  //   return this.http.post<any>(this.apiUrl+ '/insert-Data', data);
  // }



  //------------------------------------------------------------------------------------------------------------------------------------------------
    
    // public getSecondDictionaries(){
    //   return this.http.get<fileTypesList>(this.apiUrl + '/dictionary/transportingTypes');
    // }


  // public setDictionaries() {
  //   this.getDictionaries().subscribe((data) => {
  //     this.MplanDictionaries = data;
  //   });
  // }
    
}
