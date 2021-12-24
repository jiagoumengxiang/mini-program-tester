import automator from "miniprogram-automator";

describe("init", () => {
  it("init", () => {
    automator
      .connect({
        wsEndpoint: "ws://127.0.0.1:9420",
      })
      .then(async (miniProgram) => {
        const page = await miniProgram.navigateTo("/pages/index/index");
        await page.setData({});
        await miniProgram.disconnect();
      });
  });
});
