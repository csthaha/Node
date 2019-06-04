const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const url = 'https://movie.douban.com/top250';
const imageDir = './math/';
const moviesDir = './doubanMoviesData/';

function doSpider(start){

    https.get(url + `?start=${start}`, (res) => {
        //源源不断收到数据
        let html = '';
        res.on('data', (chunk) => {
            html += chunk;
        });
        //数据接收完毕
        res.on('end', () => {
            // console.log(html)
            const $ = cheerio.load(html);
            //li .item 25 li
            let movies = []
            $('.item').each(function () {
                // this 限制第一个参数的选择区域 默认是全局
                // 没有this 参数则就找到第一张就不找了
                const picUrl = $('.pic img', this).attr('src');
                const title = $('.info .title', this).text();
                const star = $('.bd .rating_num', this).text();
                const link = $('.hd a', this).attr('href');
    
                const movie = {
                    title,
                    star,
                    link,
                    picUrl
                }
                movies.push(movie);
                // console.log(picUrl);
                // downloadImage(picUrl);
                console.log(movies);
    
            })
            saveLocalData(start / 25,movies);
        })
    })
}

function saveLocalData(pageNum,movies) {

    fs.writeFile(moviesDir + `data${pageNum}.json`,
        JSON.stringify(movies),'utf-8',
        (err) => {
            console.log(err);
            if (!err) {
                console.log('数据保存成功！')
            }
        }
        // (err) => {
        //     if(!err){
        //         console.log('保存成功！')
        //     }
        // }
    );
}
function downloadImage(picUrl) {
    https.get(picUrl, (res) => {
        //设置编码为二进制
        res.setEncoding('binary');
        let data = ''
        res.on('data', (chunk) => {
            data += chunk;
        })
        res.on('end', () => {
            //https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg
            //通过引入path 获取到路径 文件名
            const fileName = path.basename(picUrl);
            fs.writeFile(imageDir + fileName,
                data,
                'binary',
                (err) => {
                    // console.log(err)
                    if (!err) {
                        console.log(fileName, '保存成功！')
                    }
                }
            )
        })
    })
}

const total = 250;
let start = 0;
while (start < total){
    doSpider(start);
    start += 25;
}

