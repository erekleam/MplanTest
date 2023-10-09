import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { MplanDictionaryService } from './mplan-dictionary.service';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  public headerForm!: FormGroup;
  public countryForm!: FormGroup;
  public FeedbackForm!: FormGroup;
  public payerForm!: FormGroup;
  public loadForm!: FormGroup;
  public loadFormS!: FormGroup;
  public firstInde = new FormControl({value:"", disabled: true});
  public numOfTr = 0;
  public isLastRow = false;
  public isVagon = false;
  public detailsForm: FormArray;
  public routeStationsForm!: FormArray;

  constructor(public fb: FormBuilder, private router: Router,public DictionaryService:MplanDictionaryService ) {
    this.createCountryForm();
    this.createDetailsForm();
    this.CreateFeedbackForm();
    this.CreatePayerForm();
    this.CreateheaderForm();
    this.CreateloadForm();
    this.CreateloadSForm();
    this.statemType();
  
    
    

   }
  //  writeMplanDictionary(DictionaryService: string) {
  //   localStorage.setItem('DictionaryService', DictionaryService)
  //  }

  public createCountryForm(): void {
    this.countryForm = this.fb.group({
        senderCountry: new FormControl('28'),
        senderCountryText: new FormControl('ГРУЗИЯ'),
        // senderNote: new FormControl(''),

        senderStation: new FormControl(''),
        senderStationText: new FormControl(''),
        // senderStationNote: new FormControl(''),

        ReceiverCountry: new FormControl(''),
        ReceiverCountryText: new FormControl(''),
        // ReceiverCountryNote: new FormControl(''),

        ReceiverStation: new FormControl(''),
        ReceiverStationText: new FormControl(''),
        // ReceiverStationNote: new FormControl(''),

        transportingAdministrationCode: new FormControl(''),
        transportingAdministration: new FormControl(''),
        ReceiverdockingCode: new FormControl(''),
        ReceiverdockingSpot: new FormControl(''),
        Code: new FormControl(''),
        Forwarder: new FormControl('')
        
    });
  }

  

  public CreateFeedbackForm(): void{
    this.FeedbackForm = this.fb.group({
      FeedbackNote: new FormControl('')
    });
  }
  
  public CreatePayerForm(): void{
    this.payerForm = this.fb.group({
      LoadSender: new FormControl(''),
      LoadSenderText: new FormControl(''),
      // LoadSenderNote: new FormControl(''),

      LoadReciever: new FormControl(''),
      LoadRecieverText: new FormControl(''),
      // LoadRecieverNote: new FormControl(''),

      PortLoadReciever: new FormControl(''),
      PortLoadRecieverText: new FormControl(''),
      // PortLoadRecieverNote: new FormControl(''),

      Port: new FormControl(''),
      PortText: new FormControl('')
      // PortNote: new FormControl('')
    });
  }
  public CreateheaderForm(): void{
    this.headerForm = this.fb.group({
      StatementType: new FormControl(''),
      FileType: new FormControl(''),
      dateFrom: new FormControl(''),

      LoadType: new FormControl('')
    });
  }


  public CreateloadForm(): void{
    this.loadForm = this.fb.group({
      gzavnilisSaxeoba: new FormControl('2'),
      tvirtiGNG: new FormControl(''),
      tvirtiGNGText: new FormControl(''),
      tvirtiWona: new FormControl(''),
      Nishani: new FormControl('')
    });
  }


  public CreateloadSForm(): void{
    this.loadFormS = this.fb.group({
      VagonisSaxeoba: new FormControl(''),
      VagonisRaodenoba: new FormControl(''),
      konteinerisZoma: new FormControl(''),
      konteinerisRaodenoba: new FormControl('')
    });
  }
  


  public deleteRow(index: number) {
    this.detailsForm.removeAt(index);
    this.numOfTr++;

    let rowCount = this.detailsForm?.controls?.length;
    
    if(rowCount == 1){
      this.isLastRow = true;
      
    }

  }
  public statemType() {
    if(this.loadForm.value.gzavnilisSaxeoba=="1") {
      this.isVagon= true;
      
    }
    else{
      this.isVagon= false;
    }
    
  }

  public addRow() {
    this.detailsForm.push(
      this.fb.group({
        transportingAdministrationCode: new FormControl(''),
        transportingAdministration: new FormControl(''),
        ReceiverdockingCode: new FormControl(''),
        ReceiverdockingSpot: new FormControl(''),
        Code: new FormControl(''),
        Forwarder: new FormControl('')
      }));

      let rowCount = this.detailsForm?.controls?.length;
    
      if(rowCount != 1){
        this.isLastRow = false;

      }

  }

  public createDetailsForm(){
    this.detailsForm = this.fb.array([]);
    this.isLastRow=true;
  }

  public insertData(){
    this.headerForm?.markAllAsTouched();
    this.countryForm?.markAllAsTouched();
    this.detailsForm?.markAllAsTouched();
    this.FeedbackForm?.markAllAsTouched();
    this.payerForm?.markAllAsTouched();
    this.loadForm?.markAllAsTouched();
    this.loadFormS?.markAllAsTouched();

    console.log(1);
    // if(
    //   this.headerForm.invalid ||
    //   this.countryForm.invalid ||
    //   this.detailsForm.invalid ||
    //   this.FeedbackForm.invalid ||
    //   this.payerForm.invalid ||
    //   this.loadForm.invalid ||
    //   this.loadFormS.invalid 

    // )
    // {
    //   swal.fire({
    //     title: 'გთხოვთ შეავსოთ ყველა აუცილებელი ველი!',
    //     icon: 'warning',
    //     confirmButtonText: 'კარგი',
        
    //   })
      
    // }

    const json = {

      senderCountry: this.countryForm.value.senderCountry,
      senderCountryText: this.countryForm.value.senderCountryText,
      // senderNote: this.countryForm.value.senderNote,
      senderStation: this.countryForm.value.senderStation,
      senderStationText: this.countryForm.value.senderStationText,
      // senderStationNote: this.countryForm.value.senderStationNote,
      ReceiverCountry: this.countryForm.value.ReceiverCountry,
      ReceiverCountryText: this.countryForm.value.ReceiverCountryText,
      // ReceverCountryNote: this.countryForm.value.ReceiverCountryNote,
      ReceiverStation: this.countryForm.value.ReceiverStation,
      ReceiverStationText: this.countryForm.value.ReceiverStationText,
      // ReceiverStationNote: this.countryForm.value.ReceiverStationNote,
      transportingAdministrationCode: this.countryForm.value.transportingAdministrationCode,
      transportingAdministration: this.countryForm.value.transportingAdministration,
      ReceiverDockingCode: this.countryForm.value.ReceiverDockingCode,
      ReceiverDockingSpot: this.countryForm.value.ReceiverDockingSpot,
      Code: this.countryForm.value.Code,
      Forwarder: this.countryForm.value.Forwarder,
      FeedbackNote: this.FeedbackForm.value.FeedbackNote,
      LoadSender: this.payerForm.value.LoadSender,
      LoadSenderText: this.payerForm.value.LoadSenderText,
      // LoadSenderNote: this.payerForm.value.LoadSenderNote,
      LoadReciever: this.payerForm.value.LoadReciever,
      LoadRecieverText: this.payerForm.value.LoadRecieverText,
      // LoadRecieverNote: this.payerForm.value.LoadRecieverNote,
      PortLoadReciever: this.payerForm.value.PortLoadReciever,
      PortLoadRecieverText: this.payerForm.value.PortLoadRecieverText,
      // PortLoadRecieverNote: this.payerForm.value.PortLoadRecieverNote,
      Port: this.payerForm.value.Port,
      PortText: this.payerForm.value.PortText,
      // PortNote: this.payerForm.value.PortNote,
      StatementType: this.headerForm.value.StatementType,
      FileType: this.headerForm.value.FileType,
      dateFrom: this.headerForm.value.dateFrom,
      LoadType: this.loadForm.value.LoadType,
      gzavnilisSaxeoba: this.loadForm.value.gzavnilisSaxeoba,
      tvirtiGNG: this.loadForm.value.tvirtiGNG,
      tvirtiGNGText: this.loadForm.value.tvirtiGNGText,
      tvirtiWona: this.loadForm.value.tvirtiWona,
      Nishani: this.loadForm.value.Nishani,
      VagonisSaxeoba: this.loadFormS.value.VagonisSaxeoba,
      VagonisRaodenoba: this.loadFormS.value.VagonisRaodenoba,
      konteinerisZoma: this.loadFormS.value.konteinerisZoma,
      konteinerisRaodenoba: this.loadFormS.value.konteinerisRaodenoba
      
      
    };
    this.DictionaryService.insertData(json);
  }
  


  // public addRouteStation(item?: IMplanRouteStation): void {
  //   if(item) {
  //     this.routeStationsForm.push(
  //       this.fb.group({
  //         ReceiverCountry: new FormControl(item.ReceiverCountry),
  //         ReceiverCountryText: new FormControl(''),

  //         ReceiverStation: new FormControl(item.ReceiverStation),
  //         ReceiverStationText: new FormControl(''),

  //       })
  //     );
    
  //   } else {
  //     this.routeStationsForm.push(
  //       this.fb.group({
  //         ReceiverCountry: new FormControl(''),
  //         ReceiverCountryText: new FormControl(''),

  //         ReceiverStation: new FormControl(''),
  //         ReceiverStationText: new FormControl(''),
  //       })
  //     );
  //   }
  // }


  //DeleteModal
  opensweetalert(index: number){
    swal.fire({
      title: 'ნამდვილად გსურთ წაშლა?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'დიახ!',
      cancelButtonText: 'გაუქმება',
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.deleteRow(index);
        
      }
    })
  }
  
  

}
