const fs = require('node:fs');
for(let i = 2; i < process.argv.length; i++){
  let componentName = process.argv[i];
  componentName = componentName.substring(componentName.lastIndexOf('/') + 1);
  console.log(componentName);
  fs.mkdir(process.argv[i], {recursive: true}, (err)=>console.log(err));
  fs.writeFile(process.argv[i] + '/' + componentName + '.js', 
`import './${componentName}.css';

function ${componentName}(){

  return (<><div>${componentName}</div>
         </>);
}

export default ${componentName};`,
 (error)=>{console.log(error == undefined ? 'ok' : error.message)});
  fs.writeFile(process.argv[i] + '/' + componentName +  '.css',
   `.${componentName}{\n}`, (error)=>{console.log(error == undefined ? 'ok' : error.message)});
}