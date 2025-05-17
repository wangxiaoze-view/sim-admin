#!/bin/bash

# 检查是否有functional-helpers目录
if [ ! -d "functional-helpers" ]; then
  rm -rf functional-helpers 
fi

# 定义文件URL和本地保存路径
FILE_URL="https://cdn.wangxiaoze.cn/assets/libs/lib-functional-helpers.tar"
OUTPUT_FILE="functional-helpers.tar.gz"
EXTRACT_DIR="functional-helpers"

# 下载文件
echo "正在下载文件..."
curl -L -o "$OUTPUT_FILE" "$FILE_URL"

# 检查下载是否成功
if [ $? -eq 0 ]; then
  echo "文件下载成功: $OUTPUT_FILE"
  
  # 检查文件是否存在及大小
  if [ ! -f "$OUTPUT_FILE" ]; then
    echo "文件不存在，请检查下载过程。"
    exit 1
  fi

  FILE_SIZE=$(stat -c%s "$OUTPUT_FILE")
  if [ "$FILE_SIZE" -lt 1024 ]; then
    echo "文件大小异常，可能下载不完整。"
    exit 1
  fi
  
  # 创建解压目录
  mkdir -p "$EXTRACT_DIR"
  
  # 解压文件
  echo "正在解压文件..."
  tar -xzvf "$OUTPUT_FILE" -C "$EXTRACT_DIR"
  
  # 将dist移动到指定目录
  cd "$EXTRACT_DIR"
  mv dist/* ./
  rm -rf dist
  echo "文件已成功解压到目录: $EXTRACT_DIR"
else
  echo "文件下载失败，请检查网络连接或URL是否正确。"
  exit 1
fi