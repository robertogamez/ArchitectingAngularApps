﻿let ajaxStream$ = Rx.Observable.ajax('UK1.json')
                    .do(r => console.log("emitted"))
                    .map(r => r.response)
                    .retryWhen(err => {
                        return err.delay(3000);
                    });

ajaxStream$.subscribe(
    data => console.log('ajax result', data),
    err => console.error("ajax error", err)
);