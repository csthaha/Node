const fs = require('fs');
const files = [];
function walk(path) {
    fs.readdirSync(path)
        .forEach(file => {
            //   console.log(file,'++++++')
            const newPath = path + '/' + file;
            const stat = fs.statSync(newPath);
            if (/\.js$/.test(file)) {
                // 是js文件吗？
                console.log('isFile');
    
                files.push(file);
            } else if (stat.isDirectory) {
                console.log('isDirectory');
                walk(newPath);
            }
        })
        // 正则测试 数字
        //    /^1[0-9]{10}$/.test('12345678912')

    // fs.readdir(path,function(error,files){
    //     if (error){
    //         console.log(error);
    //         return;
    //     }
    //     console.log(files);
    // })//readdir:读取一个目录下的文件
}
walk('./src');
console.log(files, '------');