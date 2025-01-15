const n = (t, e) => (t.install = (l) => {
  for (const o of [t, ...Object.values({})])
    l.component(o.name, o);
}, t), s = (t = []) => ({
  // version,
  install: (l) => {
    console.log(t, l, 222), t.forEach((o) => l.use(o));
  }
});
export {
  s as makeInstaller,
  n as withInstall
};
