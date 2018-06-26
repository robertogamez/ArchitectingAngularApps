let ajaxStream$ = Rx.Observable.ajax('UK1.json')
                    .do(r => console.log('emitted'))
                    .map(r => r.response)
                    .retryWhen(err => {
                        return err.delay(3000).take(3).concat(Rx.Observable.throw('giving up'));
                    });

ajaxStream$
.subscribe(data => console.log(data));