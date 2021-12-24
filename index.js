const automator = require("miniprogram-automator");

/* automator
  .launch({
    cliPath: "D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat", // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: "D:\\coding\\toastmaster-sim\\TableTopicer\\dist", // 项目文件地址
  })
  .then(async (miniProgram) => {
    const page = await miniProgram.reLaunch("/pages/index/index");
    await page.waitFor(500);
    const element = await page.$(".topic");
    console.log(await element.attribute("class"));
    await element.tap();

    await miniProgram.close();
  }); */

automator
  .launch({
    cliPath: "D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat", // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: "D:\\coding\\toastmaster-sim\\TableTopicer\\dist", // 项目文件地址
  }).then(async (miniProgram)=>{
    //9420端口启动后,断开链接
    await miniProgram.disconnect();
  }); 

