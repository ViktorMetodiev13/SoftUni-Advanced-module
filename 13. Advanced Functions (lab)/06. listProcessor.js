function listProcessor(inputArr) {
    let result = [];

    for (let line of inputArr) {
        let [command, str] = line.split(' ');
        
        if (command == 'add'){
            add(str);
        } else if (command == 'remove') {
            remove(str);
        } else if (command == 'print') {
            print();
        }
    }

    function add(string) {
        result.push(string);
    }

    function remove(string) {
        for (let index = 0; index < result.length; index++) {
            if (result[index] == string) {
                result.splice(index, 1);
            }
        }
    }

    function print() {
        console.log(result.join(','));
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);