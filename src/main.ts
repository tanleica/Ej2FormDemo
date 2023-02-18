import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhlXFpHaV5LQmFJfFBmTGldeVRycEUmHVdTRHRcQl9iTnxRd0diXX5Wcnc=;Mgo+DSMBPh8sVXJ0S0J+XE9BdlRBQmJAYVF2R2BJdlR0cl9EZEwxOX1dQl9gSXxScUdhWH1fdHVcTmM=;ORg4AjUWIQA/Gnt2VVhkQlFac19JXnxId0x0RWFab1d6cFNMYlhBJAtUQF1hSn5Rd0JhW35ccXBXR2Vf;MTE1MzU2MEAzMjMwMmUzNDJlMzBoS096TG91cFc5UWZuVnhkZnlvR2VQSVB1NmRoak82QStKeTYxa0VTcGFvPQ==;MTE1MzU2MUAzMjMwMmUzNDJlMzBvVkNpSUJJdlFoRGs0Y3BhOFdxZm1xQUFTVk9wK0FCL052MElQTDdyNEw4PQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpCVmBWf1ppR2NbfE55flFAal5VVBYiSV9jS31TdERkW31fcnVRRWBbUA==;MTE1MzU2M0AzMjMwMmUzNDJlMzBmVm5Nam9LTS9yVTNPUDhzSHYvdzdtb0ZCOG9rTjFYYkVaNStTWmR0blFjPQ==;MTE1MzU2NEAzMjMwMmUzNDJlMzBPdlI5eHdHR0FFazBUdlVSNGJGR201b2JFb3UwOEpDMmFZOXVtRkJXbHRFPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac19JXnxId0x0RWFab1d6cFNMYlhBJAtUQF1hSn5Rd0JhW35ccXBRRWBe;MTE1MzU2NkAzMjMwMmUzNDJlMzBONFpSRVQ1R1JkVnBVeEVxZ0xjL3NLc1R3ZmRWeVJCQ1o5QmNEN3FVMkdrPQ==;MTE1MzU2N0AzMjMwMmUzNDJlMzBmakloU0o3M051YzVYN1VtK0l3NDN6MWtZeGFRbFlhNGcycW9oNHNSRWlrPQ==;MTE1MzU2OEAzMjMwMmUzNDJlMzBmVm5Nam9LTS9yVTNPUDhzSHYvdzdtb0ZCOG9rTjFYYkVaNStTWmR0blFjPQ==');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
