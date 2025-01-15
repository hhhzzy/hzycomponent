import { defineComponent as e, openBlock as o, createElementBlock as n, renderSlot as r } from "vue";
import "./style/index.css";
const s = { class: "hzy-button" }, l = /* @__PURE__ */ e({
  name: "hzy-button",
  __name: "button",
  setup(a) {
    return (t, c) => (o(), n("button", s, [
      r(t.$slots, "default")
    ]));
  }
});
export {
  l as default
};
