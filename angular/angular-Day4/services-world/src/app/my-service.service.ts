import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class MyService {

    mySharedData = 'asdf';

    mySharedLogic() {
        this.mySharedData = "new data";
    }

}