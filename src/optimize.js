const fs = require('fs')

fs.readFile('./build/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let script1 = ""
  let script2 = ""
  let i = data.indexOf('script defer="defer" src="') + 'script defer="defer" src="'.length;
  while (data[i] != '"') {
    script1 += data[i]
    i++
  }
  /*i = data.indexOf('script src="/', i) + 'script src="/'.length;
  while (data[i] != '"') {
    script2 += data[i]
    i++
  }*/
  data = data.replace('<script defer="defer" src="' + script1 + '"></script>', '')
  //data = data.replace('<script src="/'+script2+'"></script>', '<script type="text/javascript"><?include "'+script2+'"?></script><style><?include "css/style.css";?></style><style><?include "css/media.css";?></style><?include "scripts.php"?>')
  data = data.replace('</body>', '</body><script defer="defer"><? include "' + script1.substring(1) + '"?></script><?include "scripts.php"?><style><?include "css/style.css";?></style><style><?include "css/swiper.css";?></style>')
  fs.writeFileSync("./build/index.php", data)
  fs.unlink("./build/index.html", () => { })
})