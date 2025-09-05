#!/bin/bash
echo "⌛️ sim-admin 项目正在构建中，可能需要一些时间，请稍等..."

# 是否需要install
if test "$Re_Install" = "true" ; then
	rm -rf node_modules pnpm-lock.yaml
	pnpm run init
fi

pnpm run build
cd dist
docker cp ./ "$CONTAINER":/www/sites/wangxiaoze.cn/index/admin

echo "✅ sim-admin 项目构建完成！"
