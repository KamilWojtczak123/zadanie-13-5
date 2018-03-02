var OSinfo = require('./modules/OSInfo');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    //metoda read () ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input != null) {
        var instruction = input.toString().trim();
        switch(instruction){
            case '/exit':
                console.log(process.env.lang);
                console.log(process.versions.node);
                process.stdout.write('Quitting app!\n');
                process.exit();    
                break;
        
            case 'sayhello':
                process.stdout.write('hello\n');
                break;
                
            case '/getOSinfo':
               OSinfo.print();
                break;       
            }    
    }
})