chmod +x pull.sh

# 是否需要install
if test "$Re_Install" = "true" ; then
	rm -rf node_modules pnpm-lock.yaml
	pnpm install
fi
pnpm run build
docker cp ./dist 1Panel-openresty-0yGn:/www/sites/sim-admin.wangxiaoze.cn/index