const {readFileSync,writeFileSync}=require('fs');
console.log('start')

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first,second)



//append {flag:'a'}
writeFileSync('./content/result-sync.txt',
`Here is the new result :${first}, ${second}`,
{flag:'a'}
)

console.log('Done with the task')
console.log('Starting the new one')