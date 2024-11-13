export function resetLoginPath(currentPath: string) {
  return {
    path: '/login',
    query: { redirect: currentPath },
    replace: true,
  }
}
