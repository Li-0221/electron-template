TailwindCss

ElementPlus

# 设置应用图标

在 electron-builder.json5 中

mac 中图标大小最小为 512*512
windows 中图标大小最小为 256*256

```json5
  mac: {
    target: ["dmg"],
    artifactName: "${productName}-Mac-${version}-Installer.${ext}",
    icon: "./public/ycy.png"
  },
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"]
      }
    ],
    artifactName: "${productName}-Windows-${version}-Setup.${ext}",
    icon: "./public/ycy.png"
  },
```
