#!/bin/bash



echo ""
echo "⏬正在下载插件..."
echo ""

# 下载远程文件
curl -L -o "lib-functional-helpers.tar.gz" "https://cdn.wangxiaoze.cn/assets/libs/lib-functional-helpers.tar.gz"


# 判断是否下载完成
if [ $? -eq 0 ]; then
  echo ""
  echo ""
  echo "⏬正在执行脚本文件..."
  echo ""
  echo ""
  node ./scripts/preinstall.js
  echo ""
  echo ""

  pnpm install
else
  echo "文件下载失败"
  exit 1
fi
