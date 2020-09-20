import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) {
   
   }

   baseUrl='https://apitest.sozu.com/api/admin/getAllProperties'
   protected getHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk5NjAwNGRkYmRlYmFkODYyYzFiM2JlNzE3MzE4OTU0NDdiNWEzODMwN2M4N2UyY2I2MzlhNzgyZjQzOTc5OGI2MzE1ZDQ2NDI0NWY2MWUxIn0.eyJhdWQiOiIxIiwianRpIjoiOTk2MDA0ZGRiZGViYWQ4NjJjMWIzYmU3MTczMTg5NTQ0N2I1YTM4MzA3Yzg3ZTJjYjYzOWE3ODJmNDM5Nzk4YjYzMTVkNDY0MjQ1ZjYxZTEiLCJpYXQiOjE1OTQzNTc1NDEsIm5iZiI6MTU5NDM1NzU0MSwiZXhwIjoxNjI1ODkzNTQxLCJzdWIiOiIyOTciLCJzY29wZXMiOltdfQ.exkBldcsFvmYkIDR5UqslaI05lveeQcbyjjpnrC0sGYamqmywS0Gz3TAUYxH5htlN1w5ngdwKGIOHxFnk8T_PlI-T-6Wjpkmz3LmZNPZWBOp96xlWCv4i6S5EK4xRulKxW1PME96jCX4sjLZc9PCVmbPpGiRSDMgQLPt2ZSttlxKwL6KdKGVUT2BxTcqwduPyBhD_u084ZUBUFBJ0jrLqthlEj3Ha5eSxWxWS8S2ImnjeD3jK2kZ97ypMXwn70xB1dNMfNhHija0Wv1gEJHXi4PU_5yi0_do613PSLqAbSGASs0GpMAGovgDNdZ3yUh72ay7rb29Vc-YWrMVbbS6X8eQlW7kudepCSdy7kTt3L0jf11sg4D9RlB87EaNdd6w7giaWFqRdphXB9wauOPsSvZ15m0RtTVmNHg5Fechwt7YvLDtF6rov-deYm9Un5oUKn4usIWfsbNB99g7XCYSECXS02WhLv5DWVxYqjKW-GRjy2VFgN0UnHIfbXzqSmSp6g34S11pPMlgc6JGVE5NcaltI6NCd4nOZXDOskaOylDPeQBTKftIRNBJHualaUS840OD_VR0nQGvMew1d0gRr0Bn5LQ8oca4_Bs8MZW9KrVrkMxjxyJuEEA8jsEwE9RV-Br1fJ3vAdcPq8PHbtVYsteoP3NwRrovAWSS4AYPgfs'
      })
    };
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/properties.json");
}

// public getJSON():Observable<any>{
//   return this.http.get(this.baseUrl,this.getHeaders())
// }
}
