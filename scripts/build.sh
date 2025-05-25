#!/bin/bash
echo "正在进行项目打包，请稍等..."

# 是否需要install
if test "$Re_Install" = "true" ; then
	rm -rf node_modules pnpm-lock.yaml
	pnpm run init
fi

pnpm run build
cd dist
docker cp ./ "$CONTAINER":/www/sites/wangxiaoze.cn/index/admin
